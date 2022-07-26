const { Schema, model, Types } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: [
                true,
                'please enter a username'
            ],
            trim: true,
        },

        email: {
            type: String,
            unique: true, required: [
                true,
                'please enter a username'
            ],
            match: [/.+\@.+\..+/, 'Invalid email format']
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought'
            }
        ],

        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'user'
            }
        ]
    }
)


const User = model("user", userSchema);
module.exports = User;