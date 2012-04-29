(function (dw, Backbone, $, _, dust) {

  dw.ProductView = Backbone.View.extend({

    initialize: function () {
      _.bindAll(this, 'render');
    },

    render: function () {
      var $content = $('#content'),
        data = this.model.toJSON();
      dust.render("product_detail", data, function (err, output) {
        if (err) {
          throw err;
        }
        $content.html(output);
      });
    }

  });

}(window.app.dw, Backbone, jQuery, _, dust));
