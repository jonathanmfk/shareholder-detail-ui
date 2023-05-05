import { html, fixture, assert, fixtureCleanup } from '@open-wc/testing';
import '../shareholder-detail-ui.js';

suite('ShareholderDetailUi', () => {
  let el;

  teardown(() => fixtureCleanup());

  suite('default', () => {
    setup(async () => {
      el = await fixture(html`
        <shareholder-detail-ui></shareholder-detail-ui>
      `);
      await el.updateComplete;
    });

    test('_fireEvent', () => (el.isMember = true));
    test('_fireEvent', () => (el.isMember = false));
  });
});
