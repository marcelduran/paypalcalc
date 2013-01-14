'use strict';

define(

  [
    'components/flight/lib/component'
  ],

  function(defineComponent) {

    return defineComponent(fees);

    function fees() {

      this.defaultAttrs({
        percentage: 3.9,
        fixed: 0.3
      });

      this.calc = function(ev, data) {
        var amount,
            percentage = this.attr.percentage / 100 || 1,
            fixed = this.attr.fixed || 0,
            fee = data.amount * percentage + fixed;

        if (data.to === 'Receiver') {
          fee = fee * -1;
        }

        amount = (Math.round((data.amount + fee) * 100) / 100).toFixed(2);

        this.trigger('dataCalc' + data.to, {amount: amount});
      };

      this.after('initialize', function() {
        this.on(document, 'uiCalcRequested', this.calc);
      });
    }

  }
);
