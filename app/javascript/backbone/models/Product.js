(function (dw, Backbone, $, _, dust) {

  dw.Product = Backbone.Model.extend({
    sync: dw.config.sync,

    parse: function (response) {
      console.log(response);
      if (response.image_groups.length > 0) {
        response.image = response.image_groups[0].images[0];
      }
      return response;
    },

    url: function () {
      var url = dw.config.base_url + '/products/' + this.get('id') + "?client_id=" + dw.config.client_id;
      console.log(url);
      return url;
    }
  });

}(window.app.dw, Backbone, jQuery, _, dust));
