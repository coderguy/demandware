// Application init

function emptyFunction() { }
if (window.console === undefined) {
  window.console = {
    log: emptyFunction,
    error: emptyFunction,
    info: emptyFunction,
    trace: emptyFunction
  };
}

window.app = {};
window.app.dw = {
  collections: {},
  models: {},
  views: {},
  router: {},
  events: {}
};

