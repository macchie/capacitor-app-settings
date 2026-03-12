import { WebPlugin } from '@capacitor/core';

import type { AppSettingsPlugin, SettingValue } from './definitions';

export class AppSettingsWeb extends WebPlugin implements AppSettingsPlugin {
  async sendEvent(options: { key: string }): Promise<{ status: string }> {
    window.dispatchEvent(new CustomEvent(options.key));
    return { status: 'Event dispatched' };
  }

  async get(options: { key: string }): Promise<{ value: SettingValue | null }> {
    const raw = localStorage.getItem(options.key);
    if (raw === null) {
      return { value: null };
    }
    try {
      return { value: JSON.parse(raw) as SettingValue };
    } catch {
      return { value: raw };
    }
  }

  async set(options: { key: string; value: SettingValue }): Promise<void> {
    localStorage.setItem(options.key, JSON.stringify(options.value));
  }
}
