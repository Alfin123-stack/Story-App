import LitWithoutShadowDom from '../base/LitWithoutShadowDom';
import { html } from 'lit';
 
class InputImage extends LitWithoutShadowDom {
  constructor() {
    super();
  }
 
  render() {
    return html`
    <div class="mb-3">
        <label for="formFile" class="form-label">Image</label>
        <input class="form-control" type="file" id="formFile" required>
        <div class="valid-feedback">Cocok!</div>
        <div class="invalid-feedback">Silakan unggah gambar Anda</div>
    </div>
    `;
  }
}
 
customElements.define('input-image', InputImage);