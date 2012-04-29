(function (dw, Backbone, $, _, dust) {

  dw.CategoryView = Backbone.View.extend({

    initialize: function () {
      _.bindAll(this, 'render');
    },
    
    render: function () {
      var $main = $('#content'),
        data = this.model.toJSON();

      dust.render("category_index", data, function (err, output) {
        if (err) {
          throw err;
        }
        $main.html(output);
      });
    }

  });

}(window.app.dw, Backbone, jQuery, _, dust));
