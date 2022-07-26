const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reactions');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: [
                true,
                'please enter a thought'
            ],
            minLength: 1,
            maxLength: [
                280,
                'Thought must be in between 1 and 280 characters'
            ]
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a'),
        },

        username: {
            type: String,
            required: [
                true,
                'There must be one user who created this thought'
            ]
        },

        reactions: [reactionSchema]
    }
)

const Thought = model('thought', thoughtSchema);
module.exports = Thought;