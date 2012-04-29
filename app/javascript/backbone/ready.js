jQuery(document).ready(function () {
  window.app.dw.router = new window.app.dw.AppRouter();
  Backbone.history.start({pushState: true});

  window.document.addEventListener('click', function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement;
    if (target.nodeName.toLowerCase() === 'a') {
      e.preventDefault();
      var uri = target.getAttribute('href');
      window.app.dw.router.navigate(uri.substr(1), true);
    }
  });
  window.addEventListener('popstate', function (e) {
    window.app.dw.router.navigate(location.pathname.substr(1), true);
  });

});
