import App from './App.svelte';
import './global.css';

const app = new App({
    target: document.body,
    props: {
        // You can pass props to App.svelte here if needed
    }
});

export default app;
