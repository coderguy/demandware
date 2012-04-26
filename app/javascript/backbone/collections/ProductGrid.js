(function(dw, Backbone, $, _) {

  dw.collections.ProductGrid = Backbone.Collection.extend({
    model: dw.models.ProductPreview,
    sync: dw.config.sync,
    url: function () {
      var url = dw.config.base_url + '/product_search/' + this.get('id') + "?client_id=" + dw.config.client_id;
      if(this.get('q') !== '') {
        url += "&q=" + this.get('q');
      }
      return url;
    },
    parse: function(data) {
      return data.hits;
    }
  });

}(window.app.dw, Backbone, jQuery, _));
