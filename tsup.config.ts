import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['index.ts'], // 라이브러리의 진입점 파일
  format: ['esm', 'cjs'], // ESM, CJS 형식으로 빌드
  dts: true, // 타입 정의 파일 생성
  clean: true, // 빌드 전, 이전 빌드 파일 정리
  external: ['react'], // React는 외부 의존성으로 처리
});
