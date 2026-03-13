import { WebPlugin } from '@capacitor/core';

import type { AppSettingsPlugin, GetOptions, SetOptions, GetResult, SendEventResult } from './definitions';

export class AppSettingsWeb extends WebPlugin implements AppSettingsPlugin {
  async sendEvent(options: GetOptions): Promise<SendEventResult> {
    window.dispatchEvent(new CustomEvent(options.key));
    return { status: 'Event dispatched' };
  }

  async get(options: GetOptions): Promise<GetResult> {
    const raw = localStorage.getItem(options.key);
    if (raw === null) {
      return { value: null };
    }
    try {
      return { value: JSON.parse(raw) };
    } catch {
      return { value: raw };
    }
  }

  async set(options: SetOptions): Promise<void> {
    localStorage.setItem(options.key, JSON.stringify(options.value));
  }
}
