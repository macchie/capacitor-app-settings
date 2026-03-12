all: build

build:
	@echo "Building the project..."
	npm run build

verify-ios:
	@echo "Verifying iOS build..."
	npm run verify:ios

verify-android:
	@echo "Verifying Android build..."
	ANDROID_SDK_ROOT=~/Android/Sdk npm run verify:android