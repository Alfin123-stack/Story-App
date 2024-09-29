import LitWithoutShadowDom from '../base/LitWithoutShadowDom';
import { html } from 'lit';
 
class FormStory extends LitWithoutShadowDom {
  constructor() {
    super();
  }
 
  render() {
    return html`
    <form class="mt-5 needs-validation" novalidate id="addStoryForm">
        <h1 class="text-center">Add New Story</h1>
        <input-name></input-name>
        <input-desc></input-desc>
        <input-image></input-image>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    `;
  }
}
 
customElements.define('form-story', FormStory);