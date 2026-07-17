const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 20));

const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', () => {
  const open = document.body.classList.toggle('menu-open');
  menuButton.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

const districts = {
  bukcheon: { number:'01', name:'북천지구', owner:'지배 조직 · 청룡회', description:'정치·행정·언론 중심지. 대기업 본사와 고위층이 많으며 정보와 권력으로 움직이는 세력이 장악한다.' },
  yeongsin: { number:'02', name:'영신지구', owner:'지배 조직 · 영신연합', description:'호텔·클럽·고급 상권이 밀집한 화려한 지역. 이면에서는 유흥업·사채·불법 금융이 돌아간다.' },
  seorim: { number:'03', name:'서림지구', owner:'지배 조직 · 진아파', description:'대학·문화거리·IT 기업이 많은 젊은 지역. 해커·정보상·해결사 등 두뇌형 세력이 활동한다.' },
  cheolhwan: { number:'04', name:'철환지구', owner:'지배 조직 · 철환파', description:'공장·항구·물류창고가 밀집한 노동자 지역. 밀수품과 불법 물건이 도시로 유입되는 통로다.' },
  gaehwa: { number:'05', name:'개화지구', owner:'지배 조직 · 개화조', description:'재개발에서 밀려난 낙후 구도심. 빈민가·암시장·불법 도박장이 뒤엉킨 무법지대다.' }
};

const number = document.querySelector('.district-number');
const name = document.querySelector('#district-name');
const owner = document.querySelector('#district-owner');
const description = document.querySelector('#district-description');

document.querySelectorAll('.district-tab').forEach(button => {
  button.addEventListener('click', () => {
    const district = districts[button.dataset.district];
    document.querySelectorAll('.district-tab').forEach(tab => {
      tab.classList.remove('active');
      tab.setAttribute('aria-selected', 'false');
    });
    button.classList.add('active');
    button.setAttribute('aria-selected', 'true');
    number.textContent = district.number;
    name.textContent = district.name;
    owner.textContent = district.owner;
    description.textContent = district.description;
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
