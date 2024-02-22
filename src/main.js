import { createApp } from "vue";

import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue';
import ReposCard from './components/UI/ReposCard.vue';

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('repos-card', ReposCard);

app.mount('#app');
