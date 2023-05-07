import { LitElement, html } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './shareholder-detail-ui.css.js';

import '@bbva-web-components/bbva-web-form-select/bbva-web-form-select.js';
import '@bbva-web-components/bbva-web-form-number/bbva-web-form-number.js';
import '@bbva-web-components/bbva-web-form-text/bbva-web-form-text.js';
import '@bbva-web-components/bbva-web-form-radio-button/bbva-web-form-radio-button.js';
import '@bbva-web-components/bbva-web-button-default/bbva-web-button-default.js';
import '@bbva-web-components/bbva-web-clip-box/bbva-web-clip-box.js';
import { bbvaBuilding, bbvaHelp } from '@bbva-web-components/bbva-foundations-icons/bbva-foundations-icons.js';
import '@bbva-web-components/bbva-web-button-row/bbva-web-button-row-item.js'

/**
 * ![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)
 *
 * This component ...
 *
 * Example:
 *
 * ```html
 *   <shareholder-detail-ui></shareholder-detail-ui>
 * ```
 */
export class ShareholderDetailUi extends LitElement {
  static get properties() {
    return {
      isMember: {
        type: Boolean
      }
    };
  }

  constructor() {
    super();
    this.isMember = false;
  }

  static get styles() {
    return [ styles, getComponentSharedStyles('shareholder-detail-ui-shared-styles') ];
  }

  onClickButtonHelp(e) {
    this._fireEvent('on-click-button-help')
  }

  /**
   * Fires event
   * @param {String} nameEvent
   * @param {Object} detail
   */
  _fireEvent(nameEvent, detail = {}) {
    this.dispatchEvent(new CustomEvent(nameEvent, { bubbles: true, composed: true, detail: detail }));
  }

  render() {
    return html`
      ${this.isMember ? this._memberFormRender : this._shareholderFormRender}
    `;
  }

  get _memberFormRender() {
    return html`
    ${this._profileMember}
    ${this._infoText}
    ${this._selectDocumentType}
    ${this._inputIdentificationNumber}
    ${this._inputBusinessName}
    ${this._inputParticipationPercentage}
    ${this._subTitleMemberList}
    ${this._exitButton}
    `;
  }

  get _shareholderFormRender() {
    return html`
    ${this._profileShareholder}
    ${this._infoText}
    ${this._selectDocumentType}
    ${this._inputIdentificationNumber}
    ${this._inputName}
    ${this._inputLastName}
    ${this._inputParticipationPercentage}
    ${this._pep}
    ${this._exitButton}
    `;
  }

  getInicialLetters(name) {
    const split = name.split(' ');
    let inicials = '';
    split.forEach((s) => (inicials += s.charAt(0).toUpperCase()));
    return inicials;
  }

  get _profileMember() {
    return html`
    <div class="container">
      <bbva-web-clip-box id="clip-box" size="m" icon="${bbvaBuilding()}" label="building" variant="aqua"></bbva-web-clip-box>
      <p>Javier Sánchez</p>
    </div>
    `;
  }

  get _profileShareholder() {
    return html`
    <div class="container">
      <bbva-web-clip-box id="clip-box" size="m" initials="" label="Javier Sánchez" variant="aqua"></bbva-web-clip-box>
      <p>Javier Sánchez</p>
    </div>
    `;
  }

  get _infoText() {
    return html`${this.isMember
      ? html`<h5>INFORMACIÓN SOBRE EL MIEMBRO</h5>`
      : html`<h5>INFORMACIÓN SOBRE EL ACCIONISTA</h5>`}`;
  }

  get _selectDocumentType() {
    return html`
    <bbva-web-form-select id="selectDocumentType" label="Tipo de Documento">
      <bbva-web-form-option value"CC">Cédula de ciudadanía</bbva-web-form-option>
      <bbva-web-form-option value"NIT">NIT</bbva-web-form-option>
    </bbva-web-form-select>
    `;
  }

  get _inputIdentificationNumber() {
    return html`
    <bbva-web-form-number id="inputIdentificationNumber"
      label="Número de identificación">
    </bbva-web-form-number>
    `;
  }

  get _inputName() {
    return html`
    <bbva-web-form-text id="inputName"
      label="Nombre">
    </bbva-web-form-text>
    `;
  }

  get _inputLastName() {
    return html`
    <bbva-web-form-text id="inputLastName"
      label="Apellido">
    </bbva-web-form-text>
    `;
  }

  get _inputBusinessName() {
    return html`
    <bbva-web-form-text id="inputBusinessName"
      label="Razón social">
    </bbva-web-form-text>
    `;
  }

  get _inputParticipationPercentage() {
    return html`
    <bbva-web-form-text id="inputParticipationPercentage"
      label="Porcentaje de participación">
    </bbva-web-form-text>
    `;
  }

  get _pep() {
    return html`
      <h5 class="color-gray">PERSONAS EXPUESTAS POLÍTICAMENTE (PEP)</h5>
      <div class="d-flex">
        <p><b>¿Es una Persona Expuesta políticamente (PEP), está relacionada, asociada o es familiar de una?</b></p>
        <bbva-web-button-row-item icon="${bbvaHelp()}" @item-row-click="${this.onClickButtonHelp}"></bbva-web-button-row-item>
      </div>

      <div role="radiogroup" class="d-flex mb-2">
        <bbva-web-form-radio-button class="mr-2" name="options" value="1">Sí</bbva-web-form-radio-button>
        <bbva-web-form-radio-button name="options" value="2">No</bbva-web-form-radio-button>
      </div>
    `;
  }

  get _subTitleMemberList() {
    return html`<h5>COMPOSICIÓN DEL ACCIONISTA</h5>`;
  }

  get _exitButton() {
    return html`<div class="container"><bbva-web-button-default id="exit-button" size="l">Salir</bbva-web-button-default></div>
    `;
  }
}
