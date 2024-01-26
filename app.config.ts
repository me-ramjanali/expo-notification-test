import { ExpoConfig, ConfigContext } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "Pinwheel",
  slug: "caregiver-admin-mobile",
  version: "1.3.0",
  owner: "pinwheel",
  orientation: "default",
  icon: "./assets/icon.png",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff"
  },
  updates: {
    fallbackToCacheTimeout: 0,
    url: "https://u.expo.dev/404ac2c3-fe53-4729-9c58-68b49b38a828"
  },
  runtimeVersion: {
    policy: "appVersion"
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.pinwheel.notification.test",
    buildNumber: "1.3.0",
    infoPlist: {
      NSCameraUsageDescription: "Camera use is required to take a photo for a contact",
      NSMicrophoneUsageDescription: "This app does not require access to the microphone",
      RCTAsyncStorageExcludeFromBackup: false
    }
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#FFFFFF"
    },
    package: "com.pinwheel.notification.test",
    versionCode: 15,
    permissions: [],
    googleServicesFile: "./google-services.json",
    allowBackup: false
  },
  web: {
    favicon: "./assets/favicon.png"
  },
  description: "",
  hooks: {
    postPublish: [
      {
        file: "sentry-expo/upload-sourcemaps",
        config: {
          organization: "pinwheel",
          project: "caregiver-admin-mobile",
          authToken: "d53791f3106940aaa2792cab04ce4ccc72d02b9520de4a01afeae7816a0736c9"
        }
      }
    ]
  },
  extra: {
    eas: {
      projectId: "404ac2c3-fe53-4729-9c58-68b49b38a828"
    },
    // eslint-disable-next-line no-undef
    cgUrl: process.env.CG_URL
  },
  plugins: ["expo-updates"]
});
