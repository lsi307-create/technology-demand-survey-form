const SHEET_URL = 'https://docs.google.com/spreadsheets/d/1d4beTVvbY3y-I8OvuNd8IF42wApwvkAXCdLv5LEfzaE/edit?gid=0#gid=0';

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
    subcategories: ['AI 영상분석', '스마트교차로', '긴급차량 우선신호', '통합관제', '기타'],
  },
  {
    category: '분야 2. 도로교통안전 및 재난',
    subcategories: ['침수·범람 감지', '블랙아이스 검지', '재난 예·경보', 'AI 기반 재난관제', '기타'],
  },
  {
    category: '분야 3. 생활밀착형 교통서비스_민생교통',
    subcategories: ['공영주차 및 주차정보 연계', '불법주정차 관리', 'DRT', '교통약자 이동지원', '기타'],
  },
  {
    category: '분야 4. 모빌리티',
    guideCategory: '분야 4. 미래 모빌리티',
    subcategories: ['자율주행·C-ITS', 'V2X', '디지털트윈 기반 교통운영', '기타'],
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

const orgFields = [
  ['org', '기관/단체명', '예: OO시청, OO공사, OO협회', 'text'],
  ['department', '부서명', '예: 교통정책과, 스마트도시과', 'text'],
  ['writer', '담당자명', '', 'text'],
  ['position', '직위', '', 'text', false],
  ['phone', '연락처', '010-0000-0000', 'tel'],
  ['email', '이메일', 'name@example.go.kr', 'email'],
];

let demandCount = 0;

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

function subcategorySelect(index, category = '', selectedValue = '') {
  const values = SUBCATEGORIES[category] || [];
  return `
    <label class="field">
      <span>소분류<b>*</b></span>
      <select name="subcategory-${index}" required ${values.length ? '' : 'disabled'}>
        <option value="">${values.length ? '대분류에 따른 아이템을 선택해 주세요' : '대분류를 먼저 선택해 주세요'}</option>
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

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[char]);
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
        </article>
      `).join('')}
    </div>
  `;
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
  element.disabled = values.length === 0;
  element.innerHTML = `
    <option value="">${values.length ? '대분류에 따른 아이템을 선택해 주세요' : '대분류를 먼저 선택해 주세요'}</option>
    ${values.map((value) => `<option ${value === selectedValue ? 'selected' : ''}>${value}</option>`).join('')}
  `;
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

function addDemand() {
  const index = demandCount++;
  const section = document.createElement('section');
  section.className = 'demand-card';
  section.dataset.index = index;
  section.innerHTML = `
    <div class="demand-top">
      <div>
        <p class="eyebrow">수요 항목 ${index + 1}</p>
        <h3>기술수요 초안</h3>
      </div>
      <button type="button" class="ghost remove">삭제</button>
    </div>

    <div class="grid two">
      ${input(`title-${index}`, '기술수요명', '예: V2X 기반 교차로 위험정보 실시간 연계 서비스')}
      ${select(`category-${index}`, '대분류', CATEGORIES)}
      ${subcategorySelect(index)}
      ${input(`site-${index}`, '적용 대상/현장', '예: 주요 교차로, 지하차도, 공영주차장, 자율주행 시범지구')}
      ${select(`type-${index}`, '수요 유형', DEMAND_TYPES, false, '미정')}
      ${select(`urgency-${index}`, '추진 시급성', URGENCY, false, '미정')}
      ${select(`readiness-${index}`, '검토 단계', READINESS, false, '미정')}
    </div>

    ${textarea(`background-${index}`, '추진 배경', '관련 국정과제, 정부 보도자료, 지자체 정책, 현장 여건 등 수요가 나온 배경을 적어 주세요.', true)}
    ${textarea(`problem-${index}`, '현장 문제 및 애로사항', '예: 자율주행 실증 인프라 부족, V2X 실시간 정보 연계 부족, 신기술 사전 검증 기반 부족 등', true)}
    ${textarea(`solution-${index}`, '필요 기술/서비스 내용', '예: E2E AI 자율주행 데이터 파이프라인, V2X 정보연계, 디지털 트윈 시뮬레이터 등', true)}
    ${textarea(`data-${index}`, '보유 데이터 및 연계 가능 자료', '예: 교차로 신호정보, 교통량, 정밀도로지도, CCTV, 돌발상황, 보행자 위험, 주행 데이터 등', false)}
    ${textarea(`expected-${index}`, '기대효과 및 활용계획', '예: 실증 비용 절감, 안전사고 위험 최소화, 정책 사전검증, 자율주행 생태계 조성 등', true)}
    ${textarea(`attachments-${index}`, '참고자료/링크', '기획서, 사진, 보고서, 기사, 기존 시스템 링크 등이 있으면 적어 주세요.', false, 3)}
    ${textarea(`note-${index}`, '기타 의견', '추가로 전달할 사항을 자유롭게 적어 주세요.', false, 3)}
  `;

  section.querySelector('.remove').addEventListener('click', () => {
    if (document.querySelectorAll('.demand-card').length > 1) section.remove();
  });
  section.querySelector(`[name="category-${index}"]`).addEventListener('change', (event) => {
    updateSubcategoryOptions(index, event.target.value);
  });

  document.querySelector('#demands').append(section);
}

function formValue(form, name) {
  return fieldByName(form, name)?.value.trim() || '';
}

function collect() {
  const form = document.querySelector('#survey');
  const base = Object.fromEntries(orgFields.map(([name]) => [name, formValue(form, name)]));

  return {
    responseId: `TRD-${new Date().toISOString().slice(0, 10).replaceAll('-', '')}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`,
    submittedAt: new Date().toISOString(),
    sourceSheet: SHEET_URL,
    ...base,
    demands: [...document.querySelectorAll('.demand-card')].map((card) => {
      const i = card.dataset.index;
      return {
        title: formValue(form, `title-${i}`),
        type: formValue(form, `type-${i}`),
        category: formValue(form, `category-${i}`),
        subcategory: formValue(form, `subcategory-${i}`),
        urgency: formValue(form, `urgency-${i}`),
        site: formValue(form, `site-${i}`),
        readiness: formValue(form, `readiness-${i}`),
        background: formValue(form, `background-${i}`),
        problem: formValue(form, `problem-${i}`),
        solution: formValue(form, `solution-${i}`),
        data: formValue(form, `data-${i}`),
        expected: formValue(form, `expected-${i}`),
        attachments: formValue(form, `attachments-${i}`),
        note: formValue(form, `note-${i}`),
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
  const invalid = payload.demands.findIndex((demand) => (
    !demand.title ||
    !demand.category ||
    !demand.subcategory ||
    !demand.site ||
    !demand.problem ||
    !demand.solution ||
    !demand.expected
  ));

  if (invalid >= 0) {
    show(`${invalid + 1}번 기술수요의 필수 문항을 모두 입력해 주세요.`);
    return;
  }

  try {
    const url = window.SUPABASE_URL;
    const key = window.SUPABASE_ANON_KEY;

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
    } else {
      const saved = JSON.parse(localStorage.getItem('technology-demand-surveys') || '[]');
      saved.push(payload);
      localStorage.setItem('technology-demand-surveys', JSON.stringify(saved));
    }

    show(`제출이 완료되었습니다. 응답 ID: ${payload.responseId}`, true);
  } catch (error) {
    show(`저장 중 오류가 발생했습니다. (${error.message})`);
  }
}

function exportCsv() {
  const payload = collect();
  const rows = payload.demands.map((demand, index) => ({
    응답ID: payload.responseId,
    제출일시: payload.submittedAt,
    순번: index + 1,
    기관명: payload.org,
    부서명: payload.department,
    작성자: payload.writer,
    직위직책: payload.position,
    연락처: payload.phone,
    이메일: payload.email,
    기술수요명: demand.title,
    수요유형: demand.type,
    대분류: demand.category,
    소분류: demand.subcategory,
    추진시급성: demand.urgency,
    적용대상현장: demand.site,
    검토단계: demand.readiness,
    추진배경: demand.background,
    현장문제및애로사항: demand.problem,
    필요기술서비스내용: demand.solution,
    보유데이터및연계자료: demand.data,
    기대효과및활용계획: demand.expected,
    참고자료링크: demand.attachments,
    기타의견: demand.note,
  }));

  if (!rows.length) return show('다운로드할 기술수요가 없습니다.');

  const headers = Object.keys(rows[0]);
  const csv = [
    headers.join(','),
    ...rows.map((row) => headers.map((header) => `"${String(row[header] ?? '').replaceAll('"', '""')}"`).join(',')),
  ].join('\n');

  const link = document.createElement('a');
  link.href = URL.createObjectURL(new Blob([`\uFEFF${csv}`], { type: 'text/csv;charset=utf-8;' }));
  link.download = '2026-technology-demand-survey-draft.csv';
  link.click();
}

document.querySelector('#orgFields').innerHTML = orgFields.map((field) => input(...field)).join('');
renderGuidebook();
renderFieldReference();
document.querySelector('#addDemand').addEventListener('click', addDemand);
document.querySelector('#survey').addEventListener('submit', submit);
document.querySelector('#saveDraft').addEventListener('click', saveDraft);
addDemand();
