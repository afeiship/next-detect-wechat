(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var USER_AGENT = global.navigator.userAgent;
  var WECHAT_RE = /MicroMessenger/i;
  var MICROMESSENGER = 'micromessenger';

  var NxDetectWechat = nx.declare('nx.DetectWechat', {
    statics: {
      isWechat: function(){
        return USER_AGENT.indexOf('MicroMessenger') > -1;
      }
    }
  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxDetectWechat;
  }

}());
