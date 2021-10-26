/* GET about us page */
const about = function(req, res){
res.render('aboutUs', { title: 'About' });
};


module.exports = {
  about
};
