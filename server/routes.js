
module.exports = app => {
    app.use('/users', require('./src/users'));
    app.use('/novels', require('./src/novels'));
    app.use('/chapters', require('./src/chapters'));
    app.use('/teste', require('./src/teste'));
}
