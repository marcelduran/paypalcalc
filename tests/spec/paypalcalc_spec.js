describe('Paypal Calculator', function () {
  var started;

  beforeEach(function() {
    $('body').append(
      '<div id="sender"><input class="amount"></div>' +
      '<div id="receiver"><input class="amount"></div>'
    );

    require(
      [
        'app/boot/page',
        'tests/spec/teardownHelper'
      ], function(initialize, TeardownHelper) {
      TeardownHelper.attachTo(document);
      initialize();
      started = true;
    });
  });

  afterEach(function() {
    $(document).trigger('teardown');
    $('body #sender').remove();
    $('body #receiver').remove();
    started = false;
  });

  it('sends 100 USD from BR to US and receiver pays fees', function () {

    waitsFor(function() {
      return started;
    }, 'app has not started', 1000);

    runs(function() {
      $('#sender .amount').val('100').trigger('input');
      expect($('#receiver .amount').val()).toBe('95.80');
    });

  });

  it('sends 100 USD from BR to US and sender pays fees', function () {

    waitsFor(function() {
      return started;
    }, 'app has not started', 1000);

    runs(function() {
      $('#receiver .amount').val('100').trigger('input');
      expect($('#sender .amount').val()).toBe('104.20');
    });

  });

});
