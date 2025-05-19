export interface AppSettingsPlugin {

  get(options: { key: string }): Promise<{ value: any }>;
  set(options: { key: string, value: string }): Promise<void>;

}
