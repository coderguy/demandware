var fetch_debug = {
  success: function (err, data) {
    console.log('success', err, data);
  },
  error: function (err, data) {
    console.log('error', err, data);
  }
};

(function (dw, Backbone, $, _, dust) {

  dw.AppRouter = Backbone.Router.extend({
    routes: {
      '': 'home',
      'products/:id': 'product',
      'category/:id': 'category',
      'search/:q': 'search'
    },

    loadNavigation: function () {
      if (!dw.models.nav) {
        // using "global" because these are global elements
        dw.models.nav = new dw.Categories();
        dw.views.nav = new dw.NavMenuView({
          model: dw.models.nav
        });

        dw.models.nav.on('reset', dw.views.nav.render);
        dw.models.nav.fetch();
      }
    },

    home: function () {
      this.loadNavigation();
    },

    product: function (id) {
      var product = new dw.Product({id: id}),
        productView = new dw.ProductView({model: product});

      this.loadNavigation();

      product.on('change', productView.render);
      product.fetch();
    },

    category: function (id) {
      var category = new dw.Category({id: id, load_products: true}),
        categoryView = new dw.CategoryView({model: category});

      this.loadNavigation();

      category.on('change', categoryView.render);
      category.fetch();
    },

    search: function (q) {
      var search = new dw.ProductSearchCollection(),
        searchView = new dw.SearchView({collection: search});

      this.loadNavigation();

      search.setQuery(q);

      search.on('reset', searchView.render);
      search.fetch();
    },

    blank: function () {
      $('#container').empty();
      $('#container').text('blank');
    }

  });

}(window.app.dw, Backbone, jQuery, _, dust));
