(function (dw, Backbone, $, _) {

  dw.views.GridView = Backbone.View.extend({
    tagName: "div",
    className: "product-grid",

    initialize: function () {
      _.bindAll(this, 'render');
      this.template = _.template($('#product-grid').html());
      this.collection.bind('reset', this.render);
    },

    render: function () {
      var $products,
        collection = this.collection;

      this.$el.html(this.template({}));
      $products = this.$(".products");
      this.collection.each(function (album) {
        var view = new dw.views.ProductGridView({
          model: album
        });
        $products.append(view.render().el);
      });

      return this;
    }
  });

}(window.app.dw, Backbone, jQuery, _));
