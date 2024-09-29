import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import { html } from 'lit';
 
class FooterApp extends LitWithoutShadowDom {
  constructor() {
    super();
  }
 
  render() {
    return html`
    <footer class="footer">
        <p>
        CopyRigth 2024 - Muhammad Alfin Alfarizi
        </p>
    </footer>
    `;
  }
}
 
customElements.define('footer-story', FooterApp);