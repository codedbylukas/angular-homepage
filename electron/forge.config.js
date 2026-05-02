const { FusesPlugin } = require('@electron-forge/plugin-fuses');
const { FuseV1Options, FuseVersion } = require('@electron/fuses');

module.exports = {
  packagerConfig: {
    asar: true,
    executableName: 'angular-homepage',
    // icon: './images/icon', // Empfehlung: Pfad ohne Endung angeben
  },
  rebuildConfig: {},
  makers: [
    // --- WINDOWS ---
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'angular_homepage',
        setupExe: 'AngularHomepageSetup.exe',
      },
    },
    {
      // ZIP als Backup für Windows (funktioniert auf Kali ohne Mono-Probleme)
      name: '@electron-forge/maker-zip',
      platforms: ['win32'],
    },

    // --- MACOS ---
    {
      name: '@electron-forge/maker-dmg',
      config: {
        format: 'ULFO',
      },
    },

    // --- LINUX & MACOS ZIP ---
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin', 'linux'],
    },
    {
      // DEB Paket für Kali
      name: '@electron-forge/maker-deb',
      config: {
        options: {
          name: 'angular-homepage',
          productName: 'Angular Homepage',
          maintainer: 'Lukas',
          description: 'Meine Angular Homepage App',
          categories: ['Utility'],
          section: 'utils',
          priority: 'optional',
        },
      },
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
    new FusesPlugin({
      version: FuseVersion.V1,
      [FuseV1Options.RunAsNode]: false,
      [FuseV1Options.EnableCookieEncryption]: true,
      [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
      [FuseV1Options.EnableNodeCliInspectArguments]: false,
      [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
      [FuseV1Options.OnlyLoadAppFromAsar]: true,
    }),
  ],
};
