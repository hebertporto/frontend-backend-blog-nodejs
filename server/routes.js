var passport = require('passport');
require('./config/passport.js')(passport);

module.exports = app => {
    app.use('/users', require('./src/users'));
    app.use('/novels', passport.authenticate('jwt', { session: false }), require('./src/novels'));
    app.use('/chapters', passport.authenticate('jwt', { session: false }), require('./src/chapters'));
    app.use('/api', require('./src/api'));
}
