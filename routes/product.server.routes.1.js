module.exports = function(app){

 var product = require('./../controllers/articles.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');
app.route('/listView')
//.get(product.listView);
 //app.route('/api/product')

	.get(product.list)
	.post(users.requiresLogin, product.create);

  app.route('/api/product/:articleId')
	.get(product.read)
  .delete(users.requiresLogin, product.delete);

	app.route('/api/product/edit/:productId')
	.get(product.read)
	.put(users.requiresLogin, product.update);


app.param('articleId', articles.articleByID);


}
