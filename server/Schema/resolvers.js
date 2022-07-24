const Users = require("../models/users.model");

const resolvers = {
  Query: {
    name: () => {
      return "Jhony dep";
    },
    getAllUsers: async () => {
      return await Users.find();
    },
    getOneUser: async (_parent, { id }, _contxt, _info) => {
      return await Users.findById(id);
    },
  },
  Mutation: {
    createUser: async (parent, args, context, info) => {
      const { name, username } = args.user;
      const users = new Users({ name, username });
      await users.save();
      return users;
    },
    deleteUser: async (parent, args, context, info) => {
      const { id } = args;
      await Users.findByIdAndDelete(id);
      return "user removed";
    },
    updateUser: async (parent, args, context, info) => {
      const { id } = args;
      const { name, username } = args.user;
      const updates={}
      if(username!==undefined)
      {
        updates.username=username
      }
      if(name!==undefined){
        updates.name=name
      }
      const user = await Users.findByIdAndUpdate(
        id,
        updates,
        { new: true }
      );
      return user
    },
  },
};

module.exports = resolvers;
