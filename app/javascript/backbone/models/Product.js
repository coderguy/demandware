(function(dw, Backbone, $, _) {

  dw.models.Product = Backbone.Model.extend({
    sync: dw.config.sync,
    url: function () {
      return dw.config.base_url + '/products/' + this.get('id') + "?client_id=" + dw.config.client_id;
    }
  });

}(window.app.dw, Backbone, jQuery, _));
