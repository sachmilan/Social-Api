const User = require('../models/Thought');

module.exports = {
    getthoughts(req, res) {
        thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v')
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    // create a new user
    createThought(req, res) {
        Thought.create(req.body)
            .then((dbThoughtData) => res.json(dbThoughtData))
            .catch((err) => res.status(500).json(err));
    },

    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
          .then((thought) =>
            !t
              ? res.status(404).json({ message: 'No user with that ID' })
              : Reaction.deleteMany({ _id: { $in: user.reactions } })
          )
          .then(() => res.json({ message: 'Thought and associated reactions deleted!' }))
          .catch((err) => res.status(500).json(err));    
},

    updatethought(req,res){
        Thought.findoneandUpdate({_id:req.params.id},
            {$set:req.body},
            {runValidators: true, new:true})
    }
};