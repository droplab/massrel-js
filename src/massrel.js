define('massrel', [
         'globals'
       , 'helpers'
       , 'stream'
       , 'account'
       , 'poller'
       , 'meta_poller'
       , 'poller_queue'
       , 'context'
       , 'compare'
       , 'compare_poller'
       , 'intents'
       ], function(
         globals
       , helpers
       , Stream
       , Account
       , Poller
       , MetaPoller
       , PollerQueue
       , Context
       , Compare
       , ComparePoller
       , intents
       ) {

  var massrel = window.massrel;
  if(typeof(massrel) === 'undefined') {
    massrel = window.massrel = globals;
  } else {
    helpers.extend(massrel, globals);
  }

  // public API
  massrel.Stream = Stream;
  massrel.Account = Account;
  massrel.Poller = Poller;
  massrel.MetaPoller = MetaPoller;
  massrel.PollerQueue = PollerQueue;
  massrel.Context = Context;
  massrel.Compare = Compare;
  massrel.ComparePoller = ComparePoller;
  massrel.helpers = helpers;
  massrel.intents = intents;

  // require/AMD methods
  massrel.define = define;
  massrel.require = require;
  massrel.requirejs = requirejs;

  return massrel;
});

// Go ahead and export the 'massrel' module to 'vendor/massrel', as well, since 
// most places expect it to live there.
define('vendor/massrel', ['massrel'], function(massrel) {
  return massrel;
});
