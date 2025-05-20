export interface AppSettingsPlugin {

  sendEvent(options: { key: string }): Promise<{ value: any }>;
  get(options: { key: string }): Promise<{ value: any }>;
  set(options: { key: string, value: string }): Promise<void>;

}
