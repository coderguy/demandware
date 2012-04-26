(function(dw, Backbone, $, _) {

  dw.collections.Categories = Backbone.Collection.extend({
    model: dw.models.Category,
    sync: dw.config.sync,
    url: function () {
      return dw.config.base_url + "/categories/root?levels=1&client_id=" + dw.config.client_id;
    },
    parse: function(data) {
      return data.categories;
    }
  });

}(window.app.dw, Backbone, jQuery, _));
