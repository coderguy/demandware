(function (dw, Backbone, $, _, dust) {

  dw.Categories = Backbone.Collection.extend({
    model: dw.Category,
    sync: dw.config.sync,
    id: 'root',
    depth: 2,

    url: function () {
      return dw.config.base_url + "/categories/" + this.id + "?levels=" + this.depth + "&client_id=" + dw.config.client_id;
    },

    parse: function (data) {
      return data.categories;
    }

  });

}(window.app.dw, Backbone, jQuery, _, dust));
