(function (dw, Backbone, $, _, dust) {

  dw.ProductSearchCollection = Backbone.Collection.extend({
    model: dw.ProductPreview,
    sync: dw.config.sync,

    refinements: {},
    query: false,
    pagination: {start: 0, count: 0, total: 0},

    addRefinement: function (key, value) {
      this.refinements[key] = value;
    },

    setQuery: function (query) {
      this.query = query;
    },

    url: function () {
      var url = dw.config.base_url + '/product_search?client_id=' + dw.config.client_id + '&',
        refinement_count = 1;

      if (this.query) {
        url += 'q=' + this.query + '&';
      }

      _.each(this.refinements, function (value, key) {
        //this string should have 2 =, ex refine_1=cgid=mens
        url += 'refine_' + refinement_count + '=' + encodeURI(key + '=' + value) + '&';
      });

      return url;
    },

    parse: function (response) {
      this.pagination.start = response.start;
      this.pagination.count = response.count;
      this.pagination.total = response.total;

      return response.hits;
    }

  });

}(window.app.dw, Backbone, jQuery, _, dust));
