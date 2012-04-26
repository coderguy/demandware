(function(dw, Backbone, $, _) {

  dw.models.Category = Backbone.Model.extend({
    sync: dw.config.sync,
    url: function () {
      return dw.config.base_url + "/categories/" + this.get('id') + "?levels=0&client_id=" + dw.config.client_id;
    }
  });

}(window.app.dw, Backbone, jQuery, _));
