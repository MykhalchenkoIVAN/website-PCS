'use strict'

const header = document.querySelector('.header');
const sectionHWW = document.querySelector('.how_we_work');
const sectionHWWWrapper = document.querySelector('.section_hww_wrapper');
const sectionAboutAs = document.querySelector('.about_as')
const container = document.querySelector('.container')

const sectionHwwWrapper = document.querySelector('.section_hww_wrapper')
const images = document.querySelectorAll('.img_how');
const modalWindow = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseButton = document.querySelector('.close_modal_window ');
const modalImage = document.querySelector('.modal_images');
const body = document.querySelector('.body');
const arrLeft = document.querySelector('.arrow_left');
const arrRight = document.querySelector('.arrow_right');
const modalWindowCall = document.querySelector('.form_intro');
const oferCards = document.querySelectorAll('.ofer_card');

const btnCall1 = document.getElementById('btn1');

const oferArticle0 = `<section class="article">
<div class="article_div">
  <h2 class="article_title">Czyszczenie maszyn przemysłowych</h2>
  <div class="section-text wow fadeInDown">
    <p>
      Świadczymy profesjonalne usługi w&nbsp;zakresie czyszczenia maszyn
      przemysłowych!
    </p>
    <p>
      Pierwsze kroki nasza firma stawiała w&nbsp;sektorze produkcyjnym
      „automotive”, gdzie przy wsparciu działu utrzymania ruchu
      wyczyściliśmy kilkaset obrabiarek CNC, zbiorników z&nbsp;płynami
      eksploatacyjnymi, taśm przesyłowych i&nbsp;szaf sterowniczych.
    </p>
    <p>Usługa polega głównie na:</p>
    <ul>
      <li>
        usunięciu wszelkich pozostałości po procesie obróbki –
        wiórów,opiłków, pyłów, osadów,
      </li>
      <li>
        odtłuszczeniu powierzchni zewnętrznych i&nbsp;wewnętrznych
        maszyny,
      </li>
      <li>wymianie płynów eksploatacyjnych – chłodziwa, olejów itp,</li>
      <li>umycie maszyny wewnątrz i&nbsp;na zewnątrz</li>
      <li>
        pozostawienie maszyny gotowej do podjęcia kolejnego cyklu
        produkcyjnego
      </li>
    </ul>
    <p>Zapraszamy do kontaktu – chętnie podejmiemy każde wyzwanie.</p>
  </div>
  <h4>Zdjęcia z realizacji</h4>
</div>
<div class="img_section_hww">
    <img
      src="img/article1img/img1.png"
      alt="pcs1"
      class="img_how"
      id="0"
    />
    <img
      src="img/article1img/img2.png"
      alt="pcs2"
      class="img_how"
      id="1"
    />
    <img
      src="img/article1img/img3.png"
      alt="pcs3"
      class="img_how"
      id="2"
    />
    <img
      src="img/article1img/img4.png"
      alt="pcs4"
      class="img_how"
      id="3"
    />
    <img
      src="img/article1img/img5.png"
      alt="pcs5"
      class="img_how"
      id="4"
    />
    <img
      src="img/article1img/img6.png"
      alt="pcs6"
      class="img_how"
      id="5"
    />
    <img
      src="img/article1img/img7.png"
      alt="pcs7"
      class="img_how"
      id="6"
    />
    <img
      src="img/article1img/img8.png"
      alt="pcs8"
      class="img_how"
      id="7"
    />
    <img
      src="img/article1img/img9.png"
      alt="pcs8"
      class="img_how"
      id="7"
    />
    <img
      src="img/article1img/img10.png"
      alt="pcs8"
      class="img_how"
      id="7"
    />
    <img
      src="img/article1img/img11.png"
      alt="pcs8"
      class="img_how"
      id="7"
    />
    <img
      src="img/article1img/img12.png"
      alt="pcs8"
      class="img_how"
      id="7"
    />
  </div>
</section>`
const oferArticle1 = `<section class="article">
<div class="article_div">
  <h2 class="article_title">Czyszczenie posadzek</h2>
  <div class="section-text wow fadeInDown">
    <p>
      Wiemy jak ważne dla bezpieczeństwa i ergonomii procesu produkcji
      jest utrzymanie czystości posadzki. W wielu zakładach
      przemysłowych gdzie prowadzona jest wszelkiego rodzaju obróbka CNC
      – posadzki ulegają zabrudzeniu wszelkiego rodzaju smarami, olejami
      lub chłodziwem wyciekającym z nieszczelnych instalacji
      w maszynach. Brudna posadzka nie tylko sprzyja rozwojowi bakterii
      i grzybów, ale powoduje także spore zagrożenie dla pracowników,
      którzy mogą ulec wypadkowi przy pracy poprzez poślizgnięcie.
      Dysponujemy odpowiednim sprzętem, doświadczeniem i kadrą
      pracowniczą – doprowadzimy każdą posadzkę do stanu czystości.
      Zapraszamy do kontaktu – chętnie podejmiemy każde wyzwanie!
    </p>
    <p>Zapraszamy do kontaktu – chętnie podejmiemy każde wyzwanie.</p>
  </div>
 
</section>`
const oferArticle2 = `<section class="article">
<div class="article_div">
  <h2 class="article_title">Czyszczenie i konserwacja posadzek PCV</h2>
  <div>
    <p>
      Podłogi PCV są najczęściej spotykaną formą pokrycia posadzki
      w&nbsp;obiektach użyteczności publicznej, biurach, szpitalach czy
      szkołach. Charakteryzują się wysoką odpornością na ścieranie
      i&nbsp;są łatwe w&nbsp;utrzymaniu czystości. Każda posadzka jest
      jednak narażona na ścieranie i&nbsp;w&nbsp;miarę upływu czasu
      traci swój blask i&nbsp;połysk w&nbsp;wyniku codziennego
      użytkowania. W&nbsp;takim momencie warto zadbać o&nbsp;jej
      doczyszczenie i&nbsp;zabezpieczenie aby przedłużyć jej żywotność
      i&nbsp;przywrócić dawny blask. Proces ten należy podzielić na
      kilka etapów które opisujemy poniżej.
    </p>
    <p>&nbsp;</p>
    <p><strong>Ściąganie starych powłok ochronnych</strong></p>
    <p>
      Niemal każda posadzka wyłożona PCV została wcześniej zabezpieczona
      warstwą ochronną, która należy na wstępie usunąć. Używać się do
      tego środków chemicznych (tzw. Striperów), które rozpuszczają
      warstwy ochronne i&nbsp;„otwierają” powierzchnię do dalszego
      czyszczenia.
    </p>
    <p>&nbsp;</p>
    <p><strong>Doczyszczanie powierzchni</strong></p>
    <p>
      W&nbsp;zależności od rodzaju posadzki i&nbsp;stopnia zabrudzenia
      stosujemy odpowiednie środki chemiczne. Nie bez znaczenia jest
      także dobór odpowiedniej metody mechanicznej – wybór pada lub
      szczotki o&nbsp;poprawnej twardości ma ogromne znaczenie.&nbsp; Za
      pomocą szorowarek jednotarczowych usuwamy zabrudzenia
      mechanicznie.
    </p>
    <p>&nbsp;</p>
    <p><strong>Konserwacja powierzchni (polimeryzacja)</strong></p>
    <p>
      Wyczyszczoną, spłukaną i&nbsp;osuszoną posadzkę PCV należy
      ponownie zabezpieczyć „zamknąć” przed wnikaniem brudu
      i&nbsp;ścieraniem. W&nbsp;tym celu nanosimy ręcznie za pomocą
      bawełnianych mopów, kilka warstw wyprawy polimerowej. Warstwa ta
      zamyka mikrorysy w&nbsp;posadzce i&nbsp;nadaje jej połysk,
      chroniąc tym samym przed zniszczeniem
    </p>
    <p>&nbsp;</p>
    <p><strong>Polerowanie wyprawy polimerowej</strong></p>
    <p>
      Odpowiednio utwardzona wyprawa polimerowa&nbsp; (24h po
      naniesieniu) nadaje się do polerowania. W&nbsp;tym celu używamy
      wysokoobrotowych maszyn jednotarczowych z&nbsp;odpowiednim padem
      lub gąbką. Efekt błyszczącej i&nbsp;zabezpieczonej podłogi, zawsze
      wywołuje pozytywne emocje na klientach – a&nbsp;nam daje poczucie
      dobre wykonanej pracy.
    </p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
  </div>
  <h4>Zdjęcia z realizacji</h4>
</div>
<div class="img_section_hww">
<img
  src="img/article3img/img1.png"
  alt="pcs1"
  class="img_how"
  id="0"
/>
<img
  src="img/article3img/img2.png"
  alt="pcs2"
  class="img_how"
  id="1"
/>
<img
  src="img/article3img/img3.png"
  alt="pcs3"
  class="img_how"
  id="2"
/>
<img
  src="img/article3img/img4.png"
  alt="pcs4"
  class="img_how"
  id="3"
/>
<img
  src="img/article3img/img5.png"
  alt="pcs5"
  class="img_how"
  id="4"
/>
<img
  src="img/article3img/img6.png"
  alt="pcs6"
  class="img_how"
  id="5"
/>
<img
  src="img/article3img/img7.png"
  alt="pcs7"
  class="img_how"
  id="6"
/>
<img
  src="img/article3img/img8.png"
  alt="pcs8"
  class="img_how"
  id="7"
/>
<img
  src="img/article3img/img9.png"
  alt="pcs8"
  class="img_how"
  id="7"
/>
<img
  src="img/article3img/img10.png"
  alt="pcs8"
  class="img_how"
  id="7"
/>
<img
  src="img/article3img/img11.png"
  alt="pcs8"
  class="img_how"
  id="7"
/>
<img
  src="img/article3img/img12.png"
  alt="pcs8"
  class="img_how"
  id="7"
/>
</div>
</section>
`
const oferArticleArray = [oferArticle0, oferArticle1, oferArticle2]

const addHiddenClass = function () {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
  arrLeft.classList.add('hidden');
  arrRight.classList.add('hidden');
  modalWindowCall.classList.add('hidden');
  modalWindowCall.classList.remove('form_intro_flex');
}
let logo;
let image;
let count = 'ofer_cards100';
image = images;
let imageId;

const slider = function () {
  for (let i = 0; i < image.length; i++) {
    image[i].addEventListener('click', function () {
      modalWindow.classList.remove('hidden');
      overlay.classList.remove('hidden');
      btnCloseButton.classList.remove('hidden');
      arrLeft.classList.remove('hidden');
      arrRight.classList.remove('hidden');
      modalImage.alt = image[i].alt;
      modalImage.src = image[i].src;
      modalWindow.style.marginLeft = (body.clientWidth / 2);
      modalWindow.style.marginTop = (body.clientHeight / 2);
      document.documentElement.scrollTop = 650;
      imageId = image[i].id;
      imageId++

    })
  }
}

const exitGeneralPage = function () {
  logo.addEventListener('click', function () {
    sectionAboutAs.classList.remove('hidden');
    header.innerHTML = `<img src="img/logo.png" alt="logo_pcs" class="logo" />
    <img
      src="img/header_cleaning.png"
      alt="cleaner"
      class="header_cleaner"
    />
    <img src="img/bkg.png" alt="pcs_bkg" class="header_bg" />
    <div class="dg_header"></div>
    <h1>
      Firma Sprzątająca
      <br />
      <span>PCS</span>
    </h1>`
    header.style.height = '900px';
    sectionHWW.style.height = '813px'
    sectionHWW.innerHTML = `<h2>jak <span>pracujemy</span></h2>
    <div class="rectangle rectangle1"></div>
    <div class="img_section_hww">
      <img src="img/img1.png" alt="pcs1" class="img_how" id="0" />
      <img src="img/img2.png" alt="pcs2" class="img_how" id="1" />
      <img src="img/img3.png" alt="pcs3" class="img_how" id="2" />
      <img src="img/img4.png" alt="pcs4" class="img_how" id="3" />
      <img src="img/img5.png" alt="pcs5" class="img_how" id="4" />
      <img src="img/img6.png" alt="pcs6" class="img_how" id="5" />
      <img src="img/img7.png" alt="pcs7" class="img_how" id="6" />
      <img src="img/img8.png" alt="pcs8" class="img_how" id="7" />
    </div>
    <div class="section_know">
      <div class="know_left">wiemy jak</div>
      <div class="know_right">
        Wiemy jak ważne dla bezpieczeństwa i ergonomii procesu produkcji
        jest utrzymanie czystości posadzki.
      </div>
    </div>
    <button class="intro_btn" id="btn1">Skontaktuj się z nami</button>`;

  })
}
slider();
arrRight.addEventListener('click', function () {
  if (count == 'ofer_cards100' && imageId > 0 && imageId <= (image.length - 1)) {
    imageId++
    modalImage.src = `file:///E:/PSC%20site1/img/img${imageId}.png`;
  } else if (count == 'ofer_cards100' && imageId == image.length) {
    imageId = 1;
    modalImage.src = `file:///E:/PSC%20site1/img/img${imageId}.png`;
  }

  if (count == 'ofer_cards0' && imageId > 0 && imageId <= (image.length - 1)) {
    imageId++
    modalImage.src = `file:///E:/PSC%20site1/img/article1img/img${imageId}.png`;
  } else if (count == 'ofer_cards0' && imageId == image.length) {
    imageId = 1;
    modalImage.src = `file:///E:/PSC%20site1/img/article1img/img1.png`;
  }

  if (count == 'ofer_cards2' && imageId > 0 && imageId <= (image.length - 1)) {
    imageId++
    modalImage.src = `file:///E:/PSC%20site1/img/article3img/img${imageId}.png`;
  } else if (count == 'ofer_cards2' && imageId == image.length) {
    imageId = 1;
  }

})


arrLeft.addEventListener('click', function () {
  if (count == 'ofer_cards100' && imageId <= image.length && imageId != 1) {
    imageId--
    modalImage.src = `file:///E:/PSC%20site1/img/img${imageId}.png`;
  } else if (count == 'ofer_cards100' && imageId == 1) {
    imageId = image.length
    modalImage.src = `file:///E:/PSC%20site1/img/img${imageId}.png`;
  }

  if (count == 'ofer_cards0' && imageId <= image.length && imageId != 1) {
    imageId--
    modalImage.src = `file:///E:/PSC%20site1/img/article1img/img${imageId}.png`;
  } else if (count == 'ofer_cards0' && imageId == 1) {
    imageId = image.length
    modalImage.src = `file:///E:/PSC%20site1/img/article1img/img${imageId}.png`;
  }

  if (count == 'ofer_cards2' && imageId <= image.length && imageId != 1) {
    imageId--
    modalImage.src = `file:///E:/PSC%20site1/img/article3img/img${imageId}.png`;
  } else if (count == 'ofer_cards2' && imageId == 1) {
    imageId = image.length
    modalImage.src = `file:///E:/PSC%20site1/img/article3img/img${imageId}.png`;
  }
})

btnCall1.addEventListener('click', function () {
  modalWindowCall.classList.remove('hidden');
  modalWindowCall.classList.add('form_intro_flex');
  overlay.classList.remove('hidden');
})

for (let i = 0; i < oferCards.length; i++) {
  oferCards[i].addEventListener('click', function () {
    document.documentElement.scrollTop = 2;
    header.innerHTML = ` <img src="img/logo.png" alt="logo_pcs" class="logo_article" />`
    logo = document.querySelector('.logo_article');
    header.style.height = '150px';
    count = oferCards[i].id;
    sectionHWW.innerHTML = '';
    sectionHwwWrapper.style.display = 'none'
    sectionAboutAs.classList.add('hidden');
    sectionHWW.insertAdjacentHTML("afterbegin", oferArticleArray[i])
    if (oferCards[i].id == 'ofer_cards0') {
      sectionHWW.style.height = '1300px';
    } else if (oferCards[i].id == 'ofer_cards1') {
      sectionHWW.style.height = '500px';
    } else if (oferCards[i].id == 'ofer_cards2') {
      sectionHWW.style.height = '1830px';
    }
    const articleTitle = document.querySelector('.article_title');
    articleTitle.style.marginTop = '100px'
    document.documentElement.scrollTop = 0;
    const images = document.querySelectorAll('.img_how');
    image = images
    slider();
    exitGeneralPage();
  })
}


btnCloseButton.addEventListener('click', addHiddenClass);

overlay.addEventListener('click', addHiddenClass);

// Function maps
document.addEventListener('DOMContentLoaded', function () {
  const map = L.map('map').setView([50.6767405, 17.9740576], 18);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  var marker = L.marker([50.6767405, 17.9740576]).addTo(map);
  marker.bindPopup(`<b>Firma sprzątająca
    PCS</b>`).openPopup();

})