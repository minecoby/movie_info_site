# 영화 정보 대시보드

2023-2025년 한국 영화 데이터를 시각화하고 분석하는 웹 애플리케이션입니다.

## 프로젝트 소개

직관적인 UI와 인터랙티브한 차트로 복잡한 영화 데이터를 쉽게 확인할 수 있습니다. 영화진흥위원회(KOBIS)의 공식 데이터를 기반으로 장르별, 국가별, 연도별 통계를 제공합니다.

### 주요 기능

- **대시보드**: 장르별, 국가별, 월별 영화 데이터를 차트로 시각화
  - 바 차트 (장르별 Top 10)
  - 파이 차트 (국가별 Top 8)
  - 에어리어 차트 (월별 개봉 추이)
  - 연도별 필터링 (2023, 2024, 2025, 전체)

- **검색 기능**: 영화 제목, 감독, 장르로 검색
  - 장르/국가별 필터링
  - URL 기반 쿼리 파라미터

- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 기기 지원

- **영화 상세정보**: 개별 영화의 감독, 제작사, 장르, 국가 등 상세 정보

## 기술 스택

### Frontend
- **Next.js 16.0.5** - React 프레임워크
- **React 19.2.0** - UI 라이브러리
- **TypeScript 5** - 타입 안정성
- **Tailwind CSS 4** - 유틸리티 우선 CSS 프레임워크

### Data Visualization
- **Recharts 3.6.0** - React 기반 차트 라이브러리

### Features
- Next.js App Router
- SSG (Static Site Generation)
- URL 기반 필터링
- TypeScript 타입 안정성

## 시작하기

### 필수 요구사항

- Node.js 20.x 이상
- npm, yarn, pnpm, 또는 bun

### 설치

```bash
# 저장소 클론
git clone https://github.com/minecoby/movie_info_site.git
cd movie_info_site

# 의존성 설치
npm install
# or
yarn install
# or
pnpm install
```

### 개발 서버 실행

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 프로덕션 빌드

```bash
# 빌드
npm run build

# 빌드된 파일 실행
npm run start
```

## 프로젝트 구조

```
movie_info_site/
├── app/                    # Next.js App Router 페이지
│   ├── page.tsx           # 홈페이지
│   ├── dashboard/         # 대시보드 페이지
│   ├── search/            # 검색 페이지
│   ├── detail/[movieCd]/  # 영화 상세 페이지
│   ├── about/             # 소개 페이지
│   ├── layout.tsx         # 루트 레이아웃
│   └── globals.css        # 전역 스타일
│
├── components/            # React 컴포넌트
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── dashboard/         # 대시보드 차트 컴포넌트
│   ├── search/            # 검색 관련 컴포넌트
│   └── detail/            # 상세 페이지 컴포넌트
│
├── lib/                   # 유틸리티 함수
│   └── movieData.ts       # 데이터 처리 함수
│
├── types/                 # TypeScript 타입 정의
│   └── movie.ts
│
└── data/                  # 영화 데이터 (JSON)
    ├── movie_list_2023_1H.json
    ├── movie_list_2023_2H.json
    └── ...
```

## 데이터 출처

**영화진흥위원회 (KOBIS)**
- 2023년 1월 ~ 2025년 12월까지의 한국 영화 개봉 데이터
- 영화 제목, 장르, 제작 국가, 개봉일, 감독, 제작사 등의 정보 포함

## 배포

배포 링크: https://minecoby.github.io/movie_info_site/

### 배포 방법

이 프로젝트는 정적 사이트 생성(SSG)을 사용하므로 다음 플랫폼에 쉽게 배포할 수 있습니다:

- **Vercel**: `vercel deploy`
- **Netlify**: `netlify deploy`
- **GitHub Pages**: `out/` 폴더 배포

## 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.

## 개발자

minecoby

---

