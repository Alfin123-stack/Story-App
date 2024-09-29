import Utils from '../utils/utils';
import CheckUserAuth from '../pages/stories/auth/check-user-auth';
import Config from '../config/config';

import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import { html } from 'lit';
 
class NavbarApp extends LitWithoutShadowDom {
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
    <nav class="py-3 px-5 navbar navbar-expand-lg bg-dark navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#staticBackdrop" class="btn btn-primary" type="button" data-bs-toggle="offcanvas" aria-controls="staticBackdrop">StoryApp</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
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
                <a class="nav-link" id="userLogOut" href="" @click=${this._userLogOut}>
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        </div>
    </nav>
    `;
  }

  _userLogOut(event) {
    event.preventDefault();
    Utils.destroyUserToken(Config.USER_TOKEN_KEY);
    CheckUserAuth.checkLoginState();
  }
}
 
customElements.define('navbar-story', NavbarApp);