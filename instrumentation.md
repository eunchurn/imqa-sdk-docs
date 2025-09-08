# IMQA 웹 에이전트 계측 항목 (Instrumentations) 종합 가이드

## 개요

이 문서는 IMQA 모니터링 시스템에서 사용되는 다양한 계측 항목(Instrumentations)의 구조와 사용 방법을 종합적으로 설명합니다. 모든 계측 항목은 OpenTelemetry 형식을 따르며, 웹 애플리케이션의 성능, 오류, 사용자 상호작용 등을 모니터링하는 데 사용됩니다.

## 공통 스키마 구조

### ResourceSpans

모든 스키마의 최상위 컨테이너로, 다음과 같은 구성요소를 포함합니다:

- `resource`: Telemetry를 생성하는 서비스에 대한 정보
- `scopeSpans`: 인스트루멘테이션 범위별로 그룹화된 스팬 컬렉션

### 공통 리소스 속성

모든 스키마에서 공통으로 사용되는 리소스 속성들입니다:

| 속성                         | 설명                               |
| ---------------------------- | ---------------------------------- |
| `service.name`               | Telemetry를 생성하는 서비스의 이름 |
| `telemetry.sdk.language`     | Telemetry SDK의 프로그래밍 언어    |
| `telemetry.sdk.name`         | Telemetry SDK의 이름               |
| `telemetry.sdk.version`      | Telemetry SDK의 버전               |
| `process.runtime.name`       | 런타임 이름 (예: "browser")        |
| `service.version`            | 서비스 버전                        |
| `os.name`                    | 운영체제 이름                      |
| `os.version`                 | 운영체제 버전                      |
| `imqa.browser.device`        | 디바이스 타입                      |
| `imqa.browser.name`          | 브라우저 이름                      |
| `imqa.browser.version`       | 브라우저 전체 버전                 |
| `imqa.browser.version_major` | 브라우저 메이저 버전               |
| `service.key`                | 서비스 식별 키                     |
| `imqa.agent.version`         | IMQA 에이전트 버전                 |
| `rum.version`                | RUM (Real User Monitoring) 버전    |
| `rum.scriptInstance`         | RUM 스크립트 인스턴스 식별자       |
| `session.id`                 | 사용자 세션 식별자                 |

### 공통 스팬 속성

모든 스팬에서 공통으로 사용되는 속성들입니다:

| 속성                     | 타입     | 설명               |
| ------------------------ | -------- | ------------------ |
| `location.href`          | `string` | 현재 페이지 URL    |
| `environment`            | `string` | 환경 이름          |
| `deployment.environment` | `string` | 배포 환경          |
| `screen.name`            | `string` | 화면/페이지 이름   |
| `screen.type`            | `string` | 화면/페이지 타입   |
| `session.id`             | `string` | 사용자 세션 식별자 |
| `url.full`               | `string` | 요청 전체 URL      |

---

## 1. 문서 로드 계측 (`@imqa/instrumentation-document-load`)

![NPM Version](https://img.shields.io/npm/v/%40imqa%2Finstrumentation-document-load?style=flat-square&logo=npm&color=%238ef7c1)

### 개요

문서 로드 계측은 웹 페이지의 초기 로딩 프로세스를 자동으로 추적하고 분석하는 기능을 제공합니다. HTML 문서 로딩부터 DOM 구성, 리소스 로딩까지의 전체 과정을 실시간으로 모니터링하여 페이지 로딩 성능을 최적화할 수 있는 데이터를 제공합니다.

### 주요 기능

- **로딩 단계별 추적**: HTML 문서 다운로드 시간 측정, DOM 파싱 및 구성 시간 추적
- **성능 메트릭 수집**: Navigation Timing API 기반 정밀 측정
- **최적화 인사이트**: 로딩 성능 개선점 도출

### 계측 범위

- 네비게이션 시작: 페이지 요청 시작 시점
- 서버 응답: HTML 문서 다운로드 완료
- DOM 파싱: HTML 파싱 및 DOM 트리 구성
- 리소스 로딩: CSS, JS, 이미지 등 추가 리소스

### 스팬 유형

#### 메인 문서 로드 스팬

- `name`: "documentLoad"
- `kind`: INTERNAL (1)
- 전체 페이지 로딩 프로세스를 추적

#### 문서 가져오기 스팬

- `name`: "documentFetch"
- 초기 HTML 문서 가져오기 작업

#### 리소스 가져오기 스팬

- `name`: "resourceFetch"
- 스크립트, 스타일시트 등 리소스 로딩

---

## 2. XMLHttpRequest 계측 (`@imqa/instrumentation-xml-http-request`)

![NPM Version](https://img.shields.io/npm/v/%40imqa%2Finstrumentation-xml-http-request?style=flat-square&logo=npm&color=%238ef7c1)

### 개요

XMLHttpRequest 계측은 웹 애플리케이션에서 XMLHttpRequest API를 통해 이루어지는 HTTP 요청을 자동으로 추적하고 모니터링하는 기능을 제공합니다.

### 주요 기능

- **자동 AJAX 추적**: XMLHttpRequest 호출 자동 감지 및 추적
- **성능 모니터링**: 요청 지연 시간 측정, 응답 크기 및 상태 코드 추적
- **호환성 지원**: 레거시 브라우저 및 라이브러리 지원

### 계측 범위

- AJAX 요청: 비동기 HTTP 통신
- Form 제출: XMLHttpRequest를 통한 폼 데이터 전송
- 파일 업로드: FormData 기반 파일 전송
- API 호출: RESTful API 및 서드파티 서비스 통신

### 주요 스팬 속성

| 속성               | 타입      | 설명                           |
| ------------------ | --------- | ------------------------------ |
| `http.method`      | `string`  | HTTP 메서드 (`GET`, `POST` 등) |
| `http.status_code` | `integer` | HTTP 응답 코드                 |
| `http.host`        | `string`  | 요청 호스트 이름               |
| `duration`         | `integer` | 요청 처리 시간 (나노초)        |

---

## 3. Fetch API 계측 (`@imqa/instrumentation-fetch`)

![NPM Version](https://img.shields.io/npm/v/%40imqa%2Finstrumentation-fetch?style=flat-square&logo=npm&color=%238ef7c1)

### 개요

Fetch API 계측은 웹 애플리케이션에서 Fetch API를 통해 이루어지는 HTTP 요청을 자동으로 추적하고 모니터링하는 기능을 제공합니다.

### 주요 기능

- **자동 요청 추적**: Fetch API 호출 자동 감지 및 추적
- **성능 모니터링**: 요청 지연 시간 측정
- **컨텍스트 정보**: 요청 헤더 및 본문 정보 (설정 시)

### 계측 범위

- REST API 호출: GET, POST, PUT, DELETE 등 모든 HTTP 메서드
- GraphQL 요청: GraphQL 엔드포인트 호출
- 파일 업로드/다운로드: 멀티파트 폼 데이터 및 바이너리 전송
- 외부 서비스 호출: 서드파티 API 및 마이크로서비스 통신

### 설정 옵션

```typescript
type IMQAFetchInstrumentationConfig = {
  advancedNetworkCapture?: boolean // 고급 네트워크 캡처
  clearTimingResources?: boolean // 타이밍 리소스 초기화
  propagateTraceHeaderCorsUrls?: string[] // CORS 요청에 Trace Header 전파
}
```

> ⚠️ **경고**: 네트워크 캡처를 활성화하면 `body`와 `header`에 담긴 민감한 정보가 함께 계측됩니다.

---

## 4. 브라우저 예외 계측 (`@imqa/instrumentation-browser-exception`)

![NPM Version](https://img.shields.io/npm/v/%40imqa%2Finstrumentation-browser-exception?style=flat-square&logo=npm&color=%238ef7c1)

### 개요

브라우저 예외 계측은 웹 애플리케이션에서 발생하는 JavaScript 오류와 예외를 자동으로 감지하고 모니터링하는 기능을 제공합니다.

### 주요 기능

- **자동 오류 감지**: JavaScript 런타임 오류 자동 캡처
- **상세한 오류 정보**: 오류 메시지와 스택 트레이스
- **실시간 모니터링**: 오류 발생 즉시 데이터 전송

### 계측 범위

- JavaScript 런타임 오류: 구문 오류, 참조 오류, 타입 오류 등
- Promise Rejection: 처리되지 않은 비동기 오류
- Resource Loading 오류: 이미지, 스크립트 등 리소스 로딩 실패
- 사용자 정의 오류: 개발자가 직접 발생시키는 오류

### 주요 스팬 속성

| 속성                   | 타입      | 설명                                          |
| ---------------------- | --------- | --------------------------------------------- |
| `exception.type`       | `string`  | 예외 타입 (예: "ReferenceError", "TypeError") |
| `exception.message`    | `string`  | 오류 메시지                                   |
| `exception.stacktrace` | `string`  | 오류 스택 트레이스                            |
| `error.filename`       | `string`  | 오류가 발생한 파일명                          |
| `error.lineno`         | `integer` | 오류가 발생한 라인 번호                       |

> ⚠️ **주의**: 서버 혹은 엣지 환경(SSR)에서 발생하는 오류는 계측되지 않습니다.

---

## 5. Long Task 계측 (`@imqa/instrumentation-browser-longtask`)

![NPM Version](https://img.shields.io/npm/v/%40imqa%2Finstrumentation-browser-longtask?style=flat-square&logo=npm&color=%238ef7c1)

### 개요

브라우저 장시간 작업 계측은 웹 애플리케이션에서 메인 스레드를 오랫동안 차단하는 작업(Long Task)을 자동으로 감지하고 모니터링하는 기능을 제공합니다.

### 주요 기능

- **장시간 작업 감지**: 50ms 이상 실행되는 작업 자동 감지
- **성능 영향 분석**: 사용자 상호작용 지연 원인 식별
- **최적화 지원**: 코드 분할 최적화 가이드

### 계측 범위

- JavaScript 실행: 복잡한 계산 및 DOM 조작
- 렌더링 작업: 대량의 DOM 변경 및 레이아웃 계산
- 이벤트 처리: 무거운 이벤트 핸들러 실행
- 외부 라이브러리: 서드파티 스크립트의 장시간 실행

### 주요 스팬 속성

| 속성                                  | 타입      | 설명                           |
| ------------------------------------- | --------- | ------------------------------ |
| `longtask.duration`                   | `integer` | Long Task의 지속 시간 (밀리초) |
| `longtask.attribution.name`           | `string`  | 속성 소스의 이름               |
| `longtask.attribution.container_type` | `string`  | 컨테이너 타입                  |

---

## 6. 콘솔 계측 (`@imqa/instrumentation-console`)

![NPM Version](https://img.shields.io/npm/v/%40imqa%2Finstrumentation-console?style=flat-square&logo=npm&color=%238ef7c1)

### 개요

콘솔 계측은 웹 애플리케이션에서 JavaScript 콘솔에 출력되는 로그, 경고, 오류 메시지를 자동으로 캡처하고 모니터링하는 기능을 제공합니다.

### 주요 기능

- **콘솔 메시지 캡처**: console.log, warn, error, info 등 모든 콘솔 출력 추적
- **로그 레벨 분류**: 로그 레벨별 메시지 분류 및 필터링
- **디버깅 지원**: 실시간 로그 모니터링 및 알림

### 로그 레벨

- **INFO** (`console.log`, `console.info`): 일반 정보 메시지
- **WARN** (`console.warn`): 경고 메시지
- **ERROR** (`console.error`): 오류 메시지
- **DEBUG** (`console.debug`): 상세한 디버깅 정보

### 설정 옵션

```typescript
interface IMQAConsoleInstrumentationConfig extends InstrumentationConfig {
  betaMode: boolean
  loggerOptions: LoggerOptions
  contextManager?: MutableAsyncLocalStorageContextManager
}
```

> ⚠️ **순환객체 주의**: `JSON.stringify()`를 통해 직렬화하므로 순환 참조 객체 로깅 시 주의가 필요합니다.

---

## 7. 네트워크 연결성 계측 (`@imqa/instrumentation-connectivity`)

![NPM Version](https://img.shields.io/npm/v/%40imqa%2Finstrumentation-connectivity?style=flat-square&logo=npm&color=%238ef7c1)

### 개요

연결성 계측은 웹 애플리케이션의 네트워크 연결 상태와 인터넷 연결성 변화를 자동으로 감지하고 모니터링하는 기능을 제공합니다.

### 주요 기능

- **연결 상태 모니터링**: 온라인/오프라인 상태 변화 감지
- **네트워크 타입 감지**: WiFi, 셀룰러, 이더넷 등 연결 타입 식별
- **연결성 기반 적응**: 네트워크 상태에 따른 성능 최적화

### 계측 범위

- 연결 상태: 온라인, 오프라인, 연결 불안정
- 네트워크 타입: WiFi, 셀룰러(3G/4G/5G), 이더넷
- 연결 품질: 지연시간, 처리량, 패킷 손실
- 연결 변경: 네트워크 전환 및 재연결 이벤트

### 주요 스팬 속성

| 속성     | 타입      | 설명                                                     |
| -------- | --------- | -------------------------------------------------------- |
| `online` | `boolean` | 네트워크 연결 상태 (`true` = 온라인, `false` = 오프라인) |

---

## 8. 문서 로드 후 리소스 계측 (`@imqa/instrumentation-post-doc-load-resource`)

![NPM Version](https://img.shields.io/npm/v/%40imqa%2Finstrumentation-post-doc-load-resource?style=flat-square&logo=npm&color=%238ef7c1)

### 개요

문서 로드 후 계측은 웹 페이지의 초기 로딩 완료 이후에 발생하는 지연 로딩 및 동적 콘텐츠 로딩을 추적하는 기능을 제공합니다.

### 주요 기능

- **지연 로딩 추적**: Lazy loading 이미지 및 콘텐츠 모니터링
- **동적 리소스 모니터링**: 동적으로 생성되는 스크립트 및 스타일시트
- **성능 최적화 지원**: 지연 로딩 효과 측정

### 계측 범위

- 지연 로딩: 뷰포트 진입 시 로딩되는 이미지/콘텐츠
- 동적 스크립트: 런타임에 추가되는 JavaScript 파일
- AJAX 콘텐츠: 비동기로 로딩되는 HTML 콘텐츠
- 사용자 트리거: 클릭, 호버 등에 의한 리소스 로딩

---

## 9. 라우트 변경 계측 (`@imqa/instrumentation-route`)

![NPM Version](https://img.shields.io/npm/v/%40imqa%2Finstrumentation-user-interaction?style=flat-square&logo=npm&color=%238ef7c1)

### 개요

라우트 계측은 단일 페이지 애플리케이션(SPA)에서 클라이언트 사이드 라우팅과 페이지 네비게이션을 자동으로 추적하는 기능을 제공합니다.

### 주요 기능

- **자동 라우트 추적**: SPA 라우트 변경 자동 감지
- **네비게이션 패턴 분석**: 사용자 페이지 이동 경로 추적
- **성능 모니터링**: 라우트별 렌더링 시간

### 계측 범위

- 프로그래매틱 네비게이션: JavaScript를 통한 라우트 변경
- 브라우저 네비게이션: 뒤로 가기, 앞으로 가기, 새로고침
- 링크 클릭: 내부 링크를 통한 페이지 이동
- 외부 네비게이션: 외부 사이트로의 이동 (이탈)

### 주요 스팬 속성

| 속성        | 타입     | 설명                           |
| ----------- | -------- | ------------------------------ |
| `prev.href` | `string` | 라우트 변경 전 이전 페이지 URL |

---

## 10. 사용자 상호작용 계측 (`@imqa/instrumentation-user-interaction`)

![NPM Version](https://img.shields.io/npm/v/%40imqa%2Finstrumentation-user-interaction?style=flat-square&logo=npm&color=%238ef7c1)

### 개요

사용자 상호작용 계측은 웹 애플리케이션에서 발생하는 사용자의 다양한 상호작용 이벤트를 자동으로 감지하고 추적하는 기능을 제공합니다.

### 주요 기능

- **자동 이벤트 추적**: 클릭, 더블클릭, 우클릭 이벤트 감지
- **상세한 상호작용 정보**: 이벤트 발생 위치 및 타겟 요소
- **사용자 경험 분석**: 상호작용 패턴 및 흐름 분석

### 계측 범위

- 마우스 이벤트: 클릭, 더블클릭, 우클릭, 호버
- 키보드 이벤트: 키 입력, 키 조합, 포커스 변경
- 폼 이벤트: 입력 필드 변경, 폼 제출, 유효성 검사
- 터치 이벤트: 탭, 스와이프, 핀치, 회전 (모바일)
- 네비게이션 이벤트: 페이지 이동, 뒤로 가기, 새로고침

### 주요 스팬 속성

| 속성                  | 타입     | 설명                                            |
| --------------------- | -------- | ----------------------------------------------- |
| `event_type`          | `string` | 이벤트의 타입 (예: "click", "submit", "change") |
| `target_element`      | `string` | 상호작용된 HTML 요소 타입                       |
| `target_xpath`        | `string` | 대상 요소의 XPath                               |
| `target_element_text` | `string` | 상호작용된 요소의 텍스트                        |
| `target_element_tag`  | `string` | 상호작용된 요소의 태그                          |

---

## 11. WebSocket 계측 (`@imqa/instrumentation-websocket`)

![NPM Version](https://img.shields.io/npm/v/%40imqa%2Finstrumentation-websocket?style=flat-square&logo=npm&color=%238ef7c1)

### 개요

WebSocket 계측은 웹 애플리케이션에서 WebSocket 연결과 실시간 메시지 통신을 자동으로 추적하고 모니터링하는 기능을 제공합니다.

### 주요 기능

- **연결 상태 추적**: WebSocket 연결 수립 및 종료 모니터링
- **메시지 통신 모니터링**: 메시지 송신/수신 이벤트 추적
- **성능 및 오류 분석**: WebSocket 응답 시간 측정

### 계측 범위

- 연결 라이프사이클: 연결, 열림, 닫힘, 오류
- 메시지 통신: 텍스트/바이너리 메시지 송수신
- 프로토콜 이벤트: 핸드셰이크, 하트비트, 핑/퐁
- 오류 처리: 연결 실패, 프로토콜 오류, 네트워크 이슈

### 주요 스팬 속성

| 속성                     | 타입      | 설명                                             |
| ------------------------ | --------- | ------------------------------------------------ |
| `websocket.url`          | `string`  | WebSocket 연결 URL                               |
| `websocket.event_type`   | `string`  | 이벤트의 타입 (`connect`, `message`, `close` 등) |
| `websocket.message_type` | `string`  | 메시지의 타입 (`text`, `binary`)                 |
| `websocket.message_size` | `integer` | 메시지의 크기 (바이트)                           |

### 설정 옵션

```typescript
interface IMQAWebSocketInstrumentationConfig extends InstrumentationConfig {
  ignoreUrls?: (string | RegExp)[] // 계측하지 않을 URL 패턴
}
```

---

## 12. 코어 웹바이탈 계측 (`@imqa/instrumentation-webvitals`)

![NPM Version](https://img.shields.io/npm/v/%40imqa%2Finstrumentation-webvitals?style=flat-square&logo=npm&color=%238ef7c1)

### 개요

WebVitals 계측은 웹 애플리케이션의 핵심 성능 지표인 Core Web Vitals를 자동으로 측정하고 모니터링하는 기능을 제공합니다.

### 주요 기능

- **Core Web Vitals 측정**: LCP, FID, CLS 등 핵심 성능 지표
- **추가 성능 메트릭**: TTFB, FCP, TTI, TBT
- **실시간 성능 모니터링**: 성능 임계값 기반 알림

### 계측 범위

- **로딩 성능**: 페이지 로드 및 콘텐츠 렌더링 시간
- **상호작용성**: 사용자 입력에 대한 응답 속도
- **시각적 안정성**: 레이아웃 변경으로 인한 시각적 불안정성
- **네트워크 성능**: 서버 응답 시간 및 리소스 로딩

### Core Web Vitals 지표

- **LCP** (Largest Contentful Paint): 최대 콘텐츠풀 페인트 시간
- **FID** (First Input Delay): 첫 번째 입력 지연 시간
- **CLS** (Cumulative Layout Shift): 누적 레이아웃 이동 점수
- **INP** (Interaction to Next Paint): 다음 페인트까지의 상호작용 지연 시간

### 주요 스팬 속성

| 속성            | 타입      | 설명                                              |
| --------------- | --------- | ------------------------------------------------- |
| `metric.name`   | `string`  | 성능 지표의 이름 (`LCP`, `FID`, `CLS` 등)         |
| `metric.value`  | `integer` | 지표의 값 (밀리초 또는 비율)                      |
| `metric.rating` | `string`  | 지표의 등급 (`good`, `needs-improvement`, `poor`) |

---

## 13. 페이지 가시성 계측 (`@imqa/instrumentation-page-visibility`)

![NPM Version](https://img.shields.io/npm/v/%40imqa%2Finstrumentation-page-visibility?style=flat-square&logo=npm&color=%238ef7c1)

### 개요

페이지 가시성 계측은 웹 페이지의 가시성 상태 변화를 자동으로 감지하고 추적하는 기능을 제공합니다.

### 주요 기능

- **가시성 상태 추적**: 페이지 visible/hidden 상태 변화 감지
- **사용자 참여 측정**: 실제 페이지 활성 시간 계산
- **성능 최적화 지원**: 백그라운드 상태에서의 리소스 사용 최적화

### 계측 범위

- 페이지 포커스: 사용자가 페이지로 돌아올 때
- 페이지 블러: 사용자가 다른 탭이나 앱으로 이동할 때
- 브라우저 최소화: 브라우저 창이 최소화되거나 숨겨질 때
- OS 레벨 전환: 다른 애플리케이션으로의 전환

### 주요 스팬 속성

| 속성     | 타입      | 설명                                                        |
| -------- | --------- | ----------------------------------------------------------- |
| `hidden` | `boolean` | 페이지가 숨김 상태인지 여부 (`true` = 숨김, `false` = 보임) |

---

## 스키마 간의 관계

IMQA 계측 항목들은 서로 연관되어 전체적인 사용자 경험을 추적합니다:

1. **사용자 상호작용** → **라우트 변경**: 링크 클릭이 라우트 변경을 트리거
2. **사용자 상호작용** → **브라우저 예외**: 상호작용 중 오류 발생
3. **라우트 변경** → **문서 로드**: 새 페이지 로드 시작
4. **문서 로드** → **리소스 로딩**: 추가 리소스 로딩
5. **네트워크 요청** → **성능 지표**: 로딩 시간이 웹바이탈에 영향

## 사용 방법

### 계측 활성화

각 계측 항목은 개별적으로 활성화/비활성화할 수 있습니다:

```typescript
// 기본 활성화
instrumentations: {
  documentLoad: true,
  userInteraction: true,
  fetch: true,
  // ...
}

// 세부 설정
instrumentations: {
  fetch: {
    advancedNetworkCapture: true,
    clearTimingResources: false
  },
  console: {
    betaMode: true,
    loggerOptions: { ... }
  }
}
```

### 모니터링 대시보드

IMQA 모니터링 시스템에서는 이러한 계측 데이터를 통해:

- **성능 모니터링**: 로딩 시간, 응답 속도, Core Web Vitals
- **오류 추적**: JavaScript 오류, 네트워크 실패, 예외 상황
- **사용자 행동 분석**: 클릭 패턴, 네비게이션 흐름, 참여도
- **네트워크 상태**: 연결 품질, 오프라인 사용성

### 최적화 권장사항

1. **성능 최적화**

   - Long Task 발생 시 코드 분할 고려
   - 리소스 로딩 우선순위 조정
   - 지연 로딩 전략 수립

2. **오류 관리**

   - 브라우저 예외 패턴 분석
   - 콘솔 오류 레벨별 대응
   - 네트워크 실패 재시도 로직

3. **사용자 경험**
   - 상호작용 지연 최소화
   - 페이지 가시성 기반 최적화
   - Core Web Vitals 개선

---

## 결론

IMQA 웹 에이전트의 13가지 계측 항목은 웹 애플리케이션의 모든 측면을 포괄적으로 모니터링합니다. 이를 통해 개발자는 실제 사용자 환경에서의 성능과 안정성을 정확히 파악하고, 데이터 기반의 최적화를 수행할 수 있습니다.

모든 계측 데이터는 OpenTelemetry 표준을 따르므로 다양한 분석 도구와 호환되며, 실시간 모니터링과 알림을 통해 문제를 신속하게 감지하고 대응할 수 있습니다.
