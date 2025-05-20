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

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### sendEvent(...)

```typescript
sendEvent(options: { key: string; }) => Promise<{ value: any; }>
```

| Param         | Type                          |
| ------------- | ----------------------------- |
| **`options`** | <code>{ key: string; }</code> |

**Returns:** <code>Promise&lt;{ value: any; }&gt;</code>

--------------------


### get(...)

```typescript
get(options: { key: string; }) => Promise<{ value: any; }>
```

| Param         | Type                          |
| ------------- | ----------------------------- |
| **`options`** | <code>{ key: string; }</code> |

**Returns:** <code>Promise&lt;{ value: any; }&gt;</code>

--------------------


### set(...)

```typescript
set(options: { key: string; value: string; }) => Promise<void>
```

| Param         | Type                                         |
| ------------- | -------------------------------------------- |
| **`options`** | <code>{ key: string; value: string; }</code> |

--------------------

</docgen-api>
