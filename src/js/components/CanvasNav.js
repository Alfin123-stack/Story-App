import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import { html } from 'lit';
 
class CanvasNav extends LitWithoutShadowDom {
    static properties = {
        home: { type: String, reflect: true },
        add: { type: String, reflect: true },
        profile: { type: String, reflect: true },
    };

  constructor() {
    super();
  }
 
  render() {
    return html`
    <div class="offcanvas offcanvas-end bg-canvas" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title text-primary-white" id="staticBackdropLabel">Menu</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link text-primary-white" href="${this.home}">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-primary-white" href="${this.add}">Add Story</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-primary-white" href="${this.profile}">Profile</a>
            </li>
            <li class="nav-item" class="d-none" id="userLoggedMenu">
            <a class="nav-link text-primary-white" id="userLogOut" href="" @click=${this._userLogOut}>
              Log Out
            </a>
          </li>
          </ul>
        </div>
      </div>
    `;
  }
  _userLogOut(event) {
    event.preventDefault();
    Utils.destroyUserToken(Config.USER_TOKEN_KEY);
    CheckUserAuth.checkLoginState();
  }
}
 
customElements.define('canvas-nav', CanvasNav);