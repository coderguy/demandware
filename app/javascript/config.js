// Application configuration
(function (app) {
  app.dw.config = {
    client_id: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    base_url: "http://demo.ocapi.demandware.net/s/SiteGenesis/dw/shop/v12_2",
    sync: function (method, model, options) {  
      options.timeout = 10000;  
      options.dataType = "jsonp";  
      options.cache = true;
      return Backbone.sync(method, model, options);  
    }
  };
}(window.app));