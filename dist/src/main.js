const SHEET_URL = 'https://docs.google.com/spreadsheets/d/1d4beTVvbY3y-I8OvuNd8IF42wApwvkAXCdLv5LEfzaE/edit?gid=0#gid=0';

const DEMAND_TYPES = [
  '신규 R&D 과제',
  '현장 실증/시범사업',
  '기존 기술 고도화',
  '데이터/AI 분석 서비스',
  '장비/시스템 도입',
  '제도/표준/가이드 개선',
];

const CATEGORIES = [
  '분야 1. 교통안전',
  '분야 2. 도로관리/유지보수',
  '분야 3. 재난안전/위험대응',
  '분야 4. 미래 모빌리티',
  '스마트 인프라/IoT',
  'AI·데이터 분석',
  '탄소중립/친환경',
  '기타',
];

const GUIDEBOOKS = [
  {
    id: 'traffic-safety',
    category: '분야 1. 교통안전',
    title: '분야 1. 교통안전',
    subtitle: '보행자·어린이·고령자 교통안전, 사고위험 예측, 교통약자 보호 및 교통사고 사전예방을 위한 기술수요 조사',
    policy: [
      ['국정과제', '[국정30] 국민 생명과 안전을 지키는 교통안전 체계 고도화 및 보행자 중심 교통환경 조성'],
      ['대표성과 및 배경', '교통사고 사망자는 감소 추세이나 보행자, 고령자, 어린이 보호구역 사고와 야간·우천 시 시인성 저하 문제는 여전히 현장 위험요인으로 남아 있습니다. 사고 발생 후 대응보다 사고 위험을 사전에 탐지하고, 위험 구간을 정밀하게 개선하는 데이터 기반 안전관리 체계가 요구됩니다.'],
      ['보도자료', '국토교통부 「교통사고 사망자 감소대책」, 경찰청 「보행자 중심 교통안전 강화방안」'],
    ],
    callout: '교통사고 다발구간, 보행 취약지점, 어린이·고령자 보호구역을 데이터로 진단하고 현장 시설 개선과 운영 관리를 연결하는 예방형 교통안전 기술이 핵심 수요로 요구됩니다.',
    cases: [
      {
        issue: '보행자·교통약자 사고위험 사전 감지 부족',
        title: 'AI 영상분석 기반 보행자 위험상황 탐지 서비스',
        policy: '어린이보호구역, 노인보호구역, 사고다발 교차로를 중심으로 사고위험을 상시 모니터링하고 지자체 교통안전 개선사업과 연계',
        tech: 'CCTV 영상, 보행자 이동궤적, 차량 접근속도, 무단횡단 패턴을 AI로 분석하여 위험 이벤트를 탐지하고 관제센터·전광판·신호제어와 연계',
      },
      {
        issue: '사고다발구간 개선 우선순위 판단 근거 부족',
        title: '교통사고 위험도 예측 및 개선 우선순위 산정 시스템',
        policy: '한정된 교통안전 예산을 사고위험이 높은 지점에 집중 투입하기 위한 데이터 기반 투자 우선순위 체계 마련',
        tech: '사고이력, 교통량, 도로기하구조, 기상, 민원 데이터를 결합하여 위험도를 산정하고 개선 대안을 추천',
      },
      {
        issue: '야간·우천·안개 등 취약상황 안전관리 미흡',
        title: '기상연계 스마트 교통안전 시설 운영',
        policy: '기상 악화 시 사고위험이 급증하는 구간에 대해 가변속도, 경고표지, 노면표시 개선 등 탄력적 안전관리 추진',
        tech: '기상센서, 노면상태, 차량속도 데이터를 실시간 수집하여 위험상황별 경고정보를 제공하고 시설물 작동을 자동화',
      },
    ],
    effects: [
      ['사고 예방 중심 안전관리 전환', '사고 발생 후 보완하는 방식에서 벗어나 위험상황을 조기에 탐지하고 선제적으로 개선할 수 있습니다.'],
      ['예산 투입 효율성 제고', '위험도 기반으로 개선 우선순위를 산정하여 제한된 교통안전 예산을 효과적으로 사용할 수 있습니다.'],
    ],
    draft: {
      title: 'AI 기반 보행자 교통사고 위험 예측 및 선제 대응 시스템',
      type: '데이터/AI 분석 서비스',
      urgency: '상: 2026년 즉시 추진 필요',
      site: '어린이·고령자 보호구역, 사고다발 교차로, 야간 보행 취약구간',
      readiness: '현장 문제 확인',
      background: '[국정30] 교통안전 체계 고도화 및 보행자 중심 교통환경 조성과 연계하여, 보행자·교통약자 사고위험을 사전에 탐지하고 개선 우선순위를 도출하는 예방형 안전관리 체계가 필요합니다.',
      problem: '보행자 사고위험은 CCTV, 사고이력, 민원, 기상 등 여러 데이터에 흩어져 있어 현장 담당자가 위험 징후를 실시간으로 판단하기 어렵고, 개선사업 우선순위도 경험에 의존하는 경우가 많습니다.',
      solution: 'AI 영상분석과 사고위험 예측모델을 활용하여 보행자 위험상황, 차량 접근속도, 무단횡단 패턴, 취약 시간대를 분석하고 관제센터·전광판·신호제어와 연계하는 교통안전 대응 서비스를 구축합니다.',
      data: 'CCTV, 교통사고 이력, 교통량, 차량속도, 보호구역 현황, 민원 데이터, 기상·노면상태 데이터',
      expected: '교통사고 위험을 조기에 발견하고 위험구간 개선 우선순위를 정량화하여 보행자 안전 개선, 사고 감소, 교통안전 예산 투입 효율화를 기대할 수 있습니다.',
    },
  },
  {
    id: 'road-maintenance',
    category: '분야 2. 도로관리/유지보수',
    title: '분야 2. 도로관리·유지보수',
    subtitle: '노후 포장·교량·터널·비탈면 등 도로시설물의 예방적 유지관리, 점검 자동화, 보수 우선순위 산정을 위한 기술수요 조사',
    policy: [
      ['국정과제', '[국정29] 국민이 안심하는 기반시설 안전관리 및 SOC 디지털 전환'],
      ['대표성과 및 배경', '도로시설물 노후화가 빠르게 진행되면서 정기점검 중심의 사후 보수 방식만으로는 예산 증가와 안전 리스크를 감당하기 어렵습니다. 드론, 모바일 매핑, IoT 센서, AI 분석을 활용한 예방적 유지관리 체계 전환이 요구됩니다.'],
      ['보도자료', '국토교통부 「기반시설 첨단관리체계 구축」, 「도로 유지관리 디지털 전환 추진」'],
    ],
    callout: '도로 포장, 교량, 터널, 비탈면 상태를 상시 진단하고 위험도와 보수 우선순위를 자동 산정하는 지능형 도로관리 기술이 핵심 과제로 요구됩니다.',
    cases: [
      {
        issue: '포트홀·균열 등 포장 파손의 조기 발견 어려움',
        title: '차량·영상 기반 도로포장 손상 자동탐지',
        policy: '도로 순찰과 민원 중심의 사후 대응을 줄이고, 노면상태 데이터를 기반으로 보수 계획을 사전에 수립',
        tech: '차량 블랙박스, 순찰차 영상, 모바일 라이다 데이터를 AI로 분석하여 포트홀, 균열, 침하를 자동 탐지하고 위치 기반으로 관리',
      },
      {
        issue: '교량·터널 점검자료의 분산 및 위험도 판단 한계',
        title: '시설물 생애주기 기반 통합 점검관리 플랫폼',
        policy: '시설물별 점검이력, 보수이력, 안전등급, 예산 계획을 통합해 관리하는 예방적 유지관리 체계 구축',
        tech: '점검보고서, 센서계측, 사진, 3D 모델을 통합하고 AI가 손상 진전 가능성과 보수 우선순위를 분석',
      },
      {
        issue: '비탈면·옹벽 등 위험시설의 실시간 감시 부족',
        title: 'IoT 센서 기반 도로사면 위험 예측 서비스',
        policy: '강우·동결융해 등 계절적 위험에 대응하기 위해 취약 비탈면 상시 감시와 선제적 통제 기준 마련',
        tech: '강우량, 지반변위, 함수율, 균열센서 데이터를 수집해 붕괴위험을 예측하고 도로통제·보수 알림과 연계',
      },
    ],
    effects: [
      ['예방적 유지관리 체계 구축', '점검·보수 시점을 데이터로 판단하여 시설물 안전성과 예산 효율을 동시에 높일 수 있습니다.'],
      ['현장 점검 업무 경감', '영상·센서 기반 자동탐지를 통해 반복 점검 업무를 줄이고 담당자의 의사결정을 지원할 수 있습니다.'],
    ],
    draft: {
      title: 'AI 기반 도로 포장·시설물 손상 자동탐지 및 보수 우선순위 시스템',
      type: '기존 기술 고도화',
      urgency: '상: 2026년 즉시 추진 필요',
      site: '노후 포장구간, 교량·터널, 급경사지 및 비탈면 취약구간',
      readiness: '기술/솔루션 탐색 중',
      background: '도로시설물 노후화와 유지관리 예산 증가에 대응하기 위해 정기점검 중심의 사후 보수 체계에서 데이터 기반 예방적 유지관리 체계로 전환할 필요가 있습니다.',
      problem: '포트홀, 균열, 침하, 교량·터널 손상, 비탈면 위험징후가 여러 점검자료와 민원에 분산되어 있어 조기 발견과 보수 우선순위 판단이 어렵습니다.',
      solution: '순찰차 영상, 드론, 모바일 라이다, IoT 센서 데이터를 통합해 AI가 손상을 자동 탐지하고 위험도·긴급도·예상 보수비를 기반으로 보수 우선순위를 산정하는 관리 시스템을 구축합니다.',
      data: '도로대장, 점검보고서, 순찰영상, 포트홀 민원, 교량·터널 안전등급, 보수이력, IoT 계측데이터',
      expected: '위험시설을 조기에 발견하고 보수계획을 정량화하여 안전사고 예방, 유지관리 비용 절감, 현장 점검업무 효율화를 기대할 수 있습니다.',
    },
  },
  {
    id: 'disaster-safety',
    category: '분야 3. 재난안전/위험대응',
    title: '분야 3. 재난안전·위험대응',
    subtitle: '침수·폭설·산사태·교통통제 등 재난 상황에서 도로 이용자 안전 확보와 신속 대응을 위한 기술수요 조사',
    policy: [
      ['국정과제', '[국정32] 디지털 기반 재난안전 관리체계 구축 및 기후위기 대응력 강화'],
      ['대표성과 및 배경', '국지성 집중호우, 대설, 폭염, 산사태 등 복합재난이 증가하면서 도로 통제와 우회 안내, 현장 대응 의사결정을 신속하게 지원하는 기술의 필요성이 커지고 있습니다. 사전 예측, 실시간 상황공유, 자동 경보 체계가 핵심입니다.'],
      ['보도자료', '행정안전부 「디지털 재난관리체계 고도화」, 국토교통부 「도로 재난대응 강화대책」'],
    ],
    callout: '침수·결빙·산사태·낙석 등 도로 재난 위험을 조기에 예측하고, 교통통제·우회 안내·현장 출동을 자동 연계하는 통합 대응 기술이 요구됩니다.',
    cases: [
      {
        issue: '침수 취약도로의 위험 판단 및 통제 지연',
        title: '도시침수 예측 기반 도로 자동통제 지원',
        policy: '지하차도, 저지대 도로 등 반복 침수 구간의 인명피해 예방을 위해 선제적 통제 기준과 자동 경보 체계 마련',
        tech: '강우레이더, 수위센서, 배수시설 상태, CCTV를 연계해 침수 가능성을 예측하고 전광판·내비게이션·통제장비와 연계',
      },
      {
        issue: '대설·결빙 구간 대응 우선순위 판단 어려움',
        title: '기상연계 제설·결빙 위험 예측 서비스',
        policy: '제설자원 배치와 도로통제 판단을 데이터 기반으로 전환하여 겨울철 교통안전 확보',
        tech: '노면온도, 기상예보, 교통량, 사고이력을 분석해 결빙 위험구간을 예측하고 제설차량 투입 우선순위를 제시',
      },
      {
        issue: '재난상황 정보가 기관별로 분절되어 대응 지연',
        title: '도로 재난상황 통합 공유 및 우회안내 플랫폼',
        policy: '지자체, 경찰, 소방, 도로관리기관 간 상황 공유를 표준화하고 국민에게 신속한 우회정보 제공',
        tech: '통제정보, 사고정보, 기상정보, CCTV, 현장 출동상태를 통합해 상황판으로 제공하고 내비게이션·문자·전광판에 배포',
      },
    ],
    effects: [
      ['인명피해 예방 및 현장 대응시간 단축', '위험징후를 조기에 감지하고 통제·출동을 자동 연계해 재난 대응 속도를 높일 수 있습니다.'],
      ['기관 간 정보공유 강화', '분산된 재난정보를 통합하여 지자체, 경찰, 소방, 도로관리기관의 공동 대응 품질을 높입니다.'],
    ],
    draft: {
      title: '기후재난 대응형 도로 위험 예측 및 자동통제 지원 플랫폼',
      type: '현장 실증/시범사업',
      urgency: '상: 2026년 즉시 추진 필요',
      site: '침수 취약 지하차도, 결빙 위험구간, 산사태·낙석 취약 도로',
      readiness: '현장 문제 확인',
      background: '집중호우, 대설, 결빙 등 기후재난이 빈번해지면서 도로 이용자 안전 확보와 선제적 통제, 기관 간 상황 공유를 지원하는 디지털 재난대응 체계가 필요합니다.',
      problem: '침수·결빙·낙석 위험정보가 기상, 수위, CCTV, 현장 신고 등으로 분산되어 있어 위험 판단과 도로통제, 우회 안내가 지연될 수 있습니다.',
      solution: '강우·수위·노면온도·CCTV·교통량 데이터를 통합 분석하여 도로 재난 위험을 예측하고, 통제장비·전광판·내비게이션·상황판과 연계하는 자동통제 지원 플랫폼을 구축합니다.',
      data: '강우량, 수위센서, 배수시설 정보, 노면온도, CCTV, 교통량, 통제이력, 재난 신고 및 출동정보',
      expected: '위험구간을 조기에 통제하고 우회 안내를 신속히 제공하여 인명피해를 예방하고 재난 대응시간을 단축할 수 있습니다.',
    },
  },
  {
    id: 'future-mobility',
    category: '분야 4. 미래 모빌리티',
    title: '분야 4. 미래 모빌리티',
    subtitle: '자율주행·C-ITS, V2X, 디지털트윈 기반 교통운영 등 미래 모빌리티 확산 및 실증 기반 마련을 위한 기술수요 조사',
    policy: [
      ['국정과제', '[국정31] 미래 모빌리티와 ‘K-AI 시티’ 실현, 2027년 완전자율주행 상용화'],
      ['대표성과 및 배경', '기존 규칙 기반(Rule-based)의 분절형 자율주행 기술 한계를 넘어, 글로벌 빅테크 기업들이 주도하는 사람처럼 판단하는 E2E(End-to-End) AI 모델 기술 확보가 시급해졌습니다. 이를 극복하기 위해 국가 차원의 대규모 실증 무대 개방 및 고성능 디지털 데이터 인프라 조성이 핵심 정책으로 추진 중입니다.'],
      ['보도자료', '국토교통부 「자율주행 실증도시 추진방안」, 「2030 모빌리티 혁신성장 로드맵」'],
    ],
    callout: '글로벌 수준의 차세대 E2E 자율주행 모델 확보와 첨단 모빌리티 생태계 구축을 위해, 규제가 전면 면제되는 도시 단위의 대규모 실증 무대와 디지털 트윈 기반 가상 검증 인프라 조성이 필수 과제로 요구됩니다.',
    cases: [
      {
        issue: '자율주행 실증 인프라 및 대규모 데이터 부족',
        title: '도시 단위 대규모 자율주행 실증도시 조성',
        policy: "광주광역시 전역을 시범운행지구로 일괄 지정하고 규제 없는 자율주행 샌드박스로 운영하여, 200대 이상의 무인 차량이 도심 실도로를 주행하는 거대한 테스트베드 착수('26.04.)",
        tech: '국가 AI 데이터센터의 고성능 GPU 인프라와 연계하여 대규모 주행 데이터를 수집·학습하는 데이터 파이프라인(Data Flywheel) 및 E2E AI 기반 시스템 구축',
      },
      {
        issue: '차량·인프라 간 실시간 정보 연계 부족',
        title: 'V2X 기반 도로·교통정보 실시간 연계 서비스',
        policy: '자율주행차-클라우드-관제센터 간 24시간 끊김 없는 실증을 지원하기 위해 운행·관제·정비를 아우르는 통합 관리체계 및 사이버보안 기준 마련',
        tech: '교차로 신호정보, 돌발상황, 보행자 위험 등의 현장 도로 데이터를 자율차량과 지자체 인프라 간 지연 없이 실시간(V2X)으로 연계·공유',
      },
      {
        issue: '신기술 및 교통정책 사전 검증 기반 부족',
        title: '디지털 트윈 기반 가상시험환경(시뮬레이터) 구축',
        policy: '전국의 지형·건물·도로 등을 고정밀 3차원 공간정보로 구축하고, 자율주행차 및 UAM 운항 지원을 위한 입체격자체계 국가 표준화 추진',
        tech: '3차원 정밀도로망, 교통량, 신호체계 등을 가상공간에 정밀하게 구현하여, 폭우나 안개 등 돌발 상황(Edge case)이나 신기술 도입에 따른 정책 효과를 실제 도로 주행 전 사전에 안전하게 분석·검증',
      },
    ],
    effects: [
      ['글로벌 신성장 동력 및 3대 강국 도약', '제약 없는 24시간 실증 체계 및 주행 데이터 축적을 통해 E2E AI 자율주행 기술의 세계적 주도권 탈환을 기대할 수 있습니다.'],
      ['테스트베드를 통한 비용 절감 및 신뢰성 확보', '고정밀 디지털 트윈과 V2X 통신 기반을 통해 지자체의 현장 모빌리티 실증에 따르는 막대한 비용과 안전사고 위험을 최소화할 수 있습니다.'],
    ],
    draft: {
      title: 'V2X·디지털트윈 기반 미래 모빌리티 실증 및 가상검증 플랫폼',
      type: '현장 실증/시범사업',
      urgency: '상: 2026년 즉시 추진 필요',
      site: '도심 자율주행 시범지구, 주요 교차로, C-ITS 구축 구간',
      readiness: '실증 대상지 확보 가능',
      background: '[국정31] 미래 모빌리티와 ‘K-AI 시티’ 실현 및 2027년 완전자율주행 상용화 정책과 연계하여, 도시 단위 실증 무대와 디지털 트윈 기반 가상 검증 인프라가 필요합니다.',
      problem: '자율주행 실증 인프라와 대규모 주행 데이터가 부족하고, 차량·인프라 간 실시간 V2X 정보 연계와 신기술 사전 검증 기반이 충분하지 않습니다.',
      solution: '도시 단위 자율주행 실증 구간에서 교차로 신호정보, 돌발상황, 보행자 위험정보를 V2X로 연계하고, 디지털 트윈 기반 시뮬레이터로 정책 효과와 엣지 케이스를 사전 검증하는 플랫폼을 구축합니다.',
      data: '교차로 신호정보, 돌발상황, 보행자 위험 데이터, 정밀도로지도, 교통량, 주행 데이터, 관제센터 로그',
      expected: 'E2E AI 자율주행 모델 확보, 실증 비용 절감, 안전사고 위험 최소화, 미래 모빌리티 생태계 구축 및 정책 사전검증 효과를 기대할 수 있습니다.',
    },
  },
];

const URGENCY = [
  '상: 2026년 즉시 추진 필요',
  '중: 1~2년 내 추진 필요',
  '하: 중장기 검토 가능',
];

const READINESS = [
  '아이디어 단계',
  '현장 문제 확인',
  '기술/솔루션 탐색 중',
  '실증 대상지 확보 가능',
  '예산/사업화 검토 중',
];

const orgFields = [
  ['org', '기관명', '예: OO시청, OO공사', 'text'],
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

function select(name, label, values, required = true) {
  return `
    <label class="field">
      <span>${label}${required ? '<b>*</b>' : ''}</span>
      <select name="${name}" ${required ? 'required' : ''}>
        <option value="">선택해 주세요</option>
        ${values.map((value) => `<option>${value}</option>`).join('')}
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
            <span>이 분야 내용 반영</span>
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

function fieldByName(form, name) {
  return form.elements.namedItem(name) || form.querySelector(`[name="${CSS.escape(name)}"]`);
}

function setValue(form, name, value) {
  const element = fieldByName(form, name);
  if (element) element.value = value || '';
}

function applyGuideToDemand(guide) {
  if (!document.querySelector('.demand-card')) addDemand();

  const form = document.querySelector('#survey');
  const card = document.querySelector('.demand-card');
  const index = card.dataset.index;
  const draft = guide.draft;

  setValue(form, `title-${index}`, draft.title);
  setValue(form, `type-${index}`, draft.type);
  setValue(form, `category-${index}`, guide.category);
  setValue(form, `urgency-${index}`, draft.urgency);
  setValue(form, `site-${index}`, draft.site);
  setValue(form, `readiness-${index}`, draft.readiness);
  setValue(form, `background-${index}`, draft.background);
  setValue(form, `problem-${index}`, draft.problem);
  setValue(form, `solution-${index}`, draft.solution);
  setValue(form, `data-${index}`, draft.data);
  setValue(form, `expected-${index}`, draft.expected);

  card.querySelector('.source-note')?.remove();
  card.querySelector('.demand-top').insertAdjacentHTML('beforeend', `<p class="source-note">${escapeHtml(guide.title)} 가이드 반영됨</p>`);
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
      ${select(`type-${index}`, '수요 유형', DEMAND_TYPES)}
      ${select(`category-${index}`, '분야', CATEGORIES)}
      ${select(`urgency-${index}`, '추진 시급성', URGENCY)}
      ${input(`site-${index}`, '적용 대상/현장', '예: 도심 자율주행 시범지구, 주요 교차로, C-ITS 구축 구간')}
      ${select(`readiness-${index}`, '검토 단계', READINESS)}
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
    !demand.type ||
    !demand.category ||
    !demand.urgency ||
    !demand.site ||
    !demand.background ||
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
    분야: demand.category,
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
document.querySelector('#addDemand').addEventListener('click', addDemand);
document.querySelector('#survey').addEventListener('submit', submit);
document.querySelector('#saveDraft').addEventListener('click', saveDraft);
addDemand();
