import passport from 'passport';
import LocalStrategy from 'passport-local';
import mongoose from 'mongoose';

var User = mongoose.model('User');

passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
}, function (username, password, done) {
    User.findOne({ username: username }).then(function (user) {
        if (!user || !user.validPassword(password)) {
            return done(null, false, {
                errors: 'Username or password is invalid!'
            });
        }

        return done(null, user);
    }).catch(done);
}));