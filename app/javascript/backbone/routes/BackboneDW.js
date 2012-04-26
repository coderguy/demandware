(function(dw, Backbone, $, _) {

  dw.router.BackboneDW = Backbone.Router.extend({
    routes: {
      '':     'home',
      'blank': 'blank',
      'products/:id': 'product',
      'category/:id': 'category'
    },

    home: function () {
      var self = this;
      this.categories = new dw.collections.Categories();
      this.categoriesView = new dw.views.CategoriesView({
        model: this.categories
      });

      this.categories.bind('all', function () {
        $('#container').empty();
        $("#container").append(self.categoriesView.render().el);
      });
      this.categories.fetch();
    },

    product: function(id) {
      var self = this;
      this.product = new dw.models.Product({id: id});
      this.productView = new dw.views.ProductView({
        model: this.product
      });

      this.product.bind('change', function () {
        $('#container').empty();
        $("#container").append(self.productView.render().el);
      });
      this.product.fetch();
    },

    category: function(id) {
      var self = this;
      this.category = new dw.models.Category({id: id});
      this.categoryView = new dw.views.CategoryView({
        model: this.category
      });

      this.category.bind('change', function () {
        $('#container').empty();
        $("#container").append(self.categoryView.render().el);
      });
      this.category.fetch();
    },

    blank: function () {
      $('#container').empty();
      $('#container').text('blank');
    }
  });

}(window.app.dw, Backbone, jQuery, _));
