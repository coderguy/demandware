(function (dw, Backbone, $, _) {

  dw.views.CategoryView = Backbone.View.extend({
    template: "#category-template",
    tag: 'div',
    className: 'category',

    initialize: function () {
      _.bindAll(this, 'render');
      this.initializeTemplate();
    },
    
    initializeTemplate: function () {
      this.template = _.template($(this.template).html());
    },

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });

}(window.app.dw, Backbone, jQuery, _));
