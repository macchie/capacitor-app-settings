/**
 * Represents the types of values that can be stored in app settings.
 */
export type SettingValue = string | number | boolean;

/**
 * Options for retrieving or sending events by key.
 */
export interface GetOptions {
  /**
   * The key of the setting to retrieve.
   */
  key: string;
}

/**
 * Options for storing a setting value.
 */
export interface SetOptions {
  /**
   * The key under which the value will be stored.
   */
  key: string;

  /**
   * The value to store. Can be a string, number, or boolean.
   */
  value: SettingValue;
}

/**
 * Result returned when retrieving a setting value.
 */
export interface GetResult {
  /**
   * The value associated with the key, or `null` if the key does not exist.
   */
  value: SettingValue | null;
}

/**
 * Result returned after sending an event.
 */
export interface SendEventResult {
  /**
   * The status of the event dispatch (e.g. `"ok"`).
   */
  status: string;
}

export interface AppSettingsPlugin {
  /**
   * Send a broadcast event to the native platform.
   *
   * On **Android**, this sends a `BroadcastIntent` with the key as the action.
   * On **iOS**, this posts a notification to `NotificationCenter` with the key as the name.
   *
   * Useful for notifying other parts of the app (or other apps on Android) that something has changed.
   *
   * @since 1.0.0
   * @example
   * ```typescript
   * import { AppSettings } from 'capacitor-app-settings';
   *
   * await AppSettings.sendEvent({ key: 'settings_updated' });
   * ```
   */
  sendEvent(options: GetOptions): Promise<SendEventResult>;

  /**
   * Retrieve a value from the native device storage.
   *
   * On **Android**, values are read from `SharedPreferences`.
   * On **iOS**, values are read from `UserDefaults`.
   *
   * @since 1.0.0
   * @example
   * ```typescript
   * import { AppSettings } from 'capacitor-app-settings';
   *
   * const { value } = await AppSettings.get({ key: 'dark_mode' });
   * console.log('Dark mode:', value);
   * ```
   */
  get(options: GetOptions): Promise<GetResult>;

  /**
   * Store a value in the native device storage.
   *
   * On **Android**, values are written to `SharedPreferences`.
   * On **iOS**, values are written to `UserDefaults`.
   *
   * The value type (string, number, or boolean) is preserved on the native side.
   *
   * @since 1.0.0
   * @example
   * ```typescript
   * import { AppSettings } from 'capacitor-app-settings';
   *
   * await AppSettings.set({ key: 'dark_mode', value: true });
   * await AppSettings.set({ key: 'font_size', value: 16 });
   * await AppSettings.set({ key: 'username', value: 'john' });
   * ```
   */
  set(options: SetOptions): Promise<void>;
}
