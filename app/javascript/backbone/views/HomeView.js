(function (dw, Backbone, $, _, dust) {

  dw.HomeView = Backbone.View.extend({

    initialize: function () {
      _.bindAll(this, 'render');
    },
    
    render: function () {
      var $main = $('#content'),
        data = {categories: this.collection.toJSON()};

      dust.render("home_index", data, function (err, output) {
        if (err) {
          throw err;
        }
        $main.html(output);
      });
    }

  });

}(window.app.dw, Backbone, jQuery, _, dust));
