'use strict';

define(

  [
    'app/component_data/fees',
    'app/component_ui/sender',
    'app/component_ui/receiver',
  ],

  function(
    FeesData,
    SenderUI,
    ReceiverUI) {

    function initialize() {
      FeesData.attachTo(document);
      SenderUI.attachTo('#sender .amount', {from: 'Sender', to: 'Receiver'});
      ReceiverUI.attachTo('#receiver .amount', {from: 'Receiver', to: 'Sender'});
    }

    return initialize;
  }
);
