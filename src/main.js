const SHEET_URL = 'https://docs.google.com/spreadsheets/d/1d4beTVvbY3y-I8OvuNd8IF42wApwvkAXCdLv5LEfzaE/edit?gid=0#gid=0';

const DEMAND_TYPES = [
  '신규 R&D 과제',
  '현장 실증/시범사업',
  '기존 기술 고도화',
  '데이터·AI 분석 서비스',
  '장비/시스템 도입',
  '제도/표준/가이드 개선',
];

const CATEGORIES = [
  '분야 1. 도로교통운영 및 효율',
  '분야 2. 도로교통안전 및 재난',
  '분야 3. 생활밀착형 교통서비스(민생교통)',
  '분야 4. 미래 모빌리티',
  '기타',
];

const PROCESS_STEPS = [
  {
    title: '1단계. 기술수요조사',
    items: [
      '기술수요조사 실시',
      '지자체협의체 운영',
      '기술수요 기반 지자체협의체 연계 도슨트투어',
    ],
  },
  {
    title: '2단계. 현장 참여 연계 프로그램',
    items: [
      '공공기관·유관기관 초청 도슨트투어',
      '인재양성실(도로교통공단 위탁교육) 연계 도슨트투어',
    ],
  },
];

const GUIDEBOOKS = [
  {
    id: 'operation-efficiency',
    category: '분야 1. 도로교통운영 및 효율',
    title: '분야 1. 도로교통운영 및 효율',
    description: '교통흐름 개선, 교차로 운영 최적화, 긴급차량 통행 지원, 관제 효율화를 위한 기술수요를 작성하는 분야입니다.',
    technologies: ['AI 영상분석', '스마트교차로', '긴급차량 우선신호', '통합관제'],
    draft: {
      title: '(작성 예시) AI 기반 스마트교차로 운영 최적화',
      type: '데이터·AI 분석 서비스',
      urgency: '상: 2026년 즉시 추진 필요',
      site: '(작성 예시) 정체 반복 주요 교차로, 통합관제센터',
      readiness: '현장 문제 확인',
      background: '(작성 예시) 주요 교차로의 교통량 변동과 돌발상황이 증가하고 있어, 신호운영과 관제 대응을 데이터 기반으로 전환할 필요가 있습니다. 실제 작성 시 기관의 교통운영 현안과 정책 배경을 입력해 주세요.',
      problem: '(작성 예시) 교차로별 대기행렬, 보행자 통행, 긴급차량 접근 정보가 분산되어 있어 현장 담당자가 실시간으로 신호운영을 조정하기 어렵습니다. 실제 현장의 문제와 애로사항을 구체적으로 수정해 주세요.',
      solution: '(작성 예시) CCTV와 교통량 데이터를 AI로 분석하여 교차로 혼잡도, 보행자 위험상황, 긴급차량 접근을 감지하고 신호제어 및 통합관제 시스템과 연계합니다. 필요한 기술·서비스 내용을 기관 상황에 맞게 작성해 주세요.',
      data: '(작성 예시) CCTV 영상, 교통량, 신호현시, 돌발상황 이력, 긴급차량 운행정보',
      expected: '(작성 예시) 교차로 지체시간 감소, 긴급차량 골든타임 확보, 관제업무 효율화, 데이터 기반 교통운영 의사결정을 기대할 수 있습니다. 기관이 기대하는 정량·정성 효과로 수정해 주세요.',
    },
  },
  {
    id: 'road-safety-disaster',
    category: '분야 2. 도로교통안전 및 재난',
    title: '분야 2. 도로교통안전 및 재난',
    description: '침수, 범람, 블랙아이스, 재난 예·경보, 도로 위험상황 대응 등 안전관리 기술수요를 작성하는 분야입니다.',
    technologies: ['침수·범람 감지', '블랙아이스 검지', '재난 예·경보', 'AI 기반 재난관제'],
    draft: {
      title: '(작성 예시) 침수·결빙 위험 감지 예·경보 서비스',
      type: '현장 실증/시범사업',
      urgency: '상: 2026년 즉시 추진 필요',
      site: '(작성 예시) 침수 지하차도, 상습 결빙구간',
      readiness: '실증 대상지 확보 가능',
      background: '(작성 예시) 집중호우와 한파 등 기후위험이 증가하면서 도로 이용자의 안전 확보와 신속한 통제 판단을 지원하는 재난 대응체계가 필요합니다. 실제 작성 시 기관의 재난안전 현안을 입력해 주세요.',
      problem: '(작성 예시) 침수·결빙 위험정보가 기상, 수위, CCTV, 현장 신고 등으로 분산되어 있어 위험 판단과 도로통제, 우회 안내가 지연될 수 있습니다. 기관의 현장 문제를 구체화해 주세요.',
      solution: '(작성 예시) 수위센서, 노면온도, 강우량, CCTV, 교통량 데이터를 연계하여 침수·블랙아이스 위험을 AI로 예측하고 관제센터, 안내전광판, 내비게이션, 유관기관 상황전파와 연결합니다.',
      data: '(작성 예시) 강우량, 수위센서, 배수시설 정보, 노면온도, CCTV, 교통량, 사고·통제 이력',
      expected: '(작성 예시) 위험구간 조기 통제, 우회 안내 신속화, 인명피해 예방, 유관기관 공동대응 역량 강화를 기대할 수 있습니다. 실제 기대효과로 수정해 주세요.',
    },
  },
  {
    id: 'daily-transport',
    category: '분야 3. 생활밀착형 교통서비스(민생교통)',
    title: '분야 3. 생활밀착형 교통서비스(민생교통)',
    description: '주차, 불법주정차, 수요응답형 교통, 교통약자 이동지원 등 시민 체감형 서비스 기술수요를 작성하는 분야입니다.',
    technologies: ['공영주차 및 주차정보 연계', '불법주정차 관리', 'DRT', '교통약자 이동지원'],
    draft: {
      title: '(작성 예시) 주차·불법주정차 통합관리 서비스',
      type: '장비/시스템 도입',
      urgency: '중: 1~2년 내 추진 필요',
      site: '(작성 예시) 공영주차장, 상습 불법주정차 구간',
      readiness: '기술/모델 탐색 중',
      background: '(작성 예시) 시민 생활과 밀접한 주차 불편, 불법주정차, 교통약자 이동지원 수요가 증가하고 있어 현장 데이터를 활용한 서비스 개선이 필요합니다. 기관의 민생교통 이슈를 입력해 주세요.',
      problem: '(작성 예시) 주차 가능 정보와 불법주정차 단속정보가 분리되어 시민 안내와 현장 관리가 비효율적이며, 교통약자 이동지원 수요를 세밀하게 반영하기 어렵습니다.',
      solution: '(작성 예시) 공영주차장 점유정보, 불법주정차 감지, DRT 수요, 교통약자 이동 데이터를 연계하여 시민 안내, 단속 우선순위, 이동지원 배차를 통합적으로 지원합니다.',
      data: '(작성 예시) 공영주차장 이용정보, 불법주정차 단속이력, 민원, DRT 호출정보, 교통약자 이동지원 이용이력',
      expected: '(작성 예시) 시민 주차 불편 감소, 단속·안내 효율화, 교통약자 이동권 개선, 민원 감소를 기대할 수 있습니다. 기관별 기대성과를 작성해 주세요.',
    },
  },
  {
    id: 'future-mobility',
    category: '분야 4. 미래 모빌리티',
    title: '분야 4. 미래 모빌리티',
    description: '자율주행·C-ITS, V2X, 디지털트윈 기반 교통운영 등 미래 모빌리티 확산 및 실증 기반 마련을 위한 기술수요를 작성하는 분야입니다.',
    technologies: ['자율주행·C-ITS', 'V2X', '디지털트윈 기반 교통운영'],
    draft: {
      title: '(작성 예시) V2X·디지털트윈 모빌리티 실증 플랫폼',
      type: '현장 실증/시범사업',
      urgency: '상: 2026년 즉시 추진 필요',
      site: '(작성 예시) 자율주행 시범지구, C-ITS 구축구간',
      readiness: '실증 대상지 확보 가능',
      background: '(작성 예시) 미래 모빌리티 확산과 자율주행 실증을 위해 차량·인프라 간 실시간 정보 연계와 디지털트윈 기반 사전 검증 환경이 필요합니다. 실제 작성 시 기관의 실증 수요와 정책 배경을 입력해 주세요.',
      problem: '(작성 예시) 자율주행 실증 인프라와 대규모 주행 데이터가 부족하고, 차량·인프라 간 V2X 정보 연계 및 신기술 사전검증 기반이 충분하지 않습니다.',
      solution: '(작성 예시) 교차로 신호정보, 돌발상황, 보행자 위험정보를 V2X로 공유하고, 3차원 정밀도로망과 교통운영 데이터를 디지털트윈으로 구현하여 실증 전 정책효과와 위험상황을 검증합니다.',
      data: '(작성 예시) 신호정보, 교통량, CCTV, 돌발상황, 정밀도로지도, 자율주행 주행데이터, 관제 로그',
      expected: '(작성 예시) 자율주행 실증 신뢰성 확보, 실증 비용 절감, 안전사고 위험 최소화, 첨단 모빌리티 생태계 기반 조성을 기대할 수 있습니다.',
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
  '기술/모델 탐색 중',
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
let currentGuideIndex = 0;

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

function renderProcessStep(step, index) {
  return `
    <article class="process-card">
      <span>${index + 1}</span>
      <h3>${escapeHtml(step.title)}</h3>
      <ul>
        ${step.items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
      </ul>
    </article>
  `;
}

function renderGuideCard(guide, index) {
  return `
    <article class="guide-slide" data-guide-index="${index}" aria-label="${escapeHtml(guide.title)}">
      <div class="guide-slide-card">
        <div class="guidebook-head">
          <div>
            <p class="guide-label">주요분야(안) ${index + 1} / ${GUIDEBOOKS.length}</p>
            <h2>${escapeHtml(guide.title)}</h2>
            <p>${escapeHtml(guide.description)}</p>
          </div>
          <div class="guide-actions">
            <label class="guide-apply">
              <input type="checkbox" name="guideApply" value="${escapeHtml(guide.id)}" data-guide-apply="${escapeHtml(guide.id)}" />
              <span>이 분야 (작성 예시) 불러오기</span>
            </label>
            <a class="secondary link" href="#survey">설문 작성으로 이동</a>
          </div>
        </div>

        <section class="guide-panel guide-field-panel">
          <h3>대표 기술</h3>
          <div class="tech-list">
            ${guide.technologies.map((tech) => `<span class="tech-chip">${escapeHtml(tech)}</span>`).join('')}
          </div>
          <p class="example-note">
            (작성 예시) 아래 설문에 불러오는 내용은 참고용 초안입니다. 체크 후 기관별 실제 현안, 적용 현장, 보유 데이터, 기대효과에 맞게 수정해 주세요.
          </p>
        </section>
      </div>
    </article>
  `;
}

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
      <section class="guide-overview">
        <div>
          <p class="guide-label">작성 참고 가이드북</p>
          <h2>주요분야(안)</h2>
          <p>아래 4개 분야를 기준으로 기관별 현안 및 기술수요를 작성해 주시기 바랍니다.</p>
        </div>
        <div class="process-grid">
          ${PROCESS_STEPS.map(renderProcessStep).join('')}
        </div>
      </section>
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
  card.querySelector('.demand-top').insertAdjacentHTML(
    'beforeend',
    `<p class="source-note">${escapeHtml(guide.title)} (작성 예시) 반영됨 - 기관 현안에 맞게 수정해 주세요.</p>`,
  );
  show('(작성 예시)가 입력되었습니다. 기관별 실제 현안에 맞게 수정해 주세요.', true);
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
      ${input(`title-${index}`, '기술수요명', '예: AI 영상분석 기반 스마트교차로 운영 최적화')}
      ${select(`type-${index}`, '수요 유형', DEMAND_TYPES)}
      ${select(`category-${index}`, '분야', CATEGORIES)}
      ${select(`urgency-${index}`, '추진 시급성', URGENCY)}
      ${input(`site-${index}`, '적용 대상/현장', '예: 주요 교차로, 침수 취약 지하차도, 공영주차장, 자율주행 시범운행지구')}
      ${select(`readiness-${index}`, '검토 단계', READINESS)}
    </div>

    ${textarea(`background-${index}`, '추진 배경', '관련 국정과제, 정부 보도자료, 지자체 정책, 현장 여건 등 수요가 나온 배경을 작성해 주세요.', true)}
    ${textarea(`problem-${index}`, '현장 문제 및 애로사항', '예: 교통혼잡, 침수·결빙 위험, 주차 불편, V2X 정보 연계 부족 등 실제 현장 문제를 구체적으로 작성해 주세요.', true)}
    ${textarea(`solution-${index}`, '필요 기술/서비스 내용', '예: AI 영상분석, 스마트교차로, 재난 예·경보, DRT, V2X, 디지털트윈 등 필요한 기술과 서비스 흐름을 작성해 주세요.', true)}
    ${textarea(`data-${index}`, '보유 데이터 및 연계 가능 자료', '예: CCTV, 교통량, 신호정보, 사고·민원 이력, 기상·수위센서, 주차정보, 정밀도로지도 등', false)}
    ${textarea(`expected-${index}`, '기대효과 및 활용계획', '예: 통행시간 감소, 안전사고 예방, 민원 감소, 재난 대응시간 단축, 실증비용 절감 등 기대효과를 작성해 주세요.', true)}
    ${textarea(`attachments-${index}`, '참고자료/링크', '기획안, 사진, 보고서, 기사, 기존 시스템 링크 등이 있으면 작성해 주세요.', false, 3)}
    ${textarea(`note-${index}`, '기타 의견', '추가로 전달할 사항을 자유롭게 작성해 주세요.', false, 3)}
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
  show('작성 중인 내용이 브라우저에 임시저장되었습니다.', true);
}

async function submit(event) {
  event.preventDefault();

  if (!document.querySelector('#consent').checked) {
    show('개인정보 수집·활용 및 기술수요 검토 목적 사용 동의가 필요합니다.');
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
