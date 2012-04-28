(function (dw, Backbone, $, _) {

  dw.views.CategoriesView = Backbone.View.extend({
    tagName: "div",
    className: "category-grid",

    initialize: function () {
      _.bindAll(this, 'render');
      this.template = _.template($('#category-grid').html());
    },

    render: function () {
      var $categories;

      this.$el.html(this.template({}));
      $categories = this.$(".categories");
      this.model.each(function (category) {
        var view = new dw.views.CategoryView({
          model: category
        });
        $categories.append(view.render().el);
      });

      return this;
    }

  });

}(window.app.dw, Backbone, jQuery, _));
