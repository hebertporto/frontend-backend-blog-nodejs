var Users   = require('./../entity/user');

var Service = function(req, res, next) {
    var findById = Users.findById(req.body._id).exec();
    var update = Users.update(
        { _id: req.body._id},
        { $set: req.body},
        { multi: false, runValidators : true}).exec();
    findById
        .then(function (user) {
            update
                .then(function (result) {
                    if (!result) {
                        return res.status(400)
                                  .json({
                                      status: false,
                                      data: {}
                                  });
                    }
                    return res.status(200)
                              .json({
                                  status: true,
                                  data: result
                              });
                })
                .catch(function (err) {
                    return res.status(500)
                              .json({
                                  status: false,
                                  date: {}
                              });
                });
        })
        .catch(function (err) {
          console.log('update error', err);
            return res.status(500)
                      .json({
                          status: false,
                          date: {}
                      });
        });
};
module.exports = Service;
