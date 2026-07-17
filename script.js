const districts = {
  "북천지구": {
    number: "01",
    text: "정치·행정·언론의 중심지. 대기업 본사와 고위층이 밀집해 있으며, 총보다 정보와 인맥이 더 강한 힘을 발휘한다.",
    owner: "청룡회"
  },
  "영신지구": {
    number: "02",
    text: "호텔, 클럽, 고급 상권이 밀집한 화려한 지역. 그 이면에서는 유흥업, 사채, 불법 금융이 밤새 움직인다.",
    owner: "영신연합"
  },
  "서림지구": {
    number: "03",
    text: "대학가와 문화거리, IT 기업이 모인 젊은 지역. 해커, 정보상, 해결사와 신흥 세력이 활발하게 활동한다.",
    owner: "진아파"
  },
  "철환지구": {
    number: "04",
    text: "공장, 항구, 물류창고가 밀집한 노동자 지역. 밀수품과 불법 물건이 도시로 들어오는 가장 거대한 통로다.",
    owner: "철환파"
  },
  "개화지구": {
    number: "05",
    text: "재개발에서 밀려난 낙후 구도심. 빈민가, 암시장, 불법 도박장이 얽혀 있으며 작은 조직들이 매일 영역을 다툰다.",
    owner: "개화조"
  }
};

const characters = [
  {
    name: "네코다요", role: "고양이냥냥파 두목", image: 1,
    quote: "“냥젤리부관, 오늘 일은 전부 맡긴다!”",
    looks: "작은 키, 귀여운 인상, 검은 단발, 초록·보라 브릿지",
    personality: "건방지고 짓궂으며 약 올리기를 좋아한다.",
    feature: "출처를 절대 밝히지 않는 범상치 않은 정보 수집 능력의 소유자."
  },
  {
    name: "임나리", role: "냥꼬리 요원", image: 15,
    quote: "“자, 잠깐만요… 생각할 시간을 조금만 주세요!”",
    looks: "보라색 단발, 눈을 완전히 가리는 앞머리, 보라색 눈으로 추정",
    personality: "소심하고 겁이 많지만 위기에서는 빠르게 해결책을 찾는다.",
    feature: "화학과 출신. 30% 요정가루 제조와 간단한 해킹, 특수 상태에서 최상급 사격이 가능하다."
  },
  {
    name: "강미라", role: "철환파 두목", image: 29,
    quote: "“약속은 지킨다. 대신 우리 식구를 건드리면 끝까지 간다.”",
    looks: "갈색 번헤어, 주황색 눈, 모피 의상, 노란 렌즈 선글라스",
    personality: "조직원을 가족처럼 여기며 의리와 약속을 중시한다.",
    feature: "신생 조직에는 무관심하지만 사업과 영역을 침범하면 혹독하게 응징한다."
  },
  {
    name: "차세라", role: "영신연합 부두목", image: 43,
    quote: "“네가 감히 내 시간을 쓰게 만들었어?”",
    looks: "올백한 긴 빨간 머리, 빨간 눈, 빨간 드레스",
    personality: "자신감과 자존감이 지나치게 높으며 타인을 쉽게 얕본다.",
    feature: "입원한 아버지를 대신해 영신연합을 이끌며 명성과 권위로 지위를 유지한다."
  },
  {
    name: "서이진", role: "진아파 두목", image: 58,
    quote: "“감정은 변수다. 제거하면 답은 단순해진다.”",
    looks: "은발 히메컷, 빛나는 파란 눈, 은테 안경, 검은 터틀넥",
    personality: "감정을 배제하고 기계처럼 냉철하게 판단한다.",
    feature: "초소형 컴퓨터가 눈에 이식되어 있으며 판을 짜고 어부지리를 취하는 데 능하다."
  },
  {
    name: "백진영", role: "청룡회 두목", image: 73,
    quote: "“본좌를 외모만 보고 판단한 대가는 비싸다.”",
    looks: "검은 양쪽 번헤어, 파란 눈, 파란 용무늬 치파오",
    personality: "자존심과 자존감이 높고 지능적이며 무시당하는 것을 싫어한다.",
    feature: "요정가루 특이체질로 효과와 금단이 거의 없으며 주기적으로 흡입해 젊음을 유지한다."
  },
  {
    name: "한재희", role: "개화조 두목", image: 88,
    quote: "“복잡하게 생각하지 마. 썩은 놈부터 치우면 돼.”",
    looks: "노란 눈, 검은 긴머리, 검은 탱크톱, 문신과 피어싱",
    personality: "말이 험하고 과격하지만 조직원을 친구처럼 대한다.",
    feature: "길바닥 출신 최상급 사수. 부패 기업과 정치인의 몰락을 목표로 한다."
  },
  {
    name: "황도진", role: "무영시 시장", image: 103,
    quote: "“도시는 원래 돈과 인맥으로 굴러가는 법이야.”",
    looks: "노란 올백머리, 선글라스, 정장",
    personality: "유흥을 즐기는 전형적인 부패 정치인.",
    feature: "청룡회의 지원으로 시장이 되었으며 그들의 비리와 범죄를 덮어준다."
  }
];

const districtDetail = document.querySelector("#districtDetail");
document.querySelectorAll(".district").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".district").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    const data = districts[button.dataset.district];
    districtDetail.innerHTML = `
      <div>
        <p class="detail-number">DISTRICT ${data.number}</p>
        <h3>${button.dataset.district}</h3>
      </div>
      <p>${data.text}</p>
      <span class="territory-owner">지배 조직 · ${data.owner}</span>
    `;
  });
});

const list = document.querySelector("#characterList");
characters.forEach((character, index) => {
  const button = document.createElement("button");
  button.className = `character-button ${index === 0 ? "active" : ""}`;
  button.innerHTML = `
    <img src="https://raw.githubusercontent.com/Umgic/F/main/F${character.image}.png" alt="" loading="lazy">
    <span><strong>${character.name}</strong><small>${character.role}</small></span>
    <span class="arrow">→</span>
  `;
  button.addEventListener("click", () => showCharacter(character, button));
  list.appendChild(button);
});

function showCharacter(character, button) {
  document.querySelectorAll(".character-button").forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  const image = document.querySelector("#profileImage");
  image.src = `https://raw.githubusercontent.com/Umgic/F/main/F${character.image}.png`;
  image.alt = character.name;
  document.querySelector("#profileName").textContent = character.name;
  document.querySelector("#profileRole").textContent = character.role;
  document.querySelector("#profileQuote").textContent = character.quote;
  document.querySelector("#profileLooks").textContent = character.looks;
  document.querySelector("#profilePersonality").textContent = character.personality;
  document.querySelector("#profileFeature").textContent = character.feature;
}

document.querySelectorAll(".concentration-scale button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelector("#dustLevel").textContent = button.dataset.level;
    document.querySelector("#dustText").textContent = button.dataset.text;
  });
});

const header = document.querySelector(".site-header");
window.addEventListener("scroll", () => header.classList.toggle("scrolled", scrollY > 20));

const menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", () => {
  const open = document.body.classList.toggle("menu-open");
  menuButton.setAttribute("aria-expanded", open);
});
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.body.classList.remove("menu-open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: .1 });
document.querySelectorAll(".reveal").forEach(element => observer.observe(element));
