const ALIAS = 'callback';

function createCallback(opts = {}) {
  const alias = opts.alias || ALIAS;
  function onEffect(effect, { put }, model, actionType) {
    const { namespace } = model;
    return function* (...args) {
      yield effect(...args);
      var cb = args[0][alias]
      if (cb && typeof cb === "function") {
        cb()
      }
    };
  }
  return {
    onEffect,
  };
}

export default createCallback;
