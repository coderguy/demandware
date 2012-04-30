jQuery(document).ready(function () {
  window.app.dw.router = new window.app.dw.AppRouter();
  Backbone.history.start({pushState: true});

  window.document.addEventListener('click', function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement;
    if (target.nodeName.toLowerCase() === 'img' && target.parentNode.nodeName.toLowerCase() === 'a') {
      target = target.parentNode;
    }
    if (target.nodeName.toLowerCase() === 'a') {
      e.preventDefault();
      var uri = target.getAttribute('href');
      window.app.dw.router.navigate(uri.substr(1), true);
    }
  });
  window.addEventListener('popstate', function (e) {
    window.app.dw.router.navigate(location.pathname.substr(1), true);
  });

  jQuery('form.search').submit(function (e) {
    e.preventDefault();
    var $q = jQuery(this).find('input[name=q]');
    if ($q.val() !== '') {
      window.app.dw.router.navigate('/search/' + encodeURI($q.val()), true);
      $q.val('');
    }
  });

});
