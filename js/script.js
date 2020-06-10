let outfits = [{
  outfitId: 1,
  imgSrc: 'images/1.jpg',
  rank: 0,
  rejectedCounter: 0,
  items: ['whiteSneakers', 'blackSkinnyJeans'],
  tags: ['sport', 'classic']
},
{
  outfitId: 2,
  imgSrc: 'images/2.jpg',
  rank: 0,
  rejectedCounter: 0,
  items: ['whiteSneakers', 'blackSkinnyJeans'],
  tags: ['sport', 'classic']
},
{
  outfitId: 3,
  imgSrc: 'images/3.jpg',
  rank: 0,
  rejectedCounter: 0,
  items: ['whiteSneakers', 'blackSkinnyJeans'],
  tags: ['sport', 'classic']
},
{
  outfitId: 4,
  imgSrc: 'images/4.jpg',
  rank: 0,
  rejectedCounter: 0,
  items: ['whiteSneakers', 'blackSkinnyJeans'],
  tags: ['sport', 'classic']
},
{
  outfitId: 5,
  imgSrc: 'images/5.jpg',
  rank: 0,
  rejectedCounter: 0,
  items: ['whiteSneakers', 'blackSkinnyJeans'],
  tags: ['sport', 'classic']
},
{
  outfitId: 6,
  imgSrc: 'images/6.jpg',
  rank: 0,
  rejectedCounter: 0,
  items: ['whiteSneakers', 'blackSkinnyJeans'],
  tags: ['sport', 'classic']
},
{
  outfitId: 7,
  imgSrc: 'images/7.jpg',
  rank: 0,
  rejectedCounter: 0,
  items: ['whiteSneakers', 'blackSkinnyJeans'],
  tags: ['sport', 'classic']
},
{
  outfitId: 8,
  imgSrc: 'images/8.jpg',
  rank: 0,
  rejectedCounter: 0,
  items: ['whiteSneakers', 'blackSkinnyJeans'],
  tags: ['sport', 'classic']
},
{
  outfitId: 9,
  imgSrc: 'images/9.jpg',
  rank: 0,
  rejectedCounter: 0,
  items: ['whiteSneakers', 'blackSkinnyJeans'],
  tags: ['sport', 'classic']
},
{
  outfitId: 10,
  imgSrc: 'images/10.jpg',
  rank: 0,
  rejectedCounter: 0,
  items: ['whiteSneakers', 'blackSkinnyJeans'],
  tags: ['sport', 'classic']
},
{
  outfitId: 11,
  imgSrc: 'images/11.jpg',
  rank: 0,
  rejectedCounter: 0,
  items: ['whiteSneakers', 'blackSkinnyJeans'],
  tags: ['sport', 'classic']
},
{
  outfitId: 12,
  imgSrc: 'images/12.jpg',
  rank: 0,
  rejectedCounter: 0,
  items: ['whiteSneakers', 'blackSkinnyJeans'],
  tags: ['sport', 'classic']
}
];

let l = 0;
let r = 1;
const main = document.getElementById('main');
function displayQuiz() {
 quizDiv = document.createElement("div");
 quizDiv.setAttribute("class", "quiz");
if (l <= 5 && r <= 5) {
  main.innerHTML = `
  <h1 class="mainHeader">What would you prefer?</h1>
  <div class="quiz">
    <div id="leftPic" class="picWrapper">
      <a>
        <img src=${outfits[l].imgSrc} class="image">
      </a>
      <div class="middle">
        <div class="text">❤️</div>
      </div>
    </div>
    <div id="spliter" class="splitter">
    VS
    </div>
    <div id="rightPic" class="picWrapper">
      <a>
        <img src=${outfits[r].imgSrc} class="image">
      </a>
      <div class="middle">
        <div class="text">❤️</div>
      </div>
    </div>
  </div>
  `;
} else {
  result();

  resultLeft = document.getElementById("leftRes");
  resultCenter = document.getElementById("centerRes");
  resultRight = document.getElementById("rightRes"); 
  
  resultLeft.addEventListener('click', resultL); 
  resultCenter.addEventListener('click', resultC); 
  resultRight.addEventListener('click', resultR);
}

voteRight = document.getElementById("rightPic");
voteRight.addEventListener('click', voteCounterRight);
voteLeft = document.getElementById("leftPic");
voteLeft.addEventListener('click', voteCounterLeft);
};

const startBtn = document.getElementById('start');
startBtn.addEventListener('click', displayQuiz);

function voteCounterLeft() {
if (r == l - 1) {
  r = r + 2;
  displayQuiz();
} else
  r++;
displayQuiz();
};

function voteCounterRight() {
if (l == r - 1) {
  l = l + 2;
  displayQuiz();
} else l++;
displayQuiz();
};

function result() {
  main.innerHTML = `
  <h2>Here are the most liked outfits. Click on it!</h2>
  <h3>[Tags for outfits]</h3>
  <div class="quiz">
    <a id="leftRes" class="picWrapper">
      <img src=${outfits[0].imgSrc} class="image">
    </a>
    <a id="centerRes" class="picWrapper">
      <img src=${outfits[5].imgSrc} class="image">
    </a>
    <a id="rightRes" class="picWrapper">
      <img src=${outfits[6].imgSrc} class="image">
    </a>
  </div>
  `;
  resultLeft = document.getElementById("leftRes");
  resultCenter = document.getElementById("centerRes");
  resultRight = document.getElementById("rightRes"); 
  
  resultLeft.addEventListener('click', resultL); 
  resultCenter.addEventListener('click', resultC); 
  resultRight.addEventListener('click', resultR);
};

function resultR() {
  main.innerHTML = `
  <h2>Here are the most liked outfits</h2>
  <h3>[Tags for outfits]</h3>
  <div class="quiz">
    <a id="leftRes" class="picWrapper">
      <img src=${outfits[0].imgSrc} class="image">
    </a>
    <a id="centerRes" class="picWrapper">
      <img src=${outfits[5].imgSrc} class="image">
    </a>
    <a id="rightRes" class="picWrapper">
      <img src=${outfits[6].imgSrc} class="image">
    </a>
  </div>
  <h1>[links for outfit 3]</h1>
  `;
  resultLeft = document.getElementById("leftRes");
  resultCenter = document.getElementById("centerRes");
  resultRight = document.getElementById("rightRes"); 
  
  resultLeft.addEventListener('click', resultL); 
  resultCenter.addEventListener('click', resultC); 
  resultRight.addEventListener('click', resultR);
};

function resultC() {
  main.innerHTML = `
  <h2>Here are the most liked outfits</h2>
  <h3>[Tags for outfits]</h3>
  <div class="quiz">
    <a id="leftRes" class="picWrapper">
      <img src=${outfits[0].imgSrc} class="image">
    </a>
    <a id="centerRes" class="picWrapper">
      <img src=${outfits[5].imgSrc} class="image">
    </a>
    <a id="rightRes" class="picWrapper">
      <img src=${outfits[6].imgSrc} class="image">
    </a>
  </div>
  <h1>[links for outfit 2]</h1>
  `;
  resultLeft = document.getElementById("leftRes");
  resultCenter = document.getElementById("centerRes");
  resultRight = document.getElementById("rightRes"); 
  
  resultLeft.addEventListener('click', resultL); 
  resultCenter.addEventListener('click', resultC); 
  resultRight.addEventListener('click', resultR);
};

function resultL() {
  main.innerHTML = `
  <h2>Here are the most liked outfits</h2>
  <h3>[Tags for outfits]</h3>
  <div class="quiz">
    <a id="leftRes" class="picWrapper">
      <img src=${outfits[0].imgSrc} class="image">
    </a>
    <a id="centerRes" class="picWrapper">
      <img src=${outfits[5].imgSrc} class="image">
    </a>
    <a id="rightRes" class="picWrapper">
      <img src=${outfits[6].imgSrc} class="image">
    </a>
  </div>
  <h1>[links for outfit 1]</h1>
  `;
  resultLeft = document.getElementById("leftRes");
  resultCenter = document.getElementById("centerRes");
  resultRight = document.getElementById("rightRes"); 
  
  resultLeft.addEventListener('click', resultL); 
  resultCenter.addEventListener('click', resultC); 
  resultRight.addEventListener('click', resultR);
};