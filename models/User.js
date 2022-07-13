const { Schema, model } = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new Schema(
    {
        username:{
            type:String,
            unique:true,
            required:[
                true,
                'please enter a username'
            ],
            trim:true,
        },

        email:{
            type:string,
            unique:true,
            required:[
                true,
                'please enter a valid email'
            ],
            validate:[
                isEmail,
                'please enter a valid email'
            ]
        },
        thoughts:[
            {type: Schema.type.ObjectId,
            ref:'thought'}
        ],

        friends:[
            {
                type:Schema.type.ObjectId,
                ref:'user'
            }
        ]
    }
)


const User= model('user',userSchema);
model.export=User;