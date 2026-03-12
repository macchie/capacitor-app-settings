export type SettingValue = string | number | boolean;

export interface AppSettingsPlugin {
  sendEvent(options: { key: string }): Promise<{ status: string }>;
  get(options: { key: string }): Promise<{ value: SettingValue | null }>;
  set(options: { key: string; value: SettingValue }): Promise<void>;
}
