import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format: 'esm',
  },
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
      outDir: 'dist',
    }),
  ],
};
