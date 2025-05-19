import { registerPlugin } from '@capacitor/core';

import type { AppSettingsPlugin } from './definitions';

const AppSettings = registerPlugin<AppSettingsPlugin>('AppSettings', {
  web: () => import('./web').then((m) => new m.AppSettingsWeb()),
});

export * from './definitions';
export { AppSettings };
