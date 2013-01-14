define(
  [
    'components/flight/lib/component'
  ],

  function(defineComponent) {

    return defineComponent(teardownHelper);

    function teardownHelper() {

      this.resetEverything = function() {
        //remove every component instance and all event listeners
        defineComponent.teardownAll();
      };

      this.after('initialize', function() {
        this.on(document, 'teardown', this.resetEverything);
      });
    }
  }
);
