// Import our custom CSS
import '../sass/main.scss';
import main from './pages/main.js';
import Add from "./pages/stories/add.js";
import login from './pages/stories/auth/login';
import register from './pages/stories/auth/register';
import Profile from './pages/stories/profile';
// Import javascript file as needed
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// Import in your JavaScript file
import 'bootstrap';


import './components/index.js'

const routes = {
    '/': main,
    '/stories/add.html': Add,
    '/profile/profile.html': Profile,
  
    '/auth/login.html': login,
    '/auth/register.html': register,
  };

const detectRoute = () => routes[window.location.pathname];

window.addEventListener('DOMContentLoaded', async () => {
    const route = detectRoute();
    route.init();
});
