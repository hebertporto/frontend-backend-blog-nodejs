
module.exports = app => {
    app.use('/users', require('./src/users'));
}
