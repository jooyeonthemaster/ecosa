// Structured content distilled from about.txt to power pages

export const nav = [
  { href: "/brand-story", label: "Brand Story" },
  { href: "/company", label: "회사소개" },
  { 
    href: "/products", 
    label: "제품소개",
    dropdown: [
      { href: "/products#ecosh", label: "에코쉬 무수소변기" },
      { href: "/products#damaga", label: "다막아 하수구트랩" },
      { href: "/products#air-clean", label: "Air Clean Care" },
      { href: "/products#dress-care", label: "Dress Care" }
    ]
  },
  { href: "/innovation", label: "기술혁신" },
  { href: "/cases", label: "설치사례" },
  { href: "/support", label: "고객지원" },
  { href: "/contact", label: "Contact Us" },
] as const;

export const languages = [
  { code: "ko", label: "한국어" },
  { code: "en", label: "English" },
  { code: "zh", label: "中文" },
  { code: "ja", label: "日本語" }
] as const;

// Hero Slides (4 slides from about.txt)
export const heroSlides = [
  {
    id: "vision",
    title: "지구의 가장 소중한 가치를 지키는 기업,\n에코사",
    subtitle: "자연과 사람의 조화로운 공존을 추구하는 지속가능 경영을 통해 전 세계 고객들에게 초절약의 기쁨을 선사합니다",
    background: "galaxy", // 은하수 이미지
    stats: [
      { label: "개인 평균 1일 물 사용", value: "90L" },
      { label: "1회 소변 시 물 낭비", value: "8L" },
      { label: "에코사 솔루션 연간 절수", value: "30,000L" }
    ],
    cta: [
      { label: "에코사 스토리 보기", href: "/company" },
      { label: "제품 둘러보기", href: "/products" }
    ]
  },
  {
    id: "ecosh",
    title: "물은 생명입니다\n물 없는 친환경 무수소변기",
    subtitle: "청와대, 평창올림픽이 선택한 대한민국 No.1 무수소변기",
    background: "product-ecosh",
    features: {
      title: "4 ZERO",
      items: [
        { icon: "💧", title: "Water Zero", desc: "100% 물 절약" },
        { icon: "🚫", title: "Odor Zero", desc: "악취 원천 차단" },
        { icon: "⚡", title: "Energy Zero", desc: "전력 소비 제로" },
        { icon: "💰", title: "Cost Zero", desc: "유지비 최소화" }
      ]
    },
    highlights: [
      "특허받은 매직밸브 기술",
      "1회 사용 시 4리터 물 절약",
      "연간 유지보수 1-2회",
      "ABS 재질로 Yellow Stain 억제"
    ],
    cta: [
      { label: "에코쉬 자세히 보기", href: "/products#ecosh" },
      { label: "설치 문의하기", href: "/contact" }
    ]
  },
  {
    id: "damaga",
    title: "심장판막 원리로 완벽 밀폐 - 다막아",
    subtitle: "특허 10-2323048호 | 국내 유일 일체형 실리콘 하수구트랩",
    background: "product-damaga",
    technology: [
      "심장판막 원리 적용",
      "Y형 하단부 + 회오리 유도관",
      "100% 일체형 실리콘 재질",
      "KTL 누설 테스트 통과"
    ],
    demo: "드라이아이스 밀폐력 테스트 영상",
    cta: [
      { label: "다막아 성능 확인", href: "/products#damaga" },
      { label: "무료 샘플 신청", href: "/contact?sample=damaga" }
    ]
  },
  {
    id: "air-dress-care",
    title: "Care for Indoor Air Pollution",
    subtitle: "실내 공기 정화와 의류 케어의 새로운 기준",
    background: "product-care",
    functions: [
      "CO₂ 이산화탄소 제거",
      "황색포도상구균/대장균 항균",
      "의류 살균 및 탈취",
      "실내 공기질 개선"
    ],
    applications: ["가정", "호텔", "의료시설", "교육기관"],
    cta: [
      { label: "제품 카탈로그 보기", href: "/products#air-clean" }
    ]
  }
];

// Core Values Section
export const coreValues = {
  title: "에코사가 만드는 지속가능한 미래",
  items: [
    {
      id: "water-conservation",
      icon: "💧",
      title: "Water Conservation - 물 보존",
      headline: "2025년까지 전 세계 50% 물 부족 해결",
      stats: [
        { year: "2000년도", label: "물 부족 인구", value: "전체의 8%" },
        { year: "2025년도", label: "예상", value: "전체의 50%" }
      ],
      contributions: [
        "무수소변기로 연간 가정당 30,000L 절수",
        "상수도관 불필요로 설치비 50% 절감",
        "동파 걱정 없는 4계절 안정적 운영"
      ]
    },
    {
      id: "hygiene-health",
      icon: "🏥",
      title: "Hygiene & Health - 위생과 건강",
      headline: "건식 환경으로 박테리아 번식 원천 차단",
      comparison: {
        before: "습식 환경 (세균 번식)",
        after: "건식 환경 (위생적)"
      },
      certifications: [
        "KOTITI 항균 테스트 통과",
        "KTL 누설 테스트 인증",
        "디자인 등록증"
      ]
    },
    {
      id: "cost-efficiency",
      icon: "💰",
      title: "Cost Efficiency - 경제성",
      headline: "초기 투자 대비 2년 내 투자비 회수",
      calculator: {
        inputs: ["설치 대수", "예상 절수량"],
        outputs: ["연간 절감 비용"]
      },
      comparison: "일반 소변기 vs 에코쉬 TCO 비교"
    }
  ]
};

// Products Portfolio
export const products = {
  title: "에코사의 혁신적인 제품 포트폴리오",
  ecosh: {
    title: "에코쉬 무수소변기 시리즈",
    description: "물 한 방울 사용하지 않는 혁신적인 소변기 시스템",
    models: [
    {
      model: "EU-01",
        type: "벽부형",
        specs: {
          dimensions: "385mm × 710mm × 350mm",
          weight: "2.7kg",
          material: "PMMA",
          colors: ["White", "Gold"],
          drainage: "50mm"
        },
        features: ["컴팩트한 디자인", "소규모 공간 최적화"],
        applications: ["소규모 화장실", "이동식 화장실"],
        price: "별도 문의"
    },
    {
      model: "EU-04/05",
        type: "스탠드형/벽부형",
        specs: {
          dimensions: "390mm × 1095mm(스탠드) / 983mm(벽부형) × 420mm",
          weight: "3.05kg(스탠드) / 3kg(벽부형)",
        material: "ABS",
          colors: ["White", "Gold"],
          drainage: "50mm"
        },
        features: ["대용량 사용 환경 최적화"],
        applications: ["대형 건물", "공공시설", "상업시설"],
        price: "별도 문의"
      }
    ],
    coreTechnology: [
      {
        name: "매직밸브 시스템",
        description: "특허받은 밀폐 기술",
        benefits: ["소변 통과 시에만 개방", "악취 역류 100% 차단", "해충 유입 원천 봉쇄"]
      },
      {
        name: "친수 코팅 기술",
        description: "특수 코팅으로 오염 방지",
        benefits: ["Yellow Stain 발생 억제", "청소 주기 연장", "위생적 표면 유지"]
      },
      {
        name: "인체공학적 디자인",
        description: "소변 튐 최소화 설계",
        benefits: ["최적의 사용 각도", "미끄럼 방지 바닥", "현대적 미니멀 디자인"]
      }
    ],
    installation: [
      "현장 실사: 설치 환경 분석 및 최적 모델 선정",
      "견적 제공: 제품 및 설치비 상세 견적",
      "계약 체결: 납품 일정 및 조건 확정",
      "제품 설치: 전문 기술진 방문 설치 (2-3시간 소요)",
      "사용 교육: 관리자 대상 유지보수 교육",
      "A/S 지원: 정기 점검 및 즉시 대응 체계"
    ],
    maintenance: {
      daily: ["마른 걸레로 표면 청소", "전용 스프레이 분사 (선택사항)"],
      weekly: ["배수구 점검", "밸브 상태 확인"],
      yearly: ["매직밸브 교체 (1-2회)", "전체 시스템 점검"]
    },
    roi: {
      conventional: {
        water: 1200000,
        electricity: 240000,
        cleaning: 180000,
        maintenance: 360000,
        total: 1980000
      },
      ecosh: {
        water: 0,
        electricity: 0,
        valve: 200000,
        cleaning: 60000,
        total: 260000
      },
      savings: 1720000,
      payback: "약 1.5년"
    }
  },
  damaga: {
    title: "다막아 하수구트랩",
    description: "심장판막 원리를 적용한 국내 유일 일체형 실리콘 하수구트랩",
    patent: "10-2323048호",
    coreTechnology: [
      {
        name: "심장판막 원리",
        description: "인체 심장의 판막 구조 응용",
        benefits: ["물의 장력만으로 개폐", "역류 완벽 차단", "특허 10-2323048호"]
      },
      {
        name: "일체형 실리콘 구조",
        description: "국내 유일 100% 일체형",
        benefits: ["유격(틈) 제로 설계", "변형/파손 없는 내구성", "끓는 물에도 변형 없음"]
      },
      {
        name: "Y형 배수 시스템",
        description: "Y형 하단부 설계",
        benefits: ["회오리 유도관 적용", "강력한 배수력", "물고임 현상 제거"]
      }
    ],
    specs: {
      material: "ABS + 실리콘 일체형",
      size: "범용 (모든 배수구 호환)",
      colors: ["투명", "화이트"],
      heatResistance: "100°C",
      lifespan: "반영구적",
      certifications: ["KTL", "KOTITI"]
    },
    comparison: {
      headers: ["항목", "다막아", "A사", "B사", "C사"],
      rows: [
        ["제조국", "한국", "한국", "중국", "중국"],
        ["재질", "ABS+실리콘", "플라스틱", "실리콘+스테인리스", "PPS"],
        ["구조", "일체형", "분리형", "분리형", "분리형"],
        ["밀폐력", "완벽(유격 없음)", "보통", "약함", "약함"],
        ["배수력", "강력(Y형)", "느림(일자형)", "느림(일자형)", "매우 느림"],
        ["내구성", "반영구적", "1-2년", "6개월", "6개월"],
        ["가격", "중", "저", "고", "저"],
        ["A/S", "국내 즉시", "국내", "불가", "불가"]
      ]
    },
    installation: [
      "기존 배수구 덮개 제거",
      "배수구 청소 및 건조",
      "다막아 규격 확인",
      "제품 삽입 및 고정",
      "물 테스트 실시",
      "밀폐 상태 확인"
    ],
    applications: {
      residential: ["욕실", "주방", "베란다"],
      commercial: ["음식점", "카페", "병원"],
      public: ["학교", "관공서", "지하철"],
      special: ["식품공장", "연구소"]
    },
    casestudies: [
      {
        title: "30년 된 아파트 하수구 악취",
        problem: "여름철 심한 악취와 나방파리",
        solution: "다막아 설치 후 100% 차단",
        testimonial: "20년 고민이 하루에 해결됐어요"
      },
      {
        title: "음식점 주방 배수구",
        problem: "바퀴벌레 출몰과 역류",
        solution: "전 배수구 다막아 설치",
        testimonial: "위생 점검 만점 받았습니다"
      }
    ]
  },
  airCleanCare: {
    title: "Air Clean Care",
    description: "실내 공기 오염과 의류 관리의 토털 솔루션",
    background: [
      "실내 공기 오염도가 실외보다 2-5배 높음",
      "다양한 원인: 건축자재, 가구, 세제, 곰팡이",
      "특히 드레스룸과 같은 밀폐 공간 문제 심각",
      "의류에 축적되는 세균과 냄새 문제"
    ],
    functions: {
      airPurification: [
        "휘발성유기화합물(VOCs) 제거",
        "미세먼지 필터링",
        "음이온 발생",
        "습도 조절"
      ],
      gasRemoval: [
        "포름알데히드 분해",
        "암모니아 중화",
        "CO₂ 농도 감소",
        "라돈 저감"
      ]
    },
    applications: {
      residential: {
        dressRoom: "의류 케어 + 공기 정화",
        bedroom: "숙면 환경 조성",
        livingRoom: "가족 건강 보호",
        shoeCloset: "악취 제거 및 살균"
      },
      commercial: {
        hotel: "객실 공기질 프리미엄화",
        fitness: "락커룸 위생 관리",
        hospital: "대기실 공기 살균",
        office: "직원 건강 관리"
      }
    },
    specs: {
      coverage: "10㎡ ~ 100㎡ (모델별)",
      noise: "30dB 이하",
      power: "20W ~ 100W",
      filters: ["HEPA", "활성탄", "광촉매"],
      lifespan: {
        filter: "6개월",
        unit: "10년"
      }
    }
  },
  dressCare: {
    title: "Dress Care",
    description: "의류 살균 및 탈취의 새로운 기준",
    functions: {
      sterilization: [
        "UV-C 살균램프",
        "광촉매 살균",
        "99.9% 세균 제거",
        "진드기 박멸"
      ],
      care: [
        "냄새 분자 분해",
        "섬유 보호 코팅",
        "정전기 방지",
        "습기 제거"
      ]
    }
  },
  accessories: [
    {
      name: "A사 카트리지 (수입)",
      capacity: "약 4-5회/1년",
      features: ["물청소 불가", "악취 역류 방지"]
    },
    {
      name: "B사 싱글밸브 (수입)",
      capacity: "2-3회/1년",
      features: ["물청소 가능", "설치 교체 용이"]
    },
    {
      name: "밀폐밸브 & 스프레이 세정제",
      options: ["물청소 불가 / 가능 옵션"],
      includes: ["전용 세정제 포함"]
    }
  ]
};

// Installation Cases
export const installationCases = {
  title: "대한민국 주요 기관이 선택한 에코사",
  categories: {
    government: {
      title: "Government 정부/공공기관",
      cases: [
        {
          name: "청와대",
          description: "국가 대표 건물의 친환경 선택",
          year: 2023,
          quantity: 50,
          savings: "연간 1,500톤 절수",
          highlight: "국빈 접견실 우선 적용",
          testimonial: "국가 대표 건물의 품격 상승"
        },
        {
          name: "평창동계올림픽",
          description: "세계인이 경험한 K-친환경 기술",
          year: 2018,
          quantity: 200,
          savings: "대회 기간 5,000톤 절수",
          highlight: "전 경기장 적용",
          testimonial: "친환경 올림픽 구현"
        },
        {
          name: "여주시청",
          description: "공공기관 물 절약 모범 사례"
        },
        {
          name: "강원지방조달청",
          description: "동파 문제 완벽 해결"
        },
        {
          name: "서울 물 연구소",
          description: "수자원 전문가들의 선택"
        }
      ]
    },
    commercial: {
      title: "Commercial 상업시설",
      cases: [
        {
          name: "홈플러스 상봉점 & 안성 물류센터",
          description: "대형 유통업체 전국 확대 적용"
        },
        {
          name: "코레일 부산경남지역본부",
          description: "연간 수천만원 수도요금 절감"
        },
        {
          name: "부산해운대 센텀누리 포스코건설 THE# APT",
          description: "프리미엄 아파트 기본 사양"
        },
        {
          name: "부산 화명역",
          description: "대중교통 시설 위생 혁신"
        }
      ]
    },
    parks: {
      title: "Public Parks 공원/관광지",
      cases: [
        {
          name: "남이섬",
          description: "연간 300만 관광객이 경험하는 친환경"
        },
        {
          name: "분당 율동공원, 이천 설봉공원",
          description: "시민 공원의 새로운 기준"
        },
        {
          name: "제주 서귀포 칠십리공원",
          description: "청정 제주의 선택"
        },
        {
          name: "국립공원",
          locations: ["대둔산", "내장산", "북한산"]
        },
        {
          name: "관광지",
          locations: ["포천 베어스타운", "고성 공룡휴게소"]
        }
      ]
    },
    education: {
      title: "Education 교육기관",
      cases: [
        {
          name: "삼괴고등학교",
          description: "미래 세대를 위한 친환경 교육 환경"
        },
        {
          name: "가평 예원 어린이집",
          description: "아이들의 건강을 지키는 선택"
        }
      ]
    }
  },
  testimonials: [
    {
      name: "박OO 관리소장",
      company: "부산해운대 센텀누리",
      content: "기존 도기 소변기에 비해 가벼운 무게 때문에 설치가 굉장히 간편했고, 이용하는 사람들에게서 악취도 전혀 나지 않는다는 말을 들을 때마다 괜히 뿌듯해집니다."
    },
    {
      name: "박OO 파트장",
      company: "코레일 부산경남",
      content: "기차 역사 내의 수도요금은 상상을 초월합니다. 에코쉬 소변기를 사용한 후 수도사용량도 현저히 줄고 냄새도 전혀 나지 않았습니다. 하루 한번 물청소의 간편한 관리도 큰 매력이구요."
    },
    {
      name: "박OO 주무관",
      company: "강원지방조달청",
      content: "여름에는 악취가 심하고 겨울에는 동파 때문에 늘 난방을 가동해야 했습니다. 하지만 에코쉬 소변기를 설치하고는 이러한 걱정이 싹 사라졌습니다."
    }
  ],
  industryStats: {
    // about.txt에 구체적인 산업별 통계 수치가 언급되지 않아 제거
    // 실제 데이터 수집 후 업데이트 예정
    education: {
      description: "다수의 교육기관에서 사용 중"
    },
    medical: {
      description: "의료시설에서 위생 개선 효과 확인"
    },
    commercial: {
      description: "상업시설에서 경제성 및 만족도 향상"
    }
  },
  globalCases: {
    // about.txt에 구체적인 해외 진출 사례가 언급되지 않아 제거
    // 향후 실제 해외 진출 시 업데이트 예정
  }
};

// Innovation & Technology
export const innovation = {
  title: "에코사만의 차별화된 특허 기술",
  rdCenter: {
    title: "미래를 만드는 에코사 기술연구소",
    areas: [
      {
        name: "소재 개발",
        focus: ["친환경 신소재 연구", "항균 코팅 기술", "내구성 향상 연구"]
      },
      {
        name: "유체 역학",
        focus: ["최적 배수 설계", "악취 차단 메커니즘", "압력 제어 기술"]
      },
      {
        name: "IoT 융합",
        focus: ["스마트 센서 개발", "원격 관리 시스템", "빅데이터 분석"]
      }
    ],
    achievements: {
      patents: { applied: 15, registered: 8 },
      designs: { registered: 12 },
      trademarks: { registered: 5 },
      papers: { published: 23 }
    }
  },
  patents: [
    {
      number: "10-2323048",
      title: "심장판막 원리 하수구트랩",
      description: "물의 장력만으로 개폐",
      effect: "100% 악취 차단"
    },
    {
      number: "10-2324365",
      title: "무수소변기 매직밸브",
      description: "자동 밀폐 시스템",
      effect: "물 사용 제로"
    },
    {
      number: "10-2326268",
      title: "Y형 배수 유도관",
      description: "회오리 배수 구조",
      effect: "배수력 200% 향상"
    }
  ],
  certifications: [
    "벤처기업확인서",
    "경영시스템인증서 (㈜푸르몽)",
    "디자인등록증 제 30-1062031호",
    "디자인등록증 제 30-1071309호",
    "상표등록증 제 40-1543231호",
    "KOTITI 인증서",
    "KTL 인증서"
  ],
  comparisonTable: {
    headers: ["구분", "에코사 Waterless", "기존 Water-flushing"],
    rows: [
      ["절수/절전", "물 사용량 제로 (100% 절감)", "사용시 최대 4리터 소비 + 자동센서 전력"],
      ["소재", "ABS 재질 (Yellow Stain 억제)", "도기 재질"],
      ["배수관", "상수도관 불필요", "상수도관 + 배수관 필수"],
      ["악취차단", "특허 밸브시스템 완벽 차단", "배수관 항시 개방으로 역류"],
      ["위생", "건식 환경 (세균 억제)", "습식 환경 (세균 번식)"],
      ["소변 튐", "최소화 설계", "수직면으로 인한 다수 튐 현상"],
      ["유지보수", "연 1-2회 밸브 교환", "지속적 물/전기 사용"],
      ["환경보호", "CO2 억제, 화학세정제 최소화", "지속적 자원 소비"]
    ]
  },
  roadmap: {
    shortTerm: {
      period: "2025-2027",
      goals: [
        "AI 기반 사용 패턴 분석",
        "자동 청소 시스템 개발",
        "항균 신소재 상용화"
      ]
    },
    mediumTerm: {
      period: "2028-2030",
      goals: [
        "완전 자동화 화장실 시스템",
        "에너지 자급자족 모델",
        "글로벌 표준 인증"
      ]
    },
    longTerm: {
      period: "2031-2035",
      goals: [
        "첨단 화장실 시스템 완성",
        "물 없는 도시 인프라 구축",
        "탄소 네거티브 달성"
      ]
    }
  }
};

// Company Information
export const company = {
  ceoMessage: {
    title: "자연과 사람의 조화로운 공존을 꿈꿉니다",
    content: `안녕하십니까, 에코사 대표이사입니다.

에코사는 'A company that protects the most precious values for the world'라는 비전 아래, 지구상에서 가장 소중한 자원인 물을 보호하고, 인류의 건강한 삶을 지키기 위해 끊임없이 혁신하고 있습니다.

우리가 매일 사용하는 화장실에서 시작된 작은 변화가 지구 전체의 물 부족 문제 해결에 기여할 수 있다는 믿음으로, 세계 최고 수준의 무수소변기 기술을 개발했습니다.

청와대, 평창올림픽을 비롯한 대한민국 주요 시설이 에코사를 선택한 이유는 단순한 제품이 아닌, 미래를 위한 가치에 투자했기 때문입니다.

에코사는 앞으로도 혁신적인 기술과 진정성 있는 서비스로 고객 여러분께 '초절약의 기쁨'을 선사하고, 우리 아이들에게 깨끗한 지구를 물려주기 위해 최선을 다하겠습니다.

감사합니다.`
  },
  overview: {
    name: "주식회사 에코사 (ECOSA Co., Ltd.)",
    established: "2025년 5월 30일",
    ceo: "조수현",
    business: [
      "친환경 위생기기 제조 및 판매",
      "무수소변기 시스템 개발",
      "실내 공기질 개선 솔루션",
      "하수구 악취/해충 차단 시스템"
    ],
    headquarters: "경기도 수원시 장안구 이목로 17 525호, 526호",
    contact: {
      phone: "010-9019-3692",
      email: "J_dream4u@naver.com"
    }
  },
  vision: "A company that protects the most precious values for the world",
  mission: [
    "자원 보호: 물과 에너지를 절약하는 혁신적 기술 개발",
    "환경 보전: CO2 감소와 화학물질 사용 최소화",
    "건강 증진: 위생적이고 안전한 생활환경 조성",
    "경제 기여: 합리적 가격과 낮은 유지비용으로 경제적 가치 창출",
    "사회 공헌: 물 부족 지역 지원 및 친환경 교육 확대"
  ]
};

// Customer Support
export const support = {
  title: "고객지원",
  services: {
    as: {
      title: "A/S 신청",
      channels: [
        { type: "온라인", info: "24시간 온라인 접수" },
        { type: "전화", info: "010-9019-3692" }
      ],
      responseTime: "평균 처리 시간: 24시간 이내"
    },
    maintenance: {
      title: "정기 점검 서비스",
      features: [
        "분기별 정기 점검",
        "연간 계약 고객 우대",
        "점검 리포트 제공",
        "예방 정비 실시"
      ]
    }
  },
  resources: {
    title: "다운로드 센터",
    downloads: [
      { name: "제품 카탈로그", format: "PDF" },
      { name: "설치 매뉴얼", format: "PDF/동영상" },
      { name: "유지보수 가이드", format: "PDF" },
      { name: "인증서 모음", format: "ZIP" },
      { name: "3D CAD 도면", format: "DWG" }
    ],
    education: [
      "관리자 교육 영상",
      "청소 방법 가이드",
      "문제 해결 FAQ",
      "웨비나 녹화 영상"
    ]
  },
  faq: [
    {
      question: "정말 물을 전혀 사용하지 않나요?",
      answer: "네, 에코쉬 무수소변기는 물을 한 방울도 사용하지 않습니다. 특허받은 매직밸브 기술로 완벽한 밀폐와 배수가 가능합니다."
    },
    {
      question: "악취는 어떻게 차단하나요?",
      answer: "심장판막 원리를 적용한 밸브가 사용 후 즉시 닫혀 하수관의 악취가 역류하지 않습니다. 추가로 친수 코팅이 되어 있어 냄새 발생 자체를 억제합니다."
    },
    {
      question: "청소는 어떻게 하나요?",
      answer: "일반 변기보다 훨씬 간단합니다. 하루 한 번 마른 걸레로 닦아주고, 필요시 전용 스프레이를 사용하면 됩니다. 물청소가 필요 없어 관리가 매우 편리합니다."
    },
    {
      question: "설치비용은 얼마나 드나요?",
      answer: "설치 환경과 수량에 따라 다르지만, 일반적으로 기존 소변기 대비 초기 비용은 약간 높습니다. 하지만 물과 전기를 사용하지 않아 1-2년 내에 투자비를 회수할 수 있습니다."
    },
    {
      question: "겨울철 동파 위험은 없나요?",
      answer: "물을 사용하지 않기 때문에 동파 위험이 전혀 없습니다. 영하 30도에서도 정상 작동하며, 난방비 절감 효과도 큽니다."
    },
    {
      question: "A/S는 어떻게 받나요?",
      answer: "전국 서비스 네트워크를 통해 24시간 내 방문 서비스를 제공합니다. 제품 보증 기간은 2년이며, 소모품인 밸브는 연 1-2회 교체가 필요합니다."
    }
  ],
  quoteForm: {
    title: "온라인 견적 신청",
    fields: [
      { name: "company", label: "회사/기관명", required: true },
      { name: "contact", label: "담당자명", required: true },
      { name: "phone", label: "연락처", required: true },
      { name: "email", label: "이메일", required: true },
      { name: "address", label: "설치 장소 주소", required: true },
      { name: "buildingType", label: "건물 유형", required: false },
      { name: "quantity", label: "예상 설치 대수", required: false },
      { name: "currentProduct", label: "현재 사용 중인 제품", required: false },
      { name: "waterBill", label: "월평균 수도 요금", required: false },
      { name: "installDate", label: "희망 설치 시기", required: false },
      { name: "inquiry", label: "추가 문의 사항", required: false }
    ]
  }
};

// Contact Information
export const contact = {
  title: "Contact Us",
  headquarters: {
    title: "본사",
    address: "경기도 수원시 장안구 이목로 17 525호, 526호",
    phone: "010-9019-3692",
    email: "J_dream4u@naver.com",
    hours: "평일 09:00-18:00"
  },
  customerService: {
    title: "고객센터",
    phone: "010-9019-3692",
    hours: "평일 09:00-18:00",
    emergency: "010-9019-3692 (24시간)"
  },

  partnership: {
    title: "제휴 문의",
    programs: ["대리점 모집", "시공 파트너", "기술 제휴", "수출 파트너"],
    benefits: ["독점 판매권", "기술 지원", "마케팅 지원", "교육 프로그램"]
  }
};

// Footer Information
export const footer = {
  company: {
    name: "(주)에코사",
    ceo: "대표이사: 조수현",
    businessNumber: "사업자등록번호: 590-03-03549",
    address: "주소: 경기도 수원시 장안구 이목로 17 525호, 526호"
  },
  quickLinks: [
    "회사소개",
    "제품소개",
    "설치사례",
    "고객지원",
    "공지사항",
    "개인정보처리방침",
    "이용약관"
  ]
};

// Call to Action Section
export const cta = {
  title: "지금 바로 에코사와 함께하세요",
  actions: [
    {
      title: "무료 상담 신청",
      description: "전문 컨설턴트가 맞춤 솔루션을 제안합니다",
      href: "/contact?type=consultation"
    },
    {
      title: "견적 요청",
      description: "설치 규모에 따른 정확한 견적을 받아보세요",
      href: "/contact?type=quote"
    },
    {
      title: "카탈로그 다운로드",
      description: "상세 제품 사양서를 확인하세요",
      href: "/support#downloads"
    },
    {
      title: "샘플 신청",
      description: "다막아 무료 샘플을 체험해보세요",
      href: "/contact?type=sample"
    }
  ]
};

// Flush vs Waterless (항목별 VS 비교)
export const productsComparison = {
  title: "수세식과 에코사 무수소변기",
  left: {
    name: "수세식 소변기",
    items: [
      "파손될 위험성 有",
      "무거움",
      "내부면 수직면 — 튐 현상 많음",
      "하수관 물로 항시 개방 — 악취 역류",
      "겨울철 동파 가능성 有 (난방비 발생)",
    ],
  },
  right: {
    name: "에코사 무수소변기",
    items: [
      "파손될 위험성 無",
      "가벼움",
      "내부면 완만한 곡률형 — 튐 현상 적음",
      "매직밸브로 하수구 악취 차단",
      "겨울철 동파 가능성 無 (난방비 X)",
    ],
  },
} as const;