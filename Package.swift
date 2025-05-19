// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorAppSettings",
    platforms: [.iOS(.v14)],
    products: [
        .library(
            name: "CapacitorAppSettings",
            targets: ["AppSettingsPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "7.0.0")
    ],
    targets: [
        .target(
            name: "AppSettingsPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/AppSettingsPlugin"),
        .testTarget(
            name: "AppSettingsPluginTests",
            dependencies: ["AppSettingsPlugin"],
            path: "ios/Tests/AppSettingsPluginTests")
    ]
)