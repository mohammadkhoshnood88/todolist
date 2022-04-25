require('./bootstrap');
import { createApp } from 'vue/dist/vue.esm-bundler';

import App from './vue/app'

const app = {
    el: "#app",
    components: { App }
};

const ap = createApp(app)
ap.mount('#app')