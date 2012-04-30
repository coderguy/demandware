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

    initialize: function () {
      this.on('all', this.routeEvents);
    },

    routeEvents: function (event) {
      console.log(event);
      if (event.match('route')) {
        this.loadNavigation();
      }
    },

    loadNavigation: function () {
      if (!dw.collections.nav) {
        // using "global" because these are global elements
        dw.collections.nav = new dw.Categories();
        dw.views.nav = new dw.NavMenuView({
          model: dw.collections.nav
        });

        dw.collections.nav.on('reset', dw.views.nav.render);
        dw.collections.nav.fetch();
      }
    },

    home: function () {
      var categories = new dw.Categories(),
        homeView = new dw.HomeView({collection: categories});

      categories.on('reset', homeView.render);
      categories.fetch();
    },

    product: function (id) {
      var product = new dw.Product({id: id}),
        productView = new dw.ProductView({model: product});

      product.on('change', productView.render);
      product.fetch();
    },

    category: function (id) {
      var category = new dw.Category({id: id, load_products: true}),
        categoryView = new dw.CategoryView({model: category});

      category.on('change', categoryView.render);
      category.fetch();
    },

    search: function (q) {
      var search = new dw.ProductSearchCollection(),
        searchView = new dw.SearchView({collection: search});

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
