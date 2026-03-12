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
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### sendEvent(...)

```typescript
sendEvent(options: { key: string; }) => Promise<{ status: string; }>
```

| Param         | Type                          |
| ------------- | ----------------------------- |
| **`options`** | <code>{ key: string; }</code> |

**Returns:** <code>Promise&lt;{ status: string; }&gt;</code>

--------------------


### get(...)

```typescript
get(options: { key: string; }) => Promise<{ value: SettingValue | null; }>
```

| Param         | Type                          |
| ------------- | ----------------------------- |
| **`options`** | <code>{ key: string; }</code> |

**Returns:** <code>Promise&lt;{ value: <a href="#settingvalue">SettingValue</a> | null; }&gt;</code>

--------------------


### set(...)

```typescript
set(options: { key: string; value: SettingValue; }) => Promise<void>
```

| Param         | Type                                                                           |
| ------------- | ------------------------------------------------------------------------------ |
| **`options`** | <code>{ key: string; value: <a href="#settingvalue">SettingValue</a>; }</code> |

--------------------


### Type Aliases


#### SettingValue

<code>string | number | boolean</code>

</docgen-api>
