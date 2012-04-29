(function (dw, Backbone, $, _, dust) {

  dw.SearchView = Backbone.View.extend({

    initialize: function () {
      _.bindAll(this, 'render');
    },
    
    render: function () {
      var $main = $('#content'),
        data = {query: this.collection.query, products: this.collection.toJSON()};

      dust.render("search_index", data, function (err, output) {
        if (err) {
          throw err;
        }
        $main.html(output);
      });
    }

  });

}(window.app.dw, Backbone, jQuery, _, dust));
