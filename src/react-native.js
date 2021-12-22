module.exports = {
  plugins: ['react-native', '@react-native-community'],
  extends: ['plugin:react-native-a11y/all'],
  env: {
    'react-native/react-native': true,
  },
  compilerOptions: {
    plugins: [
      {
        name: "typescript-styled-plugin",
        lint: {
          "validProperties": [
            "aspect-ratio",
            "elevation",
            "margin-vertical",
            "margin-horizontal",
            "padding-horizontal",
            "padding-vertical",
            "resize-mode",
            "shadow-color",
            "shadow-opacity",
            "shadow-offset",
            "shadow-radius",
            "text-align-vertical",
            "tint-color"
          ]
        }
      }
    ]
  }
}
