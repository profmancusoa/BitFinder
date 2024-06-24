import { writable } from 'svelte/store';

// share score between components
export const restart = writable(false);
export const score_mm = writable(0);
export const score_ss = writable(0);

