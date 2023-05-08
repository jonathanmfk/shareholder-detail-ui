import { html, fixture, assert, expect, fixtureCleanup } from '@open-wc/testing';
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

    test('_fireEvent true', () => (el.isMember = true));
    test('_fireEvent false', () => (el.isMember = false));
    test('onClickButtonHelp', () => el.onClickButtonHelp());
    test('getInicialLetters', () => assert.equal(el.getInicialLetters('Luis Perez'), 'LP'));

    test('getInicialLetters', () => {
      el.setDataForm({
        isMember: true,
        selectDocumentType: 'CC',
        inputIdentificationNumber: 12345,
        name: 'Luis Perez',
        inputParticipationPercentage: '5%'
      });
      el.setDataForm({
        isMember: false,
        selectDocumentType: 'CC',
        inputIdentificationNumber: 12345,
        name: 'Luis Perez',
        inputParticipationPercentage: '5%'
      });
    });
    // Tests that setDataForm is called with valid data.
    test('test_set_data_form_with_valid_data', () => {
      const data = {
        isMember: true,
        name: 'John Doe',
        selectDocumentType: 'CC',
        inputIdentificationNumber: '123456789',
        inputParticipationPercentage: '50%'
      };
      // Act
      el.setDataForm(data);
      // Assert
      expect(el.isMember).toBe(true);
      expect(el.titleName).toBe('John Doe');
      expect(el.shadowRoot.querySelector('#selectDocumentType').value).toBe('CC');
      expect(el.shadowRoot.querySelector('#inputIdentificationNumber').value).toBe('123456789');
      expect(el.shadowRoot.querySelector('#inputParticipationPercentage').value).toBe('50%');
    });

  });
});
