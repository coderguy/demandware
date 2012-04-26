(function(dw, Backbone, $, _) {

  dw.views.ProductView = Backbone.View.extend({
    template: "#product-template",
    tag: 'div',
    className: 'product',

    initialize: function () {
      _.bindAll(this, 'render');
      this.initializeTemplate();
    },
    
    initializeTemplate: function () {
      this.template = _.template($(this.template).html());
    },

    render: function () {
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    }
  });

}(window.app.dw, Backbone, jQuery, _));
