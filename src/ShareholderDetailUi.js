import { LitElement, html } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './shareholder-detail-ui.css.js';

import '@bbva-web-components/bbva-web-form-select/bbva-web-form-select.js';
import '@bbva-web-components/bbva-web-form-number/bbva-web-form-number.js';
import '@bbva-web-components/bbva-web-form-text/bbva-web-form-text.js';

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
      /**
       * Description for property
       */
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

  render() {
    return html`
      ${this.isMember ? this._memberFormRender : this._shareholderFormRender}
    `;
  }

  get _memberFormRender() {
    return html`
    ${this._selectDocumentType}
    ${this._inputIdentificationNumber}
    ${this._inputBusinessName}
    ${this._inputParticipationPercentage}
    `;
  }

  get _shareholderFormRender() {
    return html`
    ${this._selectDocumentType}
    ${this._inputIdentificationNumber}
    ${this._inputName}
    ${this._inputLastName}
    ${this._inputParticipationPercentage}
    `;
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
    label="Número de identificación"
    placeholder="Número de identificación"
    ></bbva-web-form-number>
    `;
  }

  get _inputName() {
    return html`
    <bbva-web-form-text id="inputName"
    label="Nombre"
    placeholder="Nombre"
    >
    </bbva-web-form-text>
    `;
  }

  get _inputLastName() {
    return html`
    <bbva-web-form-text id="inputLastName"
    label="Apellido"
    placeholder="Apellido"
    >
    </bbva-web-form-text>
    `;
  }

  get _inputBusinessName() {
    return html`
    <bbva-web-form-text id="inputBusinessName"
    label="Razón social"
    placeholder="Razón social"
    >
    </bbva-web-form-text>
    `;
  }

  get _inputParticipationPercentage() {
    return html`
    <bbva-web-form-text id="inputParticipationPercentage"
    label="Porcentaje de participación"
    placeholder="Porcentaje de participación"
    >
    </bbva-web-form-text>
    `;
  }
}
