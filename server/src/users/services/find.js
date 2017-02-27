const Service = (req, res, next) => {
   return res.status(200).json({res: 'retornou'});
};

module.exports = Service;