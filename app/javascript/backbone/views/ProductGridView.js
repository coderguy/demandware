(function(dw, Backbone, $, _) {

  dw.views.ProductGridView = Backbone.View.extend({
    tag: 'li',
    className: 'product',

    initialize: function () {
      _.bindAll(this, 'render');
      this.template = _.template($('#product-grid').html());
      this.collection.bind('reset', this.render);
    },

    render: function () {
      var $products;

      $(this.el).html(this.template({}));
      $products = this.$(".products");
      this.model.each(function(product) {
        var view = new dw.views.ProductPreviewView({
          model: product
        });
        $products.append(view.render().el);
      });

      return this;
    }
  });

}(window.app.dw, Backbone, jQuery, _));
