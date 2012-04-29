(function (dw, Backbone, $, _, dust) {

  dw.NavMenuView = Backbone.View.extend({

    initialize: function () {
      _.bindAll(this, 'render');
    },

    render: function () {
      var $nav = $('#nav'),
        data = { categories: this.model.toJSON() };
      dust.render("nav_categories", data, function (err, output) {
        if (err) {
          throw err;
        }
        $nav.append(output);
      });
    }

  });

}(window.app.dw, Backbone, jQuery, _, dust));
