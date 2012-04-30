(function (dw, Backbone, $, _, dust) {

  dw.Category = Backbone.Model.extend({
    sync: dw.config.sync,
    categories: false,
    defaults: {
      depth: 0
    },

    initialize: function (attributes) {
      var self = this;

      if (attributes.load_products) {
        self.products = new dw.ProductSearchCollection();
        self.productGridView = new dw.ProductGridView({collection: self.products});
        self.on('change', function () {
          self.products.addRefinement('cgid', self.get('id'));
          self.products.on('reset', self.productGridView.render);
          self.products.fetch();
        });
      }

      if (attributes.categories) {
        this.categories = new dw.Categories(attributes.categories);
      }

    },

    url: function () {
      return dw.config.base_url + "/categories/" + this.get('id') + "?levels=" + this.get('depth') + "&client_id=" + dw.config.client_id;
    }
  });

}(window.app.dw, Backbone, jQuery, _, dust));
