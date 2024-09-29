import LitWithoutShadowDom from '../base/LitWithoutShadowDom';
import { html } from 'lit';
 
class InputDesc extends LitWithoutShadowDom {
  constructor() {
    super();
  }
 
  render() {
    return html`
    <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <textarea class="form-control" id="description" required></textarea>
        <div class="valid-feedback">Cocok!</div>
        <div class="invalid-feedback">Silakan isi deskripsi Anda</div>
    </div>
    `;
  }
}
 
customElements.define('input-desc', InputDesc);