package com.elvispos.app_settings;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "AppSettings")
public class AppSettingsPlugin extends Plugin {

    private SharedPreferences getPreferences() {
        return getContext().getSharedPreferences("AppSettings", Context.MODE_PRIVATE);
    }

    @PluginMethod
    public void sendEvent(PluginCall call) {
        String key = call.getString("key");
        if (key == null) {
            call.reject("Must provide a key");
            return;
        }

        Context context = getContext();
        Intent intent = new Intent(key);
        intent.setPackage(context.getPackageName());
        context.sendBroadcast(intent);

        JSObject ret = new JSObject();
        ret.put("status", "Event sent");
        call.resolve(ret);
    }

    @PluginMethod
    public void get(PluginCall call) {
        String key = call.getString("key");
        if (key == null) {
            call.reject("Must provide a key");
            return;
        }

        SharedPreferences prefs = getPreferences();
        Object value = prefs.getAll().get(key);

        JSObject ret = new JSObject();
        ret.put("value", value);
        call.resolve(ret);
    }

    @PluginMethod
    public void set(PluginCall call) {
        String key = call.getString("key");
        if (key == null) {
            call.reject("Must provide a key");
            return;
        }

        JSObject data = call.getData();
        if (!data.has("value")) {
            call.reject("Must provide a value");
            return;
        }

        try {
            Object value = data.get("value");
            SharedPreferences.Editor editor = getPreferences().edit();

            if (value instanceof String) {
                editor.putString(key, (String) value);
            } else if (value instanceof Boolean) {
                editor.putBoolean(key, (Boolean) value);
            } else if (value instanceof Integer) {
                editor.putInt(key, (Integer) value);
            } else if (value instanceof Float) {
                editor.putFloat(key, (Float) value);
            } else if (value instanceof Long) {
                editor.putLong(key, (Long) value);
            } else if (value instanceof Double) {
                editor.putFloat(key, ((Double) value).floatValue());
            } else {
                call.reject("Unsupported value type: " + value.getClass().getSimpleName());
                return;
            }

            editor.apply();
            call.resolve();
        } catch (Exception e) {
            call.reject("Failed to set value: " + e.getMessage(), e);
        }
    }
}
