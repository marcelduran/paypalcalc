'use strict';

define(

  function() {

    return withWho;

    function withWho() {

      this.calc = function(ev) {
        var data = {
          amount: parseFloat($(ev.target).val(), 10) || 0,
          to: this.attr.to
        };

        this.trigger('uiCalcRequested', data);
      };

      this.changeAmount = function(ev, data) {
        this.$node.val(data.amount);
      };

      this.after('initialize', function() {
        this.on(document, 'dataCalc' + this.attr.from, this.changeAmount);
        this.on('input', this.calc);
      });

    }
  }

);
