const { Thought } = require('../models');
const User = require('../models/User');

module.exports = {
    getUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    // create a new user
    createUser(req, res) {
        User.create(req.body)
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => res.status(500).json(err));
    },

    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
          .then((user) =>
            !user
              ? res.status(404).json({ message: 'No user with that ID' })
              : Thought.deleteMany({ _id: { $in: user.thoughts } })
          )
          .then(() => res.json({ message: 'User and associated thoughts deleted!' }))
          .catch((err) => res.status(500).json(err));    
    },

    updateUser(req,res){
        User.findOneAndUpdate({_id:req.params.id},
            {$set:req.body},
            {runValidators: true, new:true})
    },

    addFriend(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId }, { $addToSet: { friends: req.params.friendId } }, { new: true })
          .then((User) => {
            if (!User) {
              return res.status(404).json({ message: 'User with this ID does not exist.' });
            }
            res.json(User);
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
      },
      // Remove a friend
      removeFriend(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId }, { $pull: { friends: req.params.friendId } }, { new: true })
          .then((User) => {
            if (!User) {
              return res.status(404).json({ message: 'User with this ID does not exist.' });
            }
            res.json(User);
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
      },
};