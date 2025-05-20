import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(AppSettingsPlugin)
public class AppSettingsPlugin: CAPPlugin, CAPBridgedPlugin {
    
    public let identifier = "AppSettingsPlugin"
    public let jsName = "AppSettings"

    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "sendEvent", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "get", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "set", returnType: CAPPluginReturnPromise)
    ]

    @objc func sendEvent(_ call: CAPPluginCall) {
        guard let key = call.getString("key") else {
            call.reject("Must provide a key")
            return
        }

        NotificationCenter.default.post(name: Notification.Name(key), object: nil)
        call.resolve(["status": "Event sent to AppDelegate"])
    }
    
    @objc func get(_ call: CAPPluginCall) {
        guard let key = call.getString("key") else {
            call.reject("Must provide a key")
            return
        }
        // Read directly from the standard defaults
        let val = UserDefaults.standard.object(forKey: key)
        call.resolve(["value": val ?? NSNull()])
    }

    @objc func set(_ call: CAPPluginCall) {
        // 1) Retrieve key and value from JS call
        guard let key = call.getString("key"),
            let value = call.getString("value")
        else {
            call.reject("Must provide both key and value")
            return
        }

        // 2) Write into the standard UserDefaults
        UserDefaults.standard.set(value, forKey: key)  // writes any plist-compatible type :contentReference[oaicite:0]{index=0}
        UserDefaults.standard.synchronize()  // flush to disk (optional on modern iOS) :contentReference[oaicite:1]{index=1}

        // 3) Send success back to JS
        call.resolve()
    }
}
