import { WebPlugin } from '@capacitor/core';

import type { AppSettingsPlugin } from './definitions';

export class AppSettingsWeb extends WebPlugin implements AppSettingsPlugin {
  async get(options: { key: string }): Promise<{ value: string }> {
    console.log('get', options.key);
    return { value: options.key };
  }

  async set(options: { key: string, value: string }): Promise<void> {
    console.log('set', options.key, options.value);
  }
}
