const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },

        reactionBody: {
            type: String,
            required: [
                true,
                'Please enter a reaction'
            ],
            macLength: [
                280,
                'The lenghth of the reaction must be in less than or equal to 280 characters'
            ]
        },

        username: {
            type: String,
            required: [
                true,
                'please enter a username linked to this reaction'
            ]
        },

        createdate: {
            type: Date,
            default: Date.now,
            get: (timestamp) => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a'),
        }
    },
)

module.exports = reactionSchema;