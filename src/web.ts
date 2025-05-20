import { WebPlugin } from '@capacitor/core';

import type { AppSettingsPlugin } from './definitions';

export class AppSettingsWeb extends WebPlugin implements AppSettingsPlugin {
  async sendEvent(_options: { key: string }): Promise<{ value: string }> {
    console.log('sendEvent', _options.key);
    return { value: _options.key };
  }

  async get(_options: { key: string }): Promise<{ value: string }> {
    console.log('get', _options.key);
    return { value: _options.key };
  }

  async set(_options: { key: string, value: string }): Promise<void> {
    console.log('set', _options.key, _options.value);
  }
}
