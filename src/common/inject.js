import ddpInject from '../plugins/ddp/inject';
import blazeInject from '../plugins/blaze/inject';

(() => {
  const talkToExtension = (eventType, data) => {
    window.postMessage({
      eventType : eventType, 
      data: data,
      source: 'ddp-monitor-extension'
    }, '*'); 
  };

  const readyStateCheckInterval = setInterval(function() {
    const isMeteorDefined = typeof Meteor !== 'undefined';
    if (document.readyState === 'complete' || isMeteorDefined) {
      clearInterval(readyStateCheckInterval);
      if(isMeteorDefined){
        const plugins = [ddpInject, blazeInject];
        for(var i=0; i<plugins.length; i++){
          plugins[i].setup.call(this, talkToExtension);
        }

        window.__meteor_devtools_receiveMessage = function(message){
          for(var i=0; i<plugins.length; i++){
            plugins[i].onMessage && plugins[i].onMessage.call(this, message);
          }
        };
      }
    }
  }, 10);
})();