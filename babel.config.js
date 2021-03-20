module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@/components': './src/components',
          '@/modules': './src/modules',
          '@/routes': './src/routes',
          '@/tailwind': './tailwind.js',
        },
      },
    ],
  ],
};
