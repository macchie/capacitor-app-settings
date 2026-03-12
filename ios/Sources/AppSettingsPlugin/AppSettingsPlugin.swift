import Foundation
import Capacitor

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
        call.resolve(["status": "Event sent"])
    }

    @objc func get(_ call: CAPPluginCall) {
        guard let key = call.getString("key") else {
            call.reject("Must provide a key")
            return
        }

        let val = UserDefaults.standard.object(forKey: key)
        call.resolve(["value": val ?? NSNull()])
    }

    @objc func set(_ call: CAPPluginCall) {
        guard let key = call.getString("key") else {
            call.reject("Must provide a key")
            return
        }

        let jsValue = call.getValue("value")
        guard let value = jsValue else {
            call.reject("Must provide a value")
            return
        }

        UserDefaults.standard.set(value, forKey: key)
        call.resolve()
    }
}
