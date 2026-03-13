# capacitor-app-settings

Custom AppSettings plugin

## Install

```bash
npm install capacitor-app-settings
npx cap sync
```

## API

<docgen-index>

* [`sendEvent(...)`](#sendevent)
* [`get(...)`](#get)
* [`set(...)`](#set)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### sendEvent(...)

```typescript
sendEvent(options: GetOptions) => Promise<SendEventResult>
```

Send a broadcast event to the native platform.

On **Android**, this sends a `BroadcastIntent` with the key as the action.
On **iOS**, this posts a notification to `NotificationCenter` with the key as the name.

Useful for notifying other parts of the app (or other apps on Android) that something has changed.

| Param         | Type                                              |
| ------------- | ------------------------------------------------- |
| **`options`** | <code><a href="#getoptions">GetOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#sendeventresult">SendEventResult</a>&gt;</code>

**Since:** 1.0.0

--------------------


### get(...)

```typescript
get(options: GetOptions) => Promise<GetResult>
```

Retrieve a value from the native device storage.

On **Android**, values are read from `SharedPreferences`.
On **iOS**, values are read from `UserDefaults`.

| Param         | Type                                              |
| ------------- | ------------------------------------------------- |
| **`options`** | <code><a href="#getoptions">GetOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#getresult">GetResult</a>&gt;</code>

**Since:** 1.0.0

--------------------


### set(...)

```typescript
set(options: SetOptions) => Promise<void>
```

Store a value in the native device storage.

On **Android**, values are written to `SharedPreferences`.
On **iOS**, values are written to `UserDefaults`.

The value type (string, number, or boolean) is preserved on the native side.

| Param         | Type                                              |
| ------------- | ------------------------------------------------- |
| **`options`** | <code><a href="#setoptions">SetOptions</a></code> |

**Since:** 1.0.0

--------------------


### Interfaces


#### SendEventResult

Result returned after sending an event.

| Prop         | Type                | Description                                     |
| ------------ | ------------------- | ----------------------------------------------- |
| **`status`** | <code>string</code> | The status of the event dispatch (e.g. `"ok"`). |


#### GetOptions

Options for retrieving or sending events by key.

| Prop      | Type                | Description                         |
| --------- | ------------------- | ----------------------------------- |
| **`key`** | <code>string</code> | The key of the setting to retrieve. |


#### GetResult

Result returned when retrieving a setting value.

| Prop        | Type                                                          | Description                                                             |
| ----------- | ------------------------------------------------------------- | ----------------------------------------------------------------------- |
| **`value`** | <code><a href="#settingvalue">SettingValue</a> \| null</code> | The value associated with the key, or `null` if the key does not exist. |


#### SetOptions

Options for storing a setting value.

| Prop        | Type                                                  | Description                                              |
| ----------- | ----------------------------------------------------- | -------------------------------------------------------- |
| **`key`**   | <code>string</code>                                   | The key under which the value will be stored.            |
| **`value`** | <code><a href="#settingvalue">SettingValue</a></code> | The value to store. Can be a string, number, or boolean. |


### Type Aliases


#### SettingValue

Represents the types of values that can be stored in app settings.

<code>string | number | boolean</code>

</docgen-api>
