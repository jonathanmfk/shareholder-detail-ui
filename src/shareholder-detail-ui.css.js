import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`
:host {
  display: block;
  box-sizing: border-box;
}

:host([hidden]),
[hidden] {
  display: none !important;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

.container {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.d-flex {
  display: flex;
}

.mr-2 {
  margin-right: 2rem;
}

.mb-2 {
  margin-bottom: 2rem;
}

.color-gray {
  color: gray;
  margin-bottom: 0.5rem;
}
`;
