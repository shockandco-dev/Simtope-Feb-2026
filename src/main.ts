
import { createMemoryHistory, createRouter, createWebHistory } from 'react-router';
import { ViteSSG } from 'vite-ssg';
import App from './App';
import { routes } from './routes';

export const createApp = ViteSSG(App, { routes, base: import.meta.env.BASE_URL }, ({ app, router, routes, isClient, initialState }) => {
    // Additional setup logic if needed
});
