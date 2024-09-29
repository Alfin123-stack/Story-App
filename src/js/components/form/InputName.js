import LitWithoutShadowDom from '../base/LitWithoutShadowDom';
import { html } from 'lit';
 
class InputName extends LitWithoutShadowDom {
  constructor() {
    super();
  }
 
  render() {
    return html`
    <div class="mb-3">
      <label for="name" class="form-label">Name</label>
      <input type="text" class="form-control" id="name" required>
      <div class="valid-feedback">Cocok!</div>
      <div class="invalid-feedback">Silakan isi nama Anda</div>
    </div>
    `;
  }
}
 
customElements.define('input-name', InputName);