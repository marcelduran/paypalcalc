'use strict';

define(

  [
    'components/flight/lib/component',
    'app/component_ui/with_who'
  ],

  function(defineComponent, withWho) {

    return defineComponent(receiver, withWho);

    function receiver() {
    }

  }
);
