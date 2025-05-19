package com.example.appsettings;

import android.content.Context;
import android.content.SharedPreferences;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "AppSettings")
public class AppSettingsPlugin extends Plugin {

    private SharedPreferences getPreferences() {
        Context context = getContext();
        return context.getSharedPreferences("AppSettings", Context.MODE_PRIVATE);
    }

    @PluginMethod
    public void get(PluginCall call) {
        String key = call.getString("key");
        if (key == null) {
            call.reject("Must provide a key");
            return;
        }

        SharedPreferences prefs = getPreferences();
        if (!prefs.contains(key)) {
            call.resolve(new JSObject().put("value", null));
            return;
        }

        Object value = null;
        Map<String, ?> allPrefs = prefs.getAll();
        if (allPrefs.containsKey(key)) {
            value = allPrefs.get(key);
        }

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

        SharedPreferences prefs = getPreferences();
        SharedPreferences.Editor editor = prefs.edit();

        Object value = data.get("value");
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
        } else {
            call.reject("Unsupported value type");
            return;
        }

        editor.apply();
        call.resolve();
    }
}
