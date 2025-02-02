import { mount } from 'svelte'
import App from './App.svelte'
import './style.css';
import './i18n';

const app = mount(App, {
  target: document.getElementById('app')!,
});

export default app;
