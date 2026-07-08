const SHEET_URL = 'https://docs.google.com/spreadsheets/d/1d4beTVvbY3y-I8OvuNd8IF42wApwvkAXCdLv5LEfzaE/edit?gid=0#gid=0';
const GOOGLE_SHEET_WEBAPP_URL = window.GOOGLE_SHEET_WEBAPP_URL || '';
const GOOGLE_SHEET_NAME = '시트1';
const DOCENT_TOUR_URL = 'https://2026itsworldcongress.org/ITS/120002/event/custom/event.do?map=30';
const DOCENT_TOUR_SLOTS = [
  "10/21(수), 10:30~11:20('50)",
  "10/21(수), 15:30~16:20('50)",
  "10/22(목), 10:30~11:20('50)",
  "10/22(목), 15:30~16:20('50)",
];

const SHEET_HEADERS = [
  '응답자ID',
  '제출일시',
  '설문상태',
  '순번',
  '기관/단체명',
  '부서명',
  '담당자명',
  '연락처',
  '이메일',
  '기술수요명',
  '대분류',
  '소분류',
  '해결되었으면 하는 점',
  '도슨트투어 참가 희망',
  '도슨트투어 희망 시간대',
  '참고자료/링크',
  '기타 의견',
  '기술상담 희망',
  '실증사업 참여 의향',
  '적용 대상/현장',
  '현장 문제 및 애로사항',
  '수요 유형',
  '추진 시급성',
  '검토 단계',
  '추진 배경',
  '필요 기술/서비스 내용',
  '보유 데이터 및 연계 가능 자료',
  '기대효과 및 활용계획',
  '제출상태',
];

const DEMAND_TYPES = [
  '미정',
  '신규 R&D 과제',
  '현장 실증/시범사업',
  '기존 기술 고도화',
  '데이터/AI 분석 서비스',
  '장비/시스템 도입',
  '제도/표준/가이드 개선',
];

const RAW_GUIDEBOOK_TEXT = `□ 분야 1. 도로교통운영 및 효율
(AI 영상분석, 스마트교차로, 긴급차량 우선신호, 통합관제 등 교통운영 효율화 및 생활권 안전 강화를 위한 기술) 
 ㅇ 추진현황(국정과제 및 정부 보도자료)
  - (국정과제) [국정23] 국민의 안전과 보편적 삶의 질 제고를 위한 ‘AI 기본사회’ 실현 / [국정57] 교통혁신 인프라 확충
  - (대표성과 및 배경) 단순한 교통흐름 개선을 넘어, 차량 중심에서 보행자 중심의 안전한 환경으로 패러다임이 전환되고 있음. 국민의 안전권 보장과 사고 최소화를 목표로 보행환경 개선 등 교통안전 인프라 확충이 핵심 성과로 추진
  - (보도자료) 국토교통부 「2025년 국가보행안전 및 편의증진 실행계획」('25.02), 「2030 모빌리티 혁신성장 로드맵」('26.02)
  → AI 기술을 도로교통 인프라에 접목하여 대중교통의 정시성을 확보하고, 어린이·고령자 등 보행약자의 안전을 지키는 생활권 중심의 지능형 관제 및 첨단 인프라 확충이 주요 정책 과제로 대두됨

 ㅇ 도입사례
  - (지자체 현안 ① : 교차로 상습 정체 및 신호 운영 비효율) AI 기반 스마트교차로 및 교통신호 최적화 : 교통량, 대기행렬, 보행자 수 등을 AI 영상분석으로 파악하여 시간대별 교통 패턴에 맞게 신호주기를 최적화
    * 부산시, AI 스마트 교통체계 구축…혼잡 해소 최적 신호 찾는다(26.03.)
   ** 인천시, '지능형 교통체계(ITS) 기반 스마트빌리지 사업' 큰 효과(26.02.)
  - (지자체 현안 ② : 긴급차량 골든타임 확보 한계) 긴급차량 우선신호 서비스 : 소방차·구급차 등 긴급차량 접근 시 신호 우선권을 부여하여 이동시간을 단축 
    * 경기도, 긴급차량 우선신호 인천까지 확대…수도권 골든타임 잇는다(26.04.)
   ** 대전시, 전국 첫 긴급차량 접근 정보 내비로 제공(26.04.)
  - (지자체 현안 ③ : CCTV 관제 인력 부족 및 수동 대응의 한계)  AI 영상분석 기반 지능형 통합관제 : 교통사고, 보행자 위험, 군중 밀집 등 이상 상황을 AI가 자동으로 감지하여 관제 인력의 한계를 극복하고 신속한 초동 대응 지원 
    * 대도시권의 교통 혼잡을 체계적으로 완화하기 위한 '혼잡도로 개선계획'('26.2 수립)과 연계하여, 시간대별 신호 최적화 및 AI 이상상황 자동 감지 체계 확충
   ** CCTV 속 “살려주세요” 비명… AI가 듣고 경찰에 실시간 공유(26.02.)

 ㅇ 기대효과
  - (생활권 교통안전 확보) 지자체별 맞춤형 생활권 보행환경 정비 예산 지원과 법적 보호구역 확대를 통해 국민이 일상에서 체감할 수 있는 실질적인 교통사고 인명피해 감소 도모
  - (도심 교통흐름 최적화) 지능형 관제로 혼잡도를 낮추고 쾌적한 도로 환경을 제공하여 지자체의 행정 효율 극대화

□ 분야 2. 도로교통안전 및 재난
(침수·범람 감지, 블랙아이스 검지, 재난 예·경보, AI 기반 재난관제 등 기후·재난 대응 중심의 도로·교통 안전 기술수요 조사)
 ㅇ 추진현황(국정과제 및 정부 보도자료)
  - (국정과제) [국정72] 국민안전 보장을 위한 재난안전관리체계 확립 / [국정73] 재난 피해 최소화
  - (대표성과 및 배경) 국지적 재난(침수, 폭우 등)과 더불어 최근 대두된 도심 지반침하(싱크홀) 등 새로운 위협에 대해 예방 중심의 안전관리체계 구축이 최우선 과제로 부상함. 이에 정부는 지반침하를 사회재난 유형에 새롭게 편입하고, 범정부 차원의 첨단 재난 모니터링 체계를 가동 중
  - (보도자료) 행정안전부·국토교통부 「겨울철 도로 결빙 교통사고 원인분석 및 인명피해 방지대책」
  → 기후위기로 인한 블랙아이스, 침수 등 국지적 재난사고 위험이 급증함에 따라, 단순히 피해를 복구하는 것을 넘어 초단기 위험정보 예측부터 사전 전파, 인프라 감응 제어까지 아우르는 'AI 기반 지능형 재난 모니터링 체계 고도화'가 집중 추진됨

 ㅇ 도입사례
  - (지자체 현안 ① : 집중호우로 인한 지하차도 침수 및 하천 범람) 침수·범람 AI 감지 및 예·경보 서비스: CCTV, 수위계, 강우량 데이터를 연계하여 도로 침수와 하천 범람 위험을 조기 감지하고 사전 경보 발송
    * (정책) 지능형 AI CCTV 약 1,000대를 시범 도입('25.12.)하여 홍수 시 하천변 사람·차량을 자동 인식하고 신속한 대피 지원
   ** (기술) 지자체 CCTV 관제센터 영상정보를 활용한 AI 침수탐지모델 개발 및 통합관제 연계
  - (지자체 현안 ② : 겨울철 결빙 사고 및 블랙아이스 위험)  블랙아이스 검지 및 도로위험 알림 서비스 : 노면 온도, 기상정보, 차량 센서 등을 활용하여 결빙 위험구간을 감지하고 VMS 전광판 등으로 신속 전파
    * 도로기상 관측망 확충 및 30분 이후의 초단기 강수예측 AI 모델을 결합하여 살얼음 위험 예측 정확도 획기적 향상('25.02.)
   ** 결빙 가능성(노면온도 -2℃ 이하 등)이 높은 기상 조건 시, 시각적으로 색상과 문양이 변하는 감응형 노면표시 기술 도입
  - (지자체 현안 ③ : 포트홀, 균열, 낙하물 신고 지연 및 재난 초동 대응 지연) AI 도로위험 자동탐지 및 재난안전 통합관제 : 버스·청소차 등에 설치된 센서로 도로 위험을 자동 탐지하고, 분산된 재난 데이터를 통합하여 위험지역을 집중 모니터링
    * (정책) 지반침하(싱크홀)를 사회재난으로 신설('25.10.)하고, 전국 고위험 현장 지반탐사 및 지하안전정보시스템(JIS) 대국민 개방('25.06.)
   ** (기술) 민관 협력을 통해 도로 파손 및 낙하물을 실시간으로 인지·전파하여 2차 사고를 방지하는 자율형 모니터링 인프라 구축

 ㅇ 기대효과
  - (선제적 재난 골든타임 확보 및 대형사고 예방) 초단기 AI 예측과 지능형 CCTV 모니터링 연동으로 결빙, 침수 위험을 사전에 차단하여 대형 사고 예방
  - (도로·안전 관리의 디지털 전환 및 행정 효율성 제고) 인력의 수동 순찰 및 신고에 의존하던 도로 파손, 낙하물 탐지, 지반침하(싱크홀) 관리를 AI와 데이터 연계로 자동화하여 빠르고 정확한 보수 조치 및 행정 효율 극대화

□ 분야 3. 생활밀착형 교통서비스_민생교통
(공영주차 및 주차정보 연계, 불법주정차 관리, DRT, 교통약자 이동지원 등 생활형 교통문제 해결을 위한 기술·서비스 수요 조사)
 ㅇ 추진현황(국정과제 및 정부 보도자료)
  - (국정과제) [국정60] 국민 생활비 부담 경감 / [국정57] 교통혁신 인프라 확충
  - (대표성과 및 배경) 대국민 이동 편의 증진과 생활비 부담 경감이 가장 큰 화두. 대중교통비 환급 체계 확대와 대중교통 취약지구의 맞춤형 서비스(DRT) 법제화를 통해 괄목할만한 민생 혁신 실적을 거두고 있음
  - (보도자료) 국토교통부 「2030 모빌리티 혁신성장 로드맵」
  → 국민의 보편적 기본 이동권을 보장하고 주차·교통 사각지대 문제를 해소하기 위해, 스마트 주차 인프라 및 수요응답형 교통체계(DRT), 통합교통서비스 등 민생 밀착형 서비스 전폭 지원

 ㅇ 도입사례
  - (지자체 현안 ① : 교통비 부담 증가 및 대중교통 활성화 한계) 대중교통비 지원 인프라 및 K-MaaS 고도화
    * (정책) 전국 대중교통비 부담 완화를 위해 무제한 정액패스인 '모두의카드'를 229개 전 기초 지자체로 전면 확대하여 가입자 500만 명 돌파 실적 달성('26.04.)
   ** (기술) 모두의카드 인프라와 연계하여 기차, 공유차, 전동킥보드(PM) 등 다양한 이동수단을 한 번에 예약·결제하는 스마트 모빌리티 결제·공유 플랫폼(MaaS) 확장 적용
  - (대지자체 현안 ② : 농어촌·신도시 외곽 등 대중교통 소외지역 이동권 단절) 수요응답형 교통(DRT) 및 필수노선 지원
    * (정책) 수익성이 없는 시외·고속버스를 '필수노선'으로 국가가 지정·지원할 수 있도록 제도를 도입한 「여객자동차운수사업법」 개정안 국회 통과('26.05.)
   ** (기술) 대중교통 사각지대에 수요응답형 교통(DRT) 활성화를 적극 지원하고, 기존 대중교통(버스, 택시 등)과 DRT를 실시간 수요에 맞게 연계하는 혼합배차(Open Fleet System) 운영 기술 도입
  - (지자체 현안 ③ : 불법 주정차 민원 및 상업지역 도심 주차난) 스마트 주차로봇 및 AI 주차 통합관리
    * (정책) 기계식주차장치 기준을 주차로봇의 특성(차량 폭·너비 인식 등)에 맞게 개편하고, 공동주택 내 오토발렛 주차장치 명문화 등 관련 제도 정비
   ** (기술) AI 영상분석을 통해 불법 주정차를 자동 감지하고, 지역 내 유휴 주차면을 개방·공유하는 지역형 주차공유 플랫폼 구축
 ㅇ 기대효과
  - (서민 교통비 경감 및 혜택 체감) 모두의카드 인프라와 MaaS(통합교통서비스)를 융합하여 도심형/지역형 대중교통 서비스 활용도를 극대화
  - (교통 사각지대 전면 해소) 필수노선 제도와 AI 혼합배차 DRT 시스템을 연동하여 교통약자와 소외지역 주민의 기본 이동권을 완벽하게 보장

□ 분야 4. 미래 모빌리티
(자율주행·C-ITS, V2X, 디지털트윈 기반 교통운영 등 미래 모빌리티 확산 및 실증 기반 마련을 위한 기술수요 조사)
 ㅇ 추진현황(국정과제 및 정부 보도자료)
  - (국정과제) [국정31] 미래 모빌리티와 ‘K-AI 시티’ 실현 (2027년 완전자율주행 상용화)
  - (대표성과 및 배경) 기존 규칙 기반(Rule-based)의 분절형 자율주행 기술 한계를 넘어, 글로벌 빅테크 기업들이 주도하는 '사람처럼 판단하는 E2E(End-to-End) AI 모델' 기술 확보가 시급해짐. 이를 극복하기 위해 국가 차원의 대규모 실증 무대 개방 및 고성능 디지털 데이터 인프라 조성이 핵심 정책으로 추진 중
  - (보도자료)  국토교통부 「자율주행 실증도시 추진방안」, 「2030 모빌리티 혁신성장 로드맵」
  → 글로벌 수준의 차세대 E2E 자율주행 모델 확보와 첨단 모빌리티 생태계 구축을 위해, 규제가 전면 면제되는 '도시 단위의 대규모 실증 무대' 마련과 '디지털 트윈 기반의 가상 검증 인프라' 조성이 필수 과제로 요구

 ㅇ 도입사례
  - (지자체 현안 ① : 자율주행 실증 인프라 및 대규모 데이터 부족)  도시 단위 대규모 자율주행 실증도시 조성
    * (정책) 광주광역시 전역을 시범운행지구로 일괄 지정하고 규제 없는 자율주행 샌드박스로 운영하여, 200대 이상의 무인 차량이 도심 실도로를 주행하는 거대한 테스트베드 착수('26.04.)
   ** (기술) 국가 AI 데이터센터의 고성능 GPU 인프라와 연계하여 대규모 주행 데이터를 수집·학습하는 데이터 파이프라인(Data Flywheel) 및 E2E AI 기반 시스템 구축
  - (지자체 현안 ② : 차량·인프라 간 실시간 정보 연계 부족)  V2X 기반 도로·교통정보 실시간 연계 서비스
    *  (정책) 자율주행차-클라우드-관제센터 간 24시간 끊김 없는 실증을 지원하기 위해 운행·관제·정비를 아우르는 통합 관리체계 및 사이버보안 기준 마련
   ** (기술) 교차로 신호정보, 돌발상황, 보행자 위험 등의 현장 도로 데이터를 자율차량과 지자체 인프라 간 지연 없이 실시간(V2X)으로 연계·공유
  - (지자체 현안 ③ : 신기술 및 교통정책 사전 검증 기반 부족) 디지털 트윈 기반 가상시험환경(시뮬레이터) 구축
    * (정책) 전국의 지형·건물·도로 등을 고정밀 3차원 공간정보로 구축하고, 자율주행차 및 UAM 운항 지원을 위한 입체격자체계 국가 표준화 추진
   ** (기술) 3차원 정밀도로망, 교통량, 신호체계 등을 가상공간에 정밀하게 구현하여, 폭우나 안개 등 돌발 상황(Edge case)이나 신기술 도입에 따른 정책 효과를 실제 도로 주행 전 사전에 안전하게 분석·검증
 ㅇ 기대효과
  - (글로벌 신성장 동력 및 3대 강국 도약) 제약 없는 24시간 실증 체계 및 주행 데이터 축적을 통해 E2E AI 자율주행 기술의 세계적 주도권 탈환.
  - (테스트베드를 통한 비용 절감 및 신뢰성 확보) 고정밀 디지털 트윈과 V2X 통신 기반을 통해 지자체의 현장 모빌리티 실증에 따르는 막대한 비용과 안전사고 위험 최소화`;

function normalizeLine(line) {
  return line.trim().replace(/^[-*]+\s*/, '').trim();
}

function parseGuidebookSection(section, index) {
  const lines = section.trim().split(/\r?\n/);
  const title = lines[0].replace(/^□\s*/, '').trim();
  const subtitle = lines[1]?.replace(/^\(/, '').replace(/\)\s*$/, '').trim() || '';
  const policy = [];
  const cases = [];
  const effects = [];
  let callout = '';
  let mode = '';
  let currentCase = null;

  for (const rawLine of lines.slice(2)) {
    const line = rawLine.trim();
    if (!line) continue;
    if (line.includes('추진현황')) {
      mode = 'policy';
      continue;
    }
    if (line.includes('도입사례')) {
      mode = 'cases';
      continue;
    }
    if (line.includes('기대효과')) {
      mode = 'effects';
      continue;
    }
    if (line.startsWith('→')) {
      callout = line.replace(/^→\s*/, '');
      continue;
    }

    const bullet = line.match(/^-\s*\(([^)]+)\)\s*(.+)$/);
    if (mode === 'policy' && bullet) {
      policy.push([bullet[1], bullet[2]]);
      continue;
    }
    if (mode === 'cases' && bullet) {
      currentCase = { issue: bullet[1], title: bullet[2], policy: '', tech: '' };
      cases.push(currentCase);
      continue;
    }
    if (mode === 'effects' && bullet) {
      effects.push([bullet[1], bullet[2]]);
      continue;
    }
    if (mode === 'cases' && currentCase && line.startsWith('**')) {
      currentCase.tech = normalizeLine(line).replace(/^\(기술\)\s*/, '');
      continue;
    }
    if (mode === 'cases' && currentCase && line.startsWith('*')) {
      currentCase.policy = normalizeLine(line).replace(/^\(정책\)\s*/, '');
    }
  }

  const firstCase = cases[0] || { title: title, issue: '', policy: '', tech: '' };
  return {
    id: `field-${index + 1}`,
    category: title,
    title,
    subtitle,
    policy,
    callout,
    cases,
    effects,
    draft: {
      title: firstCase.title.split(':')[0].trim(),
      type: index === 0 || index === 2 ? '데이터/AI 분석 서비스' : '현장 실증/시범사업',
      urgency: '상: 2026년 즉시 추진 필요',
      site: firstCase.issue.replace(/^지자체 현안 \d+\s*:\s*/, '').replace(/^대지자체 현안 \d+\s*:\s*/, ''),
      readiness: '현장 문제 확인',
      background: [...policy.map(([label, value]) => `[${label}] ${value}`), callout].filter(Boolean).join('\n'),
      problem: firstCase.issue,
      solution: firstCase.title,
      data: firstCase.tech,
      expected: effects.map(([label, value]) => `[${label}] ${value}`).join('\n'),
    },
  };
}

const GUIDEBOOKS = RAW_GUIDEBOOK_TEXT
  .trim()
  .split(/\n(?=□ 분야 \d\.)/)
  .map(parseGuidebookSection);

const CATEGORY_META = [
  {
    category: '분야 1. 도로교통운영 및 효율',
    subcategories: ['AI 영상분석', '스마트교차로', '긴급차량 우선신호', '통합관제', 'ITS 설비 원격관리', 'AI 관제센터', '도로시설 상태 모니터링', '기타'],
    itsTasks: ['② 실시간 정보연계 및 유지관리 고도화', '③ AI 기반 지능형 센터 운영체계'],
    keywords: '신호, 교차로, 관제, 운영, 혼잡',
  },
  {
    category: '분야 2. 도로교통안전 및 재난',
    subcategories: ['침수·범람 감지', '블랙아이스 검지', '재난 예·경보', 'AI 기반 재난관제', '낙하물·역주행 탐지', '산사태·낙석 예측', 'AI 사고검지', '기타'],
    itsTasks: ['① AI 기반 다기능 위험상황 관리', '⑧ 스마트 교통복지 구현'],
    keywords: '사고, 재난, 침수, 낙석, 위험, 응급',
  },
  {
    category: '분야 3. 생활밀착형 교통서비스_민생교통',
    subcategories: ['공영주차 및 주차정보 연계', '불법주정차 관리', 'DRT', '교통약자 이동지원', 'MaaS', '수요응답형 버스', '스마트 교통복지', '기타'],
    itsTasks: ['⑦ 이용자 맞춤형 통합 모빌리티 서비스', '⑧ 스마트 교통복지 구현'],
    keywords: 'MaaS, DRT, 교통약자, 대중교통, 이동권',
  },
  {
    category: '분야 4. 모빌리티',
    guideCategory: '분야 4. 미래 모빌리티',
    subcategories: ['자율주행·C-ITS', 'V2X', '디지털트윈 기반 교통운영', 'HD맵·공간정보', '도로 BIM', '민간 플랫폼·생성형 AI 연계', '기타'],
    itsTasks: ['④ 첨단화된 지능형 도로 구축', '⑤ 정밀 데이터 기반 디지털 도로 운영(DX)', '⑥ 민간 혁신기술 기반 교통체계 AX'],
    keywords: 'AI, 디지털트윈, V2X, 자율주행, C-ITS, DX, AX',
  },
  {
    category: '기타',
    subcategories: ['기타'],
  },
];

const CATEGORIES = CATEGORY_META.map((item) => item.category);
const SUBCATEGORIES = Object.fromEntries(CATEGORY_META.map((item) => [item.category, item.subcategories]));

const URGENCY = [
  '미정',
  '상: 2026년 즉시 추진 필요',
  '중: 1~2년 내 추진 필요',
  '하: 중장기 검토 가능',
];

const READINESS = [
  '미정',
  '아이디어 단계',
  '현장 문제 확인',
  '기술/솔루션 탐색 중',
  '실증 대상지 확보 가능',
  '예산/사업화 검토 중',
];

const PARTICIPATION_OPTIONS = ['미정', '희망', '검토 가능', '희망하지 않음'];

const DEFAULT_SURVEY_CONFIG = {
  status: '공개',
  publicUrl: 'https://lsi307-create.github.io/technology-demand-survey-form/',
  notice: '응답 문항을 최소화했습니다. 관리자 화면에서 문항 노출/필수 여부를 즉시 조정할 수 있습니다.',
  questions: [
    { id: 'org', group: 'org', label: '기관/단체명', placeholder: '예: OO시청, OO공사, OO협회', type: 'text', required: true, visible: true, help: '응답 기관 또는 단체명을 입력합니다.' },
    { id: 'department', group: 'org', label: '부서명', placeholder: '예: 교통정책과, 스마트도시과', type: 'text', required: true, visible: true, help: '후속 연락 가능한 부서명을 입력합니다.' },
    { id: 'writer', group: 'org', label: '담당자명', placeholder: '', type: 'text', required: true, visible: true, help: '응답 작성 담당자명입니다.' },
    { id: 'position', group: 'org', label: '직위', placeholder: '', type: 'text', required: false, visible: false, help: '선택 입력입니다.' },
    { id: 'phone', group: 'org', label: '연락처', placeholder: '010-0000-0000', type: 'tel', required: true, visible: true, help: '기술상담 또는 후속 확인 연락처입니다.' },
    { id: 'email', group: 'org', label: '이메일', placeholder: 'name@example.go.kr', type: 'email', required: true, visible: true, help: '응답 확인 및 후속 안내용 이메일입니다.' },
    { id: 'title', group: 'demand', label: '기술수요명', placeholder: '예: V2X 기반 교차로 위험정보 실시간 연계 서비스', type: 'text', required: false, visible: true, help: '간단한 제목이 있으면 입력합니다.' },
    { id: 'category', group: 'demand', label: '대분류', placeholder: '', type: 'category', required: true, visible: true, help: '분야 1~4 또는 기타 중 선택합니다.' },
    { id: 'subcategory', group: 'demand', label: '소분류', placeholder: '대분류에 따른 아이템을 선택해 주세요', type: 'subcategory', required: false, visible: true, help: '모르면 기타 또는 미선택 상태로 둘 수 있습니다.' },
    { id: 'site', group: 'demand', label: '적용 대상/현장', placeholder: '예: 주요 교차로, 지하차도, 공영주차장, 자율주행 시범지구', type: 'text', required: false, visible: false, help: '기술이 적용될 현장을 적습니다.' },
    { id: 'problem', group: 'demand', label: '현장 문제 및 애로사항', placeholder: '예: 상습 정체, 침수 위험, 교통약자 이동 불편, 실시간 정보 연계 부족 등', type: 'textarea', required: false, visible: false, help: '현재 가장 불편하거나 해결이 필요한 문제만 적어도 됩니다.' },
    { id: 'desiredOutcome', group: 'demand', label: '해결되었으면 하는 점', placeholder: '예: 위험상황을 빠르게 감지하고 담당자에게 자동 알림이 가면 좋겠습니다.', type: 'textarea', required: false, visible: true, help: '기술명보다 원하는 개선 결과를 자유롭게 적습니다.' },
    { id: 'consultation', group: 'demand', label: '기술상담 희망', placeholder: '', type: 'select', options: PARTICIPATION_OPTIONS, required: false, visible: false, help: '후속 기술상담 희망 여부입니다.' },
    { id: 'pilotIntent', group: 'demand', label: '실증사업 참여 의향', placeholder: '', type: 'select', options: PARTICIPATION_OPTIONS, required: false, visible: false, help: '향후 실증사업 연계 검토용입니다.' },
    { id: 'docentTour', group: 'demand', label: '도슨트투어 참가 희망', placeholder: '', type: 'select', options: PARTICIPATION_OPTIONS, required: true, visible: true, help: '도슨트투어 참여 수요 파악용입니다.' },
    { id: 'type', group: 'demand', label: '수요 유형', placeholder: '', type: 'select', options: DEMAND_TYPES, required: false, visible: false, help: '관리자에서 필요 시 ON 처리합니다.' },
    { id: 'urgency', group: 'demand', label: '추진 시급성', placeholder: '', type: 'select', options: URGENCY, required: false, visible: false, help: '선택 입력입니다.' },
    { id: 'readiness', group: 'demand', label: '검토 단계', placeholder: '', type: 'select', options: READINESS, required: false, visible: false, help: '응답 부담을 줄이기 위해 기본 OFF입니다.' },
    { id: 'background', group: 'demand', label: '추진 배경', placeholder: '관련 정책, 보도자료, 현장 여건 등', type: 'textarea', required: false, visible: false, help: '기본 OFF. 필요할 때 관리자에서 켭니다.' },
    { id: 'solution', group: 'demand', label: '필요 기술/서비스 내용', placeholder: '예: AI 감지, V2X 정보연계, 디지털 트윈 검증 등', type: 'textarea', required: false, visible: false, help: '기본 OFF. 기술명이 명확한 조사에서만 사용합니다.' },
    { id: 'data', group: 'demand', label: '보유 데이터 및 연계 가능 자료', placeholder: '예: CCTV, 교통량, 신호정보, 민원 데이터 등', type: 'textarea', required: false, visible: false, help: '기본 OFF. 데이터 연계 조사 시 사용합니다.' },
    { id: 'expected', group: 'demand', label: '기대효과 및 활용계획', placeholder: '예: 사고 예방, 행정 효율화, 실증 비용 절감 등', type: 'textarea', required: false, visible: false, help: '기본 OFF. 응답 부담을 줄이기 위해 숨깁니다.' },
    { id: 'attachments', group: 'demand', label: '참고자료/링크', placeholder: '기획서, 사진, 보고서, 기사, 기존 시스템 링크 등이 있으면 적어 주세요.', type: 'textarea', rows: 3, required: false, visible: true, help: '선택 입력입니다.' },
    { id: 'note', group: 'demand', label: '기타 의견', placeholder: '추가로 전달할 사항을 자유롭게 적어 주세요.', type: 'textarea', rows: 3, required: false, visible: true, help: '선택 입력입니다.' },
  ],
};

const STORAGE_KEY = 'technology-demand-survey-admin-config-v3';
const PUBLISHED_CONFIG_KEY = 'technology-demand-survey-published-config-v3';
const CONFIG_SYNC_CHANNEL = 'technology-demand-survey-config-sync-v3';
const CONFIG_SLUG = '2026-traffic-road-safety-demand';
let surveyConfig = loadSurveyConfig();
let configSource = '로컬 초안';
let configChannel = null;

let demandCount = 0;

function viewMode() {
  const params = new URLSearchParams(window.location.search);
  return params.get('view') === 'admin' ? 'admin' : 'respondent';
}

function applyViewMode() {
  document.body.dataset.view = viewMode();
}

function input(name, label, placeholder = '', type = 'text', required = true) {
  return `
    <label class="field">
      <span>${label}${required ? '<b>*</b>' : ''}</span>
      <input name="${name}" type="${type}" placeholder="${placeholder}" ${required ? 'required' : ''}/>
    </label>
  `;
}

function select(name, label, values, required = true, selectedValue = '') {
  return `
    <label class="field">
      <span>${label}${required ? '<b>*</b>' : ''}</span>
      <select name="${name}" ${required ? 'required' : ''}>
        <option value="">선택해 주세요</option>
        ${values.map((value) => `<option ${value === selectedValue ? 'selected' : ''}>${value}</option>`).join('')}
      </select>
    </label>
  `;
}

function subcategorySelect(index, category = '', selectedValue = '', question = questionById('subcategory')) {
  const values = SUBCATEGORIES[category] || [];
  return `
    <label class="field">
      <span>${question?.label || '소분류'}${question?.required ? '<b>*</b>' : ''}</span>
      <select name="subcategory-${index}" ${question?.required ? 'required' : ''} ${values.length ? '' : 'disabled'}>
        <option value="">${values.length ? (question?.placeholder || '대분류에 따른 아이템을 선택해 주세요') : '대분류를 먼저 선택해 주세요'}</option>
        ${values.map((value) => `<option ${value === selectedValue ? 'selected' : ''}>${value}</option>`).join('')}
      </select>
    </label>
  `;
}

function textarea(name, label, placeholder = '', required = false, rows = 4) {
  return `
    <label class="field full">
      <span>${label}${required ? '<b>*</b>' : ''}</span>
      <textarea name="${name}" rows="${rows}" placeholder="${placeholder}" ${required ? 'required' : ''}></textarea>
    </label>
  `;
}

function questionFieldName(question, index = null) {
  return question.group === 'demand' ? `${question.id}-${index}` : question.id;
}

function renderQuestionInput(question, index = null) {
  const name = questionFieldName(question, index);
  if (question.type === 'category') return select(name, question.label, CATEGORIES, question.required);
  if (question.type === 'subcategory') return subcategorySelect(index, '', '', question);
  if (question.type === 'select') return select(name, question.label, question.options || ['미정'], question.required, question.defaultValue || '미정');
  if (question.type === 'textarea') return textarea(name, question.label, question.placeholder, question.required, question.rows || 4);
  return input(name, question.label, question.placeholder, question.type || 'text', question.required);
}

function renderDocentTourDetails(index) {
  return `
    <section class="docent-tour-panel" data-docent-panel="${index}" hidden>
      <div class="docent-tour-copy">
        <span class="eyebrow">2026 강릉 ITS 세계총회 안내</span>
        <h4>2026년 10월 19일(월) ~ 23일(금)</h4>
        <p>강릉 올림픽 파크</p>
        <a href="${DOCENT_TOUR_URL}" target="_blank" rel="noopener">안내페이지 열기</a>
      </div>
      <label class="field">
        <span>희망하는 시간대<b>*</b></span>
        <select name="docentTourSlot-${index}" data-docent-slot="${index}" disabled>
          <option value="">시간대를 선택해 주세요</option>
          ${DOCENT_TOUR_SLOTS.map((slot) => `<option>${slot}</option>`).join('')}
        </select>
      </label>
    </section>
  `;
}

function renderOrgFields() {
  document.querySelector('#orgFields').innerHTML = visibleQuestions('org').map((question) => renderQuestionInput(question)).join('');
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[char]);
}

function cloneConfig(config) {
  return JSON.parse(JSON.stringify(config));
}

function mergeQuestions(savedQuestions = []) {
  const savedById = new Map(savedQuestions.map((question) => [question.id, question]));
  const merged = DEFAULT_SURVEY_CONFIG.questions.map((question) => ({
    ...question,
    ...(savedById.get(question.id) || {}),
  }));
  const knownIds = new Set(merged.map((question) => question.id));
  return [
    ...merged,
    ...savedQuestions.filter((question) => !knownIds.has(question.id)),
  ];
}

function loadSurveyConfig() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    if (!saved) return cloneConfig(DEFAULT_SURVEY_CONFIG);
    return {
      ...cloneConfig(DEFAULT_SURVEY_CONFIG),
      ...saved,
      questions: mergeQuestions(saved.questions),
    };
  } catch {
    return cloneConfig(DEFAULT_SURVEY_CONFIG);
  }
}

function supabaseHeaders(extra = {}) {
  const key = window.SUPABASE_ANON_KEY;
  return {
    apikey: key,
    Authorization: `Bearer ${key}`,
    'Content-Type': 'application/json',
    ...extra,
  };
}

function hasRemoteConfigStore() {
  return Boolean(window.SUPABASE_URL && window.SUPABASE_ANON_KEY);
}

async function fetchPublishedConfig() {
  if (hasRemoteConfigStore()) {
    const url = `${window.SUPABASE_URL}/rest/v1/survey_configs?slug=eq.${encodeURIComponent(CONFIG_SLUG)}&status=eq.published&select=config,published_at&order=published_at.desc&limit=1`;
    const res = await fetch(url, { headers: supabaseHeaders() });
    if (!res.ok) throw new Error(await res.text());
    const [row] = await res.json();
    if (row?.config) {
      configSource = `원격 발행본 ${row.published_at ? `(${new Date(row.published_at).toLocaleString('ko-KR')})` : ''}`;
      return row.config;
    }
  }

  const localPublished = JSON.parse(localStorage.getItem(PUBLISHED_CONFIG_KEY) || 'null');
  if (localPublished) {
    configSource = '로컬 발행본';
    return localPublished;
  }

  configSource = '기본 템플릿';
  return null;
}

async function loadPublishedConfig() {
  try {
    const published = await fetchPublishedConfig();
    if (published) {
      surveyConfig = {
        ...cloneConfig(DEFAULT_SURVEY_CONFIG),
        ...published,
        questions: mergeQuestions(published.questions),
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(surveyConfig));
    }
  } catch (error) {
    configSource = '원격 설정 불러오기 실패 - 로컬 초안 사용';
    console.warn('Published survey config load failed:', error);
  }
}

async function publishSurveyConfig() {
  const payload = {
    ...surveyConfig,
    publishedAt: new Date().toISOString(),
  };

  if (hasRemoteConfigStore()) {
    const res = await fetch(`${window.SUPABASE_URL}/rest/v1/survey_configs`, {
      method: 'POST',
      headers: supabaseHeaders({ Prefer: 'resolution=merge-duplicates,return=minimal' }),
      body: JSON.stringify({
        slug: CONFIG_SLUG,
        status: 'published',
        config: payload,
        published_at: payload.publishedAt,
      }),
    });
    if (!res.ok) throw new Error(await res.text());
    configSource = '원격 발행본';
  } else {
    localStorage.setItem(PUBLISHED_CONFIG_KEY, JSON.stringify(payload));
    configSource = '로컬 발행본';
  }

  notifyConfigChanged('published');
  show(hasRemoteConfigStore()
    ? '설문 설정이 원격 DB에 발행되었습니다. 응답자 페이지는 최신 설정을 주기적으로 확인합니다.'
    : '로컬 발행본으로 저장되었습니다. 실제 운영 반영은 Supabase 연결 후 원격 발행을 사용합니다.', true);
  renderAll();
}

function persistSurveyConfig(source = '로컬 초안') {
  configSource = source;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(surveyConfig));
  notifyConfigChanged('draft');
}

function applyIncomingConfig(config, source = '실시간 반영') {
  if (!config) return;
  surveyConfig = {
    ...cloneConfig(DEFAULT_SURVEY_CONFIG),
    ...config,
    questions: mergeQuestions(config.questions),
  };
  configSource = source;
  renderAll();
}

function notifyConfigChanged(reason) {
  const payload = {
    reason,
    config: surveyConfig,
    updatedAt: new Date().toISOString(),
  };
  try {
    configChannel?.postMessage(payload);
  } catch {
    // BroadcastChannel is optional; storage events still cover other tabs.
  }
}

function setupConfigRealtimeSync() {
  if ('BroadcastChannel' in window) {
    configChannel = new BroadcastChannel(CONFIG_SYNC_CHANNEL);
    configChannel.addEventListener('message', (event) => {
      if (event.data?.config) applyIncomingConfig(event.data.config, '실시간 관리자 수정');
    });
  }

  window.addEventListener('storage', (event) => {
    if (event.key === STORAGE_KEY && event.newValue) {
      applyIncomingConfig(JSON.parse(event.newValue), '실시간 관리자 수정');
    }
    if (event.key === PUBLISHED_CONFIG_KEY && event.newValue) {
      applyIncomingConfig(JSON.parse(event.newValue), '로컬 발행본');
    }
    if (event.key === PUBLISHED_CONFIG_KEY && !event.newValue) {
      applyIncomingConfig(DEFAULT_SURVEY_CONFIG, '기본 템플릿');
    }
  });
}

function setupRemotePublishedSync() {
  if (!hasRemoteConfigStore()) return;
  window.setInterval(async () => {
    try {
      const before = JSON.stringify(surveyConfig);
      const published = await fetchPublishedConfig();
      if (published && JSON.stringify(published) !== before) {
        applyIncomingConfig(published, configSource || '원격 발행본');
      }
    } catch (error) {
      console.warn('Published survey config sync failed:', error);
    }
  }, 5000);
}

function resetSurveyConfig() {
  surveyConfig = cloneConfig(DEFAULT_SURVEY_CONFIG);
  localStorage.removeItem(PUBLISHED_CONFIG_KEY);
  persistSurveyConfig('기본 템플릿');
  renderAll();
  show('관리자 설정이 기본값으로 복원되었습니다.', true);
}

function visibleQuestions(group) {
  return surveyConfig.questions.filter((question) => question.group === group && question.visible);
}

function allQuestions(group) {
  return surveyConfig.questions.filter((question) => question.group === group);
}

function questionById(id) {
  return surveyConfig.questions.find((question) => question.id === id);
}

function updateQuestion(id, patch) {
  surveyConfig.questions = surveyConfig.questions.map((question) => (
    question.id === id ? { ...question, ...patch } : question
  ));
  persistSurveyConfig();
  renderAll();
}

function moveQuestion(id, direction) {
  const index = surveyConfig.questions.findIndex((question) => question.id === id);
  if (index < 0) return;
  const question = surveyConfig.questions[index];
  const swapIndex = direction < 0
    ? [...surveyConfig.questions].slice(0, index).findLastIndex((item) => item.group === question.group)
    : surveyConfig.questions.findIndex((item, itemIndex) => itemIndex > index && item.group === question.group);
  if (swapIndex < 0) return;
  const next = [...surveyConfig.questions];
  [next[index], next[swapIndex]] = [next[swapIndex], next[index]];
  surveyConfig.questions = next;
  persistSurveyConfig();
  renderAll();
}

function reorderQuestion(sourceId, targetId) {
  if (!sourceId || !targetId || sourceId === targetId) return;
  const source = questionById(sourceId);
  const target = questionById(targetId);
  if (!source || !target || source.group !== target.group) return;
  const next = surveyConfig.questions.filter((question) => question.id !== sourceId);
  const targetIndex = next.findIndex((question) => question.id === targetId);
  next.splice(targetIndex, 0, source);
  surveyConfig.questions = next;
  persistSurveyConfig();
  renderAll();
}

function renderGuideCard(guide, index) {
  return `
    <article class="guide-slide" data-guide-index="${index}" aria-label="${escapeHtml(guide.title)}">
      <div class="guidebook-head">
        <div>
          <p class="guide-label">작성 참고 가이드북 ${index + 1} / ${GUIDEBOOKS.length}</p>
          <h2>${escapeHtml(guide.title)}</h2>
          <p>${escapeHtml(guide.subtitle)}</p>
        </div>
        <div class="guide-actions">
          <label class="guide-apply">
            <input type="checkbox" name="guideApply" value="${escapeHtml(guide.id)}" data-guide-apply="${escapeHtml(guide.id)}" />
            <span>이 분야 (작성 예시) 불러오기</span>
          </label>
          <a class="secondary link" href="#survey">설문 작성으로 이동</a>
        </div>
      </div>

      <div class="guide-layout">
        <section class="guide-panel">
          <h3>추진현황</h3>
          <dl>
            ${guide.policy.map(([term, desc]) => `<dt>${escapeHtml(term)}</dt><dd>${escapeHtml(desc)}</dd>`).join('')}
          </dl>
          <p class="guide-callout">${escapeHtml(guide.callout)}</p>
        </section>

        <section class="guide-panel">
          <h3>도입사례</h3>
          ${guide.cases.map((item, caseIndex) => `
            <details ${caseIndex === 0 ? 'open' : ''}>
              <summary>${escapeHtml(item.issue)}</summary>
              <p><strong>${escapeHtml(item.title)}</strong></p>
              <ul>
                <li><b>정책</b> ${escapeHtml(item.policy)}</li>
                <li><b>기술</b> ${escapeHtml(item.tech)}</li>
              </ul>
            </details>
          `).join('')}
        </section>

        <section class="guide-panel guide-effects">
          <h3>기대효과</h3>
          ${guide.effects.map(([title, desc]) => `
            <div>
              <strong>${escapeHtml(title)}</strong>
              <p>${escapeHtml(desc)}</p>
            </div>
          `).join('')}
        </section>
      </div>
      <p class="example-note">(작성 예시) 체크 시 아래 설문에 참고용 초안이 입력됩니다. 기관/단체별 실제 현안, 적용 현장, 보유 데이터, 기대효과에 맞게 수정해 주세요.</p>
    </article>
  `;
}

let currentGuideIndex = 0;

function updateGuidebook() {
  document.querySelector('.guide-track').style.transform = `translateX(-${currentGuideIndex * 100}%)`;
  document.querySelector('#guidePrev').disabled = currentGuideIndex === 0;
  document.querySelector('#guideNext').disabled = currentGuideIndex === GUIDEBOOKS.length - 1;
  document.querySelector('#guideCurrent').textContent = `${currentGuideIndex + 1} / ${GUIDEBOOKS.length}`;
  document.querySelectorAll('.guide-dot').forEach((dot, index) => {
    dot.classList.toggle('active', index === currentGuideIndex);
    dot.setAttribute('aria-current', index === currentGuideIndex ? 'true' : 'false');
  });
}

function goGuide(direction) {
  currentGuideIndex = Math.max(0, Math.min(GUIDEBOOKS.length - 1, currentGuideIndex + direction));
  updateGuidebook();
}

function setGuide(index) {
  currentGuideIndex = index;
  updateGuidebook();
}

function renderGuidebook() {
  const guidebook = document.querySelector('#guidebook');
  guidebook.innerHTML = `
    <div class="guide-shell">
      <div class="guide-nav">
        <button type="button" class="secondary guide-arrow" id="guidePrev" aria-label="이전 가이드">‹</button>
        <div>
          <p class="guide-label">Swipe Guidebook</p>
          <strong id="guideCurrent">1 / ${GUIDEBOOKS.length}</strong>
        </div>
        <button type="button" class="secondary guide-arrow" id="guideNext" aria-label="다음 가이드">›</button>
      </div>
      <div class="guide-window">
        <div class="guide-track">
          ${GUIDEBOOKS.map(renderGuideCard).join('')}
        </div>
      </div>
      <div class="guide-dots" aria-label="가이드 선택">
        ${GUIDEBOOKS.map((guide, index) => `<button type="button" class="guide-dot" data-guide-dot="${index}" aria-label="${escapeHtml(guide.title)} 보기"></button>`).join('')}
      </div>
    </div>
  `;

  document.querySelector('#guidePrev').addEventListener('click', () => goGuide(-1));
  document.querySelector('#guideNext').addEventListener('click', () => goGuide(1));
  document.querySelectorAll('[data-guide-dot]').forEach((dot) => {
    dot.addEventListener('click', () => setGuide(Number(dot.dataset.guideDot)));
  });
  document.querySelectorAll('[data-guide-apply]').forEach((inputEl) => {
    inputEl.addEventListener('change', () => applyGuideChoice(inputEl));
  });

  let startX = 0;
  const windowEl = document.querySelector('.guide-window');
  windowEl.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
  }, { passive: true });
  windowEl.addEventListener('touchend', (event) => {
    const delta = event.changedTouches[0].clientX - startX;
    if (Math.abs(delta) > 45) goGuide(delta < 0 ? 1 : -1);
  });

  updateGuidebook();
}

function renderFieldReference() {
  const reference = document.querySelector('#fieldReference');
  reference.innerHTML = `
    <div>
      <p class="guide-label">주요분야(안)</p>
      <h3>대분류와 소분류를 확인한 뒤 기술수요를 작성해 주세요.</h3>
    </div>
    <div class="major-field-list">
      ${CATEGORY_META.filter((item) => item.category !== '기타').map((item) => `
        <article>
          <strong>${escapeHtml(item.category)}</strong>
          <p>${item.subcategories.filter((value) => value !== '기타').map(escapeHtml).join(', ')}</p>
          <div class="field-meta">
            <span><b>관련 ITS 2030:</b> ${item.itsTasks.map(escapeHtml).join(', ')}</span>
            <span><b>분류 키워드:</b> ${escapeHtml(item.keywords)}</span>
          </div>
          <button type="button" class="field-draft-button" data-field-draft="${escapeHtml(item.category)}">
            이 분야 수요 초안 선택
          </button>
        </article>
      `).join('')}
    </div>
  `;

  reference.querySelectorAll('[data-field-draft]').forEach((button) => {
    button.addEventListener('click', () => applyFieldDraft(button.dataset.fieldDraft));
  });
}

function responseRows() {
  return JSON.parse(localStorage.getItem('technology-demand-surveys') || '[]');
}

function renderAdminApp() {
  const admin = document.querySelector('#adminApp');
  const responses = responseRows();
  const visibleCount = surveyConfig.questions.filter((question) => question.visible).length;
  const requiredCount = surveyConfig.questions.filter((question) => question.visible && question.required).length;
  admin.innerHTML = `
    <div class="admin-head">
      <div>
        <p class="guide-label">Admin</p>
        <h2>설문 관리 시스템 v2</h2>
        <p>HTML을 직접 수정하지 않고 문항 노출, 필수 여부, 문구, 예시, 순서를 조정하는 관리자 기반 구조입니다.</p>
      </div>
      <div class="admin-actions">
        <button type="button" id="publishSurveyConfig">발행하기</button>
        <button type="button" class="secondary" id="resetAdminConfig">기본값 복원</button>
        <button type="button" id="exportAdminCsv">CSV 다운로드</button>
      </div>
    </div>

    <div class="admin-stats">
      <article><span>진행중 설문</span><strong>${surveyConfig.status === '공개' ? '1' : '0'}</strong></article>
      <article><span>응답수</span><strong>${responses.length}</strong></article>
      <article><span>노출 문항</span><strong>${visibleCount}</strong></article>
      <article><span>필수 문항</span><strong>${requiredCount}</strong></article>
      <article><span>설정 출처</span><strong class="small-stat">${escapeHtml(configSource)}</strong></article>
    </div>

    <div class="admin-grid">
      <section class="admin-panel">
        <h3>설문 관리</h3>
        <label class="field compact">
          <span>설문 상태</span>
          <select id="surveyStatus">
            ${['공개', '임시저장', '종료'].map((value) => `<option ${surveyConfig.status === value ? 'selected' : ''}>${value}</option>`).join('')}
          </select>
        </label>
        <label class="field compact">
          <span>URL</span>
          <input id="publicUrl" value="${escapeHtml(surveyConfig.publicUrl)}" />
        </label>
        <label class="field compact">
          <span>상단 안내문</span>
          <textarea id="noticeText" rows="3">${escapeHtml(surveyConfig.notice)}</textarea>
        </label>
      </section>

      <section class="admin-panel">
        <h3>대분류/소분류 관리</h3>
        <div class="category-admin-list">
          ${CATEGORY_META.filter((item) => item.category !== '기타').map((item) => `
            <details>
              <summary>${escapeHtml(item.category)}</summary>
              <p>${item.subcategories.map(escapeHtml).join(', ')}</p>
            </details>
          `).join('')}
        </div>
        <p class="admin-note">현재 단계에서는 카테고리 구조를 관리자 화면에 노출하고, 다음 단계에서 추가/삭제/수정 저장소와 연결합니다.</p>
      </section>
    </div>

    <section class="admin-panel">
      <div class="admin-section-title">
        <h3>응답자 화면 기준 문항 관리</h3>
        <p>실제 설문 흐름 그대로 보면서 각 문항의 노출/필수 여부를 체크합니다.</p>
      </div>
      <div class="admin-survey-preview">
        ${renderAdminPreviewSection('1. 응답기관 기본정보', '기관/단체별 취합과 후속 연락을 위한 기본 정보입니다.', 'org')}
        ${renderAdminPreviewSection('2. 기술수요 입력', '교통·도로·재난안전 분야 현장 문제와 적용 현장을 중심으로 간단히 작성해 주세요.', 'demand')}
      </div>
    </section>

    <div class="admin-grid">
      <section class="admin-panel">
        <h3>작성예시 / Guidebook 관리</h3>
        <p class="admin-note">작성예시와 Guidebook은 현재 데이터 구조로 분리되어 있으며, 관리자 편집/이미지/PDF 교체 연결을 위한 영역입니다.</p>
        <div class="guide-admin-list">
          ${GUIDEBOOKS.map((guide) => `<span>${escapeHtml(guide.title)}</span>`).join('')}
        </div>
      </section>
      <section class="admin-panel">
        <h3>응답관리</h3>
        <p class="admin-note">검색, 기관별/분야별 필터, Excel/CSV/PDF 다운로드 확장 대상입니다.</p>
        <div class="response-preview">
          ${responses.slice(-3).reverse().map((item) => `
            <article>
              <strong>${escapeHtml(item.org || '기관명 없음')}</strong>
              <span>${escapeHtml(item.submittedAt || '')}</span>
            </article>
          `).join('') || '<p class="admin-note">아직 저장된 응답이 없습니다.</p>'}
        </div>
      </section>
    </div>
  `;

  bindAdminEvents();
}

function renderAdminPreviewSection(title, description, group) {
  return `
    <section class="admin-preview-section">
      <header class="section-title">
        <div>
          <h2>${escapeHtml(title)}</h2>
          <p>${escapeHtml(description)}</p>
        </div>
      </header>
      <div class="admin-preview-grid">
        ${allQuestions(group).map((question) => renderQuestionAdminRow(question)).join('')}
      </div>
    </section>
  `;
}

function previewControl(question) {
  if (question.type === 'select' || question.type === 'category' || question.type === 'subcategory') {
    const label = question.type === 'category' ? '선택해 주세요' : (question.placeholder || '선택해 주세요');
    return `<div class="admin-fake-control">${escapeHtml(label)}</div>`;
  }
  if (question.type === 'textarea') {
    return `<div class="admin-fake-control textarea">${escapeHtml(question.placeholder || '내용을 입력해 주세요.')}</div>`;
  }
  return `<div class="admin-fake-control">${escapeHtml(question.placeholder || '입력란')}</div>`;
}

function renderQuestionAdminRow(question) {
  return `
    <article class="question-admin-row" draggable="true" data-question-row="${escapeHtml(question.id)}">
      <div class="question-preview-main ${question.visible ? '' : 'is-hidden'}">
        <label class="field compact">
          <span>${escapeHtml(question.label)}${question.required ? '<b>*</b>' : ''}</span>
          ${previewControl(question)}
        </label>
        ${question.help ? `<p class="question-help">${escapeHtml(question.help)}</p>` : ''}
      </div>
      <div class="question-toggles">
        <label><input type="checkbox" data-question-visible="${escapeHtml(question.id)}" ${question.visible ? 'checked' : ''}/> 노출</label>
        <label><input type="checkbox" data-question-required="${escapeHtml(question.id)}" ${question.required ? 'checked' : ''}/> 필수</label>
      </div>
      <div class="row-order-actions">
        <button type="button" class="secondary mini" data-question-up="${escapeHtml(question.id)}">위로</button>
        <button type="button" class="secondary mini" data-question-down="${escapeHtml(question.id)}">아래로</button>
        <button type="button" class="secondary mini" data-question-edit="${escapeHtml(question.id)}">문구</button>
      </div>
      <div class="question-edit-panel" hidden data-question-edit-panel="${escapeHtml(question.id)}">
        <label class="field compact">
          <span>문항명</span>
          <input data-question-label="${escapeHtml(question.id)}" value="${escapeHtml(question.label)}" />
        </label>
        <label class="field compact">
          <span>Placeholder</span>
          <input data-question-placeholder="${escapeHtml(question.id)}" value="${escapeHtml(question.placeholder || '')}" />
        </label>
        <label class="field compact full">
          <span>도움말</span>
          <input data-question-help="${escapeHtml(question.id)}" value="${escapeHtml(question.help || '')}" />
        </label>
      </div>
    </article>
  `;
}

function bindAdminEvents() {
  document.querySelector('#resetAdminConfig')?.addEventListener('click', resetSurveyConfig);
  document.querySelector('#exportAdminCsv')?.addEventListener('click', exportCsv);
  document.querySelector('#publishSurveyConfig')?.addEventListener('click', async () => {
    try {
      await publishSurveyConfig();
    } catch (error) {
      show(`설정 발행 중 오류가 발생했습니다. (${error.message})`);
    }
  });
  document.querySelector('#surveyStatus')?.addEventListener('change', (event) => {
    surveyConfig.status = event.target.value;
    persistSurveyConfig();
    renderAll();
  });
  document.querySelector('#publicUrl')?.addEventListener('change', (event) => {
    surveyConfig.publicUrl = event.target.value.trim();
    persistSurveyConfig();
    renderAll();
  });
  document.querySelector('#noticeText')?.addEventListener('change', (event) => {
    surveyConfig.notice = event.target.value.trim();
    persistSurveyConfig();
    renderAll();
  });

  document.querySelectorAll('[data-question-visible]').forEach((inputEl) => {
    inputEl.addEventListener('change', () => updateQuestion(inputEl.dataset.questionVisible, { visible: inputEl.checked }));
  });
  document.querySelectorAll('[data-question-required]').forEach((inputEl) => {
    inputEl.addEventListener('change', () => updateQuestion(inputEl.dataset.questionRequired, { required: inputEl.checked }));
  });
  document.querySelectorAll('[data-question-label]').forEach((inputEl) => {
    inputEl.addEventListener('change', () => updateQuestion(inputEl.dataset.questionLabel, { label: inputEl.value.trim() || inputEl.dataset.questionLabel }));
  });
  document.querySelectorAll('[data-question-placeholder]').forEach((inputEl) => {
    inputEl.addEventListener('change', () => updateQuestion(inputEl.dataset.questionPlaceholder, { placeholder: inputEl.value }));
  });
  document.querySelectorAll('[data-question-help]').forEach((inputEl) => {
    inputEl.addEventListener('change', () => updateQuestion(inputEl.dataset.questionHelp, { help: inputEl.value }));
  });
  document.querySelectorAll('[data-question-up]').forEach((button) => {
    button.addEventListener('click', () => moveQuestion(button.dataset.questionUp, -1));
  });
  document.querySelectorAll('[data-question-down]').forEach((button) => {
    button.addEventListener('click', () => moveQuestion(button.dataset.questionDown, 1));
  });
  document.querySelectorAll('[data-question-edit]').forEach((button) => {
    button.addEventListener('click', () => {
      const panel = document.querySelector(`[data-question-edit-panel="${CSS.escape(button.dataset.questionEdit)}"]`);
      if (panel) panel.hidden = !panel.hidden;
    });
  });
  document.querySelectorAll('[data-question-row]').forEach((row) => {
    row.addEventListener('dragstart', (event) => {
      event.dataTransfer.setData('text/plain', row.dataset.questionRow);
    });
    row.addEventListener('dragover', (event) => {
      event.preventDefault();
      row.classList.add('drag-over');
    });
    row.addEventListener('dragleave', () => row.classList.remove('drag-over'));
    row.addEventListener('drop', (event) => {
      event.preventDefault();
      row.classList.remove('drag-over');
      reorderQuestion(event.dataTransfer.getData('text/plain'), row.dataset.questionRow);
    });
  });
}

function fieldByName(form, name) {
  return form.elements.namedItem(name) || form.querySelector(`[name="${CSS.escape(name)}"]`);
}

function setValue(form, name, value) {
  const element = fieldByName(form, name);
  if (element) element.value = value || '';
}

function normalizeCategory(category) {
  return CATEGORY_META.find((item) => item.guideCategory === category)?.category || category;
}

function guideForCategory(category) {
  return GUIDEBOOKS.find((guide) => normalizeCategory(guide.category) === category);
}

function inferSubcategory(guide) {
  const category = normalizeCategory(guide.category);
  const values = SUBCATEGORIES[category] || [];
  const haystack = [
    guide.subtitle,
    guide.draft.title,
    guide.draft.solution,
    guide.draft.data,
  ].join(' ');
  return values.find((value) => value !== '기타' && haystack.includes(value)) || values[0] || '기타';
}

function updateSubcategoryOptions(index, category, selectedValue = '') {
  const form = document.querySelector('#survey');
  const element = fieldByName(form, `subcategory-${index}`);
  if (!element) return;

  const values = SUBCATEGORIES[category] || [];
  const question = questionById('subcategory');
  element.disabled = values.length === 0;
  element.required = !!question?.required;
  element.innerHTML = `
    <option value="">${values.length ? (question?.placeholder || '대분류에 따른 아이템을 선택해 주세요') : '대분류를 먼저 선택해 주세요'}</option>
    ${values.map((value) => `<option ${value === selectedValue ? 'selected' : ''}>${value}</option>`).join('')}
  `;
}

function updateDocentTourDetails(index) {
  const form = document.querySelector('#survey');
  const docentTour = formValue(form, `docentTour-${index}`);
  const panel = document.querySelector(`[data-docent-panel="${CSS.escape(String(index))}"]`);
  const slot = fieldByName(form, `docentTourSlot-${index}`);
  const isWanted = docentTour === '희망';

  if (panel) panel.hidden = !isWanted;
  if (slot) {
    slot.disabled = !isWanted;
    slot.required = false;
    if (!isWanted) slot.value = '';
  }
}

function exampleText(value) {
  if (!value) return '';
  return value.startsWith('(작성 예시)') ? value : `(작성 예시) ${value}`;
}

function applyGuideToDemand(guide) {
  if (!document.querySelector('.demand-card')) addDemand();

  const form = document.querySelector('#survey');
  const card = document.querySelector('.demand-card');
  const index = card.dataset.index;
  const draft = guide.draft;
  const category = normalizeCategory(guide.category);
  const subcategory = inferSubcategory(guide);

  setValue(form, `title-${index}`, exampleText(draft.title));
  setValue(form, `type-${index}`, draft.type);
  setValue(form, `category-${index}`, category);
  updateSubcategoryOptions(index, category, subcategory);
  setValue(form, `urgency-${index}`, draft.urgency);
  setValue(form, `site-${index}`, exampleText(draft.site));
  setValue(form, `readiness-${index}`, draft.readiness);
  setValue(form, `background-${index}`, `${exampleText(draft.background)}\n\n기관/단체의 실제 추진 배경에 맞게 수정해 주세요.`);
  setValue(form, `problem-${index}`, `${exampleText(draft.problem)}\n\n기관/단체의 실제 현장 문제와 애로사항에 맞게 수정해 주세요.`);
  setValue(form, `desiredOutcome-${index}`, `${exampleText(draft.solution)}\n\n해결되었으면 하는 점을 기관/단체 상황에 맞게 간단히 수정해 주세요.`);
  setValue(form, `solution-${index}`, `${exampleText(draft.solution)}\n\n기관/단체에서 필요로 하는 기술·서비스 내용에 맞게 수정해 주세요.`);
  setValue(form, `data-${index}`, `${exampleText(draft.data)}\n\n기관/단체가 보유하거나 연계 가능한 자료에 맞게 수정해 주세요.`);
  setValue(form, `expected-${index}`, `${exampleText(draft.expected)}\n\n기관/단체의 기대효과와 활용계획에 맞게 수정해 주세요.`);

  card.querySelector('.source-note')?.remove();
  card.querySelector('.demand-top').insertAdjacentHTML(
    'beforeend',
    `<p class="source-note">${escapeHtml(category)} / ${escapeHtml(subcategory)} (작성 예시) 반영됨 - 기관/단체 현안에 맞게 수정해 주세요.</p>`,
  );
  show('(작성 예시)가 입력되었습니다. 기관/단체별 실제 현안에 맞게 수정해 주세요.', true);
  document.querySelector('#survey').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function applyGuideChoice(inputEl) {
  if (!inputEl.checked) return;

  document.querySelectorAll('[data-guide-apply]').forEach((checkbox) => {
    if (checkbox !== inputEl) checkbox.checked = false;
  });

  const guide = GUIDEBOOKS.find((item) => item.id === inputEl.dataset.guideApply);
  if (guide) applyGuideToDemand(guide);
}

function applyFieldDraft(category) {
  const guide = guideForCategory(category);
  if (!guide) return;
  document.querySelectorAll('[data-guide-apply]').forEach((checkbox) => {
    checkbox.checked = checkbox.dataset.guideApply === guide.id;
  });
  applyGuideToDemand(guide);
}

function addDemand() {
  const index = demandCount++;
  const section = document.createElement('section');
  section.className = 'demand-card';
  section.dataset.index = index;
  const demandFields = visibleQuestions('demand').map((question) => renderQuestionInput(question, index)).join('');
  section.innerHTML = `
    <div class="demand-top">
      <div>
        <p class="eyebrow">수요 항목 ${index + 1}</p>
        <h3>기술수요 초안</h3>
      </div>
      <button type="button" class="ghost remove">삭제</button>
    </div>

    <div class="grid two">
      ${demandFields}
    </div>
    ${renderDocentTourDetails(index)}
  `;

  section.querySelector('.remove').addEventListener('click', () => {
    if (document.querySelectorAll('.demand-card').length > 1) section.remove();
  });
  section.querySelector(`[name="category-${index}"]`)?.addEventListener('change', (event) => {
    updateSubcategoryOptions(index, event.target.value);
  });
  section.querySelector(`[name="docentTour-${index}"]`)?.addEventListener('change', () => {
    updateDocentTourDetails(index);
  });

  document.querySelector('#demands').append(section);
  updateDocentTourDetails(index);
}

function formValue(form, name) {
  return fieldByName(form, name)?.value.trim() || '';
}

function collect() {
  const form = document.querySelector('#survey');
  const base = Object.fromEntries(allQuestions('org').map((question) => [question.id, formValue(form, question.id)]));

  return {
    responseId: base.email,
    submittedAt: new Date().toISOString(),
    sourceSheet: SHEET_URL,
    surveyStatus: surveyConfig.status,
    ...base,
    demands: [...document.querySelectorAll('.demand-card')].map((card) => {
      const i = card.dataset.index;
      return {
        ...Object.fromEntries(allQuestions('demand').map((question) => [question.id, formValue(form, `${question.id}-${i}`)])),
        docentTourSlot: formValue(form, `docentTourSlot-${i}`),
      };
    }),
  };
}

function show(message, ok = false) {
  const box = document.querySelector('#message');
  box.hidden = false;
  box.className = `message ${ok ? 'ok' : ''}`;
  box.textContent = `${ok ? '완료' : '확인'}: ${message}`;
}

function sheetRowsFromPayload(payload, status = '제출') {
  return payload.demands.map((demand, index) => ({
    응답자ID: payload.responseId,
    제출일시: payload.submittedAt,
    설문상태: payload.surveyStatus,
    순번: index + 1,
    '기관/단체명': payload.org,
    부서명: payload.department,
    담당자명: payload.writer,
    연락처: payload.phone,
    이메일: payload.email,
    기술수요명: demand.title,
    대분류: demand.category,
    소분류: demand.subcategory,
    '해결되었으면 하는 점': demand.desiredOutcome,
    '도슨트투어 참가 희망': demand.docentTour,
    '도슨트투어 희망 시간대': demand.docentTourSlot,
    '참고자료/링크': demand.attachments,
    '기타 의견': demand.note,
    '기술상담 희망': demand.consultation,
    '실증사업 참여 의향': demand.pilotIntent,
    '적용 대상/현장': demand.site,
    '현장 문제 및 애로사항': demand.problem,
    '수요 유형': demand.type,
    '추진 시급성': demand.urgency,
    '검토 단계': demand.readiness,
    '추진 배경': demand.background,
    '필요 기술/서비스 내용': demand.solution,
    '보유 데이터 및 연계 가능 자료': demand.data,
    '기대효과 및 활용계획': demand.expected,
    제출상태: status,
  }));
}

function sheetValuesFromPayload(payload, status = '제출') {
  return sheetRowsFromPayload(payload, status).map((row) => SHEET_HEADERS.map((header) => row[header] || ''));
}

async function saveToGoogleSheet(payload) {
  if (!GOOGLE_SHEET_WEBAPP_URL) return false;

  await fetch(GOOGLE_SHEET_WEBAPP_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    body: JSON.stringify({
      spreadsheetUrl: SHEET_URL,
      sheetName: GOOGLE_SHEET_NAME,
      headers: SHEET_HEADERS,
      rows: sheetValuesFromPayload(payload),
      payload,
    }),
  });

  return true;
}

function renderSurveyNotice() {
  const notice = document.querySelector('.intro-note p');
  if (notice) notice.textContent = surveyConfig.notice;
}

function renderDemandCards() {
  document.querySelector('#demands').innerHTML = '';
  demandCount = 0;
  addDemand();
}

function renderAll() {
  applyViewMode();
  renderSurveyNotice();
  if (viewMode() === 'admin') renderAdminApp();
  renderOrgFields();
  renderFieldReference();
  renderDemandCards();
}

function saveDraft() {
  const payload = collect();
  localStorage.setItem('technology-demand-survey-draft', JSON.stringify(payload));
  show('작성 중인 내용이 이 브라우저에 임시저장되었습니다.', true);
}

async function submit(event) {
  event.preventDefault();

  if (!document.querySelector('#consent').checked) {
    show('개인정보 수집·이용 및 기술수요 검토 목적 활용 동의가 필요합니다.');
    return;
  }

  const payload = collect();
  const requiredDemandQuestions = visibleQuestions('demand').filter((question) => question.required);
  const invalid = payload.demands.findIndex((demand) => requiredDemandQuestions.some((question) => !demand[question.id]));

  if (invalid >= 0) {
    show(`${invalid + 1}번 기술수요의 필수 문항을 모두 입력해 주세요.`);
    return;
  }

  const missingDocentSlot = payload.demands.findIndex((demand) => demand.docentTour === '희망' && !demand.docentTourSlot);
  if (missingDocentSlot >= 0) {
    show(`${missingDocentSlot + 1}번 기술수요의 도슨트투어 희망 시간대를 선택해 주세요.`);
    return;
  }

  try {
    const url = window.SUPABASE_URL;
    const key = window.SUPABASE_ANON_KEY;
    let savedRemotely = false;

    if (url && key) {
      const res = await fetch(`${url}/rest/v1/technology_demand_surveys`, {
        method: 'POST',
        headers: {
          apikey: key,
          Authorization: `Bearer ${key}`,
          'Content-Type': 'application/json',
          Prefer: 'return=minimal',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(await res.text());
      savedRemotely = true;
    }

    if (await saveToGoogleSheet(payload)) {
      savedRemotely = true;
    }

    if (!savedRemotely) {
      const saved = JSON.parse(localStorage.getItem('technology-demand-surveys') || '[]');
      saved.push(payload);
      localStorage.setItem('technology-demand-surveys', JSON.stringify(saved));
    }

    show(`제출이 완료되었습니다. 응답자 ID: ${payload.responseId}`, true);
  } catch (error) {
    show(`저장 중 오류가 발생했습니다. (${error.message})`);
  }
}

function exportCsv() {
  const payload = collect();
  const rows = sheetRowsFromPayload(payload, 'CSV');

  if (!rows.length) return show('다운로드할 기술수요가 없습니다.');

  const headers = SHEET_HEADERS;
  const csv = [
    headers.join(','),
    ...rows.map((row) => headers.map((header) => `"${String(row[header] ?? '').replaceAll('"', '""')}"`).join(',')),
  ].join('\n');

  const link = document.createElement('a');
  link.href = URL.createObjectURL(new Blob([`\uFEFF${csv}`], { type: 'text/csv;charset=utf-8;' }));
  link.download = '2026-technology-demand-survey-draft.csv';
  link.click();
}

async function init() {
  setupConfigRealtimeSync();
  await loadPublishedConfig();
  setupRemotePublishedSync();
  renderGuidebook();
  renderAll();
  document.querySelector('#addDemand').addEventListener('click', addDemand);
  document.querySelector('#survey').addEventListener('submit', submit);
  document.querySelector('#saveDraft').addEventListener('click', saveDraft);
}

init();
