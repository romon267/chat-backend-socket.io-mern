const http = require('http');
const socketIo = require('socket.io');
const app = require('./app');
const config = require('./utils/config');
const Channel = require('./models/channel');
require('express-async-errors');

const server = http.createServer(app);

const io = socketIo(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: '*',
  },
});

io.on('connection', (socket) => {
  // join a room
  const { roomId } = socket.handshake.query;
  socket.join(roomId);
  let userRefToLeave;
  socket.on('userJoinRoom', async (user) => {
    const roomList = await Channel.find().sort('-createdAt');
    userRefToLeave = user;
    io.in(roomId).emit('userJoinRoom', user);
    // Find the room with roomId
    // Then set users to new users with a user from connection
    const roomToChange = roomList.find((r) => r.id === roomId);
    const oldUsers = roomToChange.users;
    let newUsers;
    // If a user is already in the room, it won't duplicate
    if (oldUsers.find((u) => u.id === user.id)) {
      newUsers = oldUsers;
    } else {
      newUsers = [...oldUsers, user];
    }
    // Saving users changes to the database
    const savedRoom = await Channel.findByIdAndUpdate(roomId, { users: newUsers }, {
      new: true,
      runValidators: true,
    });
    // Emiting the new roomList so a user gets update on users in a chat
    io.emit('roomListChange', savedRoom);
  });

  // Listen for new messages
  socket.on('newChatMessageToServer', async (newMsg) => {
    io.in(roomId).emit('newChatMessage', newMsg);
    const channelToUpdate = await Channel.findById(roomId);
    const oldMessages = channelToUpdate.messages;
    const newMessages = [...oldMessages, newMsg];
    await Channel.findByIdAndUpdate(roomId, { messages: newMessages }, {
      new: true,
      runValidators: true,
    });
  });

  socket.on('disconnect', async () => {
    socket.leave(roomId);
    const oldChannel = await Channel.findById(roomId);
    const oldUsers = oldChannel.users;
    const newUsers = oldUsers.filter((u) => u.id !== userRefToLeave.id);
    io.in(roomId).emit('userLeaveRoom', userRefToLeave);
    await Channel.findByIdAndUpdate(roomId, { users: newUsers });
  });
});

server.listen(config.PORT, () => console.log(`listening on port ${config.PORT}`));
