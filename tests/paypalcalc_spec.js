describe('paypal calculator', function () {
    it('sends 100 USD from BR to US and sender pays taxes', function () {
        var result = calc(100.00, 'USD', 'BR', 'US', true);
        expect(result.received).toBe(100.00);
        expect(result.taxes).toBe(90.00);
        expect(result.sent).toBe(110.00);
    });
});
