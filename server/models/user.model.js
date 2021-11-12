const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const uniqueValidator = require("mongoose-unique-validator");

const UserSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: [true, "username is required"],
            minlength: [3, "username must be at least 3 characters!"],
            unique: true
        },
        firstName: {
            type: String,
            required: [true, "first name is required"],
            minlength: [3, "first name must be at least 3 characters"]
        },
        email: {
            type: String,
            required: [true, "email is required"],
            minlength: [5, "email must be at least 6 characters"],
            unique: true
        },
        password: {
            type: String,
            required: [true, "password is required"],
            minlength: [8, "password must be 8 characters or longer"]
        }
    },
        { timestamps: true },
);

UserSchema.plugin(uniqueValidator, { message: `{VALUE} is already taken`});


UserSchema.virtual("confirmPassword")
    .get(() => this._confirmPassword)
    .set((value) => (this._confirmPassword = value));

UserSchema.pre("validate", function (next) {
    if (this.password !== this.confirmPassword) {
    this.invalidate("confirmPassword", "Password must match confirm password");
    }
    next();
});

UserSchema.pre("save", function (next) {
    bcrypt.hash(this.password, 10).then((hash) => {
    this.password = hash;
    next();
    });
});

UserSchema.path('email').validate(function (email) {
    var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailRegex.test(email); // Assuming email has a text attribute
}, 'Invalid Email');


const User = mongoose.model("User", UserSchema);

module.exports = User;