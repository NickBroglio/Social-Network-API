const { Schema, model } = require('mongoose');
// ref thought model
const thoughtSchema = require('./Thought')

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true, 
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            // email validate
            validate: [validateEmail, 'Please fill a valid email address'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [{ type: Schema.Types.ObjectId, ref: 'user'}],
    },
   {
       toJSON: {
           virtuals: true,
       }
   }
);

// creates a virtual that gets the amount of friends user has
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

// initializes the user model
const User = model('user', userSchema);

module.exports = User;