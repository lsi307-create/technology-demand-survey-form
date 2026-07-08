# 교통·도로·재난안전 분야 기술수요조사

교통·도로·재난안전 현장의 기술수요를 취합하기 위한 관리자 기반 설문 시스템 프로토타입입니다. 응답자 화면은 정적 HTML/CSS/JavaScript로 유지하되, 문항 노출/필수 여부/문구/placeholder/순서를 관리자 설정으로 관리합니다. Supabase 연결 전에는 브라우저 저장소와 CSV 다운로드로 테스트할 수 있습니다.

## 관리자 기반 구조

- 관리자 화면에서 문항 노출 ON/OFF, 필수 ON/OFF, 문항명, placeholder, 도움말, 순서를 수정합니다.
- `발행하기`를 누르면 설정이 발행본으로 저장됩니다.
- 같은 브라우저의 관리자/응답자 탭은 문항 수정 즉시 동기화됩니다.
- Supabase 연결 시 발행본은 `survey_configs` 테이블에 저장되고, 응답자 페이지는 최신 공개 설정을 주기적으로 확인해 반영합니다.
- Supabase 연결 전에는 로컬 브라우저 저장소에만 발행되므로 다른 사용자에게 공유되지 않습니다.

## 설문 초안 구성

- 제출 기관 정보: 기관명, 부서명, 작성자, 직위/직책, 연락처, 이메일
- 조사 안내: 붙임자료, 담당/조사, 문의처, 회신처
- 작성 참고 가이드북: 분야 1~4 추진현황, 도입사례, 기대효과를 스와이프 카드로 확인
- 가이드 반영: 각 분야의 `이 분야 내용 반영`을 체크하면 첫 번째 기술수요 초안에 해당 분야 예시가 자동 입력
- 기술수요 개요: 기술수요명, 대분류, 소분류, 해결되었으면 하는 점 중심의 최소 문항
- 관리자 기본 OFF 문항: 추진 배경, 필요 기술/서비스 내용, 보유 데이터 및 연계 가능 자료, 기대효과 및 활용계획, 검토 단계, 수요 유형
- 새 문항: 해결되었으면 하는 점, 기술상담 희망, 실증사업 참여 의향, 도슨트투어 참가 희망
- 현재 수정본 기본 노출 문항: 기관/단체명, 부서명, 담당자명, 연락처, 이메일, 기술수요명, 대분류, 소분류, 해결되었으면 하는 점, 도슨트투어 참가 희망, 참고자료/링크, 기타 의견
- 기타 입력: 참고자료/링크, 기타 의견

## 실행

```bash
npm run dev
```

## 테스트 링크

- 응답자 페이지: `https://lsi307-create.github.io/technology-demand-survey-form/#survey`
- 관리자 페이지: `https://lsi307-create.github.io/technology-demand-survey-form/?view=admin#adminApp`

기본 공개 URL은 응답자 페이지로 동작하며, 관리자 화면은 `?view=admin`을 붙였을 때만 노출됩니다.

## Supabase 저장 설정

`technology_demand_surveys` 테이블을 만든 뒤 `index.html` 또는 배포 템플릿에서 다음 전역 변수를 설정합니다.

```bash
window.SUPABASE_URL = "...";
window.SUPABASE_ANON_KEY = "...";
```

제출 payload는 응답 ID, 제출 시각, 기관 정보, `demands` 배열, 원본 Google Sheet 링크를 포함합니다.

관리자 발행 설정을 원격 반영하려면 `survey_configs` 테이블도 필요합니다.

```sql
create table if not exists survey_configs (
  slug text primary key,
  status text not null default 'published',
  config jsonb not null,
  published_at timestamptz not null default now()
);
```

운영 구조:

1. 관리자가 화면에서 문항을 수정합니다.
2. `발행하기`를 누릅니다.
3. 설정이 `survey_configs.config`에 저장됩니다.
4. 응답자 페이지는 로드 시 `status = published` 설정을 가져오고, 접속 중에도 약 5초 간격으로 발행본 변경을 확인합니다.
5. 따라서 HTML을 다시 수정하지 않아도 다음 접속/새로고침부터 반영되며, 원격 저장소가 연결된 상태에서는 접속 중인 응답자 화면도 갱신됩니다.

## Google Sheet 응답 적재

응답을 Google Sheet에 자동 적재하려면 Apps Script를 웹앱으로 배포한 뒤 `index.html`의 `window.GOOGLE_SHEET_WEBAPP_URL`에 웹앱 URL을 넣습니다.

```js
const SPREADSHEET_ID = '1d4beTVvbY3y-I8OvuNd8IF42wApwvkAXCdLv5LEfzaE';

function doPost(e) {
  const body = JSON.parse(e.postData.contents);
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(body.sheetName || '시트1');
  const rows = body.rows || [];
  if (rows.length) {
    sheet.getRange(sheet.getLastRow() + 1, 1, rows.length, rows[0].length).setValues(rows);
  }
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, appended: rows.length }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

현재 응답 데이터 헤더는 `시트1!A4:AB4`를 기준으로 사용합니다. 5행부터 실제 응답이 쌓입니다.
