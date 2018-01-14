(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var USER_AGENT = global.navigator.userAgent;
  var VERSION_RE = /MicroMessenger\/([\d\.]+)/i;
  var MICROMESSENGER = 'MicroMessenger';
  var EMPTY_MATCH = [,0];

  var NxDetectWechat = nx.declare('nx.DetectWechat', {
    statics: {
      isWechat: function(){
        return USER_AGENT.indexOf(MICROMESSENGER) > -1;
      },
      version: function(){
        return ( USER_AGENT.match(VERSION_RE) || EMPTY_MATCH )[1];
      }
    }
  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxDetectWechat;
  }

}());
