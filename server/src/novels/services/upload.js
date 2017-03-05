
var Service = function(req, res, next) {
  console.log('req update', req.file);
  if (req.file.filename)
	   return res.status(200).json({img_url: req.file.filename});
   else
     return res.status(500).json({msg: "Error ao Fazer Upload da Imagem."});
}

module.exports = Service;