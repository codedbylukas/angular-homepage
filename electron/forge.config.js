const { FusesPlugin } = require('@electron-forge/plugin-fuses');
const { FuseV1Options, FuseVersion } = require('@electron/fuses');

module.exports = {
  packagerConfig: {
    asar: true,
    // Hier kannst du später ein Icon hinzufügen:
    // icon: './path/to/icon' 
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        // Name der .exe für Windows
        name: 'angular_homepage',
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin', 'linux'], // ZIP als Backup für Linux ist immer gut
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        options: {
          maintainer: 'Kali User',
          homepage: 'https://deine-homepage.de',
          // Verhindert Fehler bei fehlenden Icons oder Beschreibungen
          description: 'Meine Angular Homepage App',
          categories: ['Utility'],
        },
      },
    },
    /* RPM wurde entfernt, da 'rpmbuild' auf Kali/Debian 
      zu Berechtigungsfehlern mit der sqlite-Datenbank führt.
    */
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
