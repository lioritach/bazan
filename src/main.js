import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { i18n } from '@/i18n/index'
// Import the FontAwesome library and icons
import { fas } from '@fortawesome/free-solid-svg-icons'; // Import all solid icons
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

// Add the icons to the library
library.add(fas);

const app = createApp(App).use(i18n).component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app')