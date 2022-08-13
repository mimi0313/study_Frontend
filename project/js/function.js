// menu mouse over
let gnbListLink = document.querySelectorAll('.gnb-list-link');
let gnbDepth2 = document.querySelectorAll('.gnb-depth2');
let gnb = document.querySelector('.gnb');

for(let i=0;i<gnbListLink.length;i++){
  gnbListLink[i].addEventListener('mouseenter', function(){
    gnbDepth2[i].classList.add('active');
  });

  gnb.addEventListener('mouseleave', function(){
    gnbDepth2[i].classList.remove('active');
  });
}

// hamburger button
let hamburgerBtn = document.querySelector('.hamburger');
hamburgerBtn.addEventListener('click', function(){
  gnb.classList.toggle('active');
});

// 일정 시간마다 반복 실행 => window.setInterval(함수, 시간)
// 일정 시간이후 한번 실행 => window.setTimeout(함수, 시간)
// 시간 : millisecond = 1/1000 second

let mainSloganItem = document.querySelectorAll('.main-slogan-item');

let current = 0;
let next = 1;
let prev = 2;

window.setInterval(function () {
  
  if(next >= mainSloganItem.length){
    next = 0;
  }

  mainSloganItem[current].classList.remove('current','next', 'prev');
  mainSloganItem[next].classList.remove('current', 'next', 'prev');
  mainSloganItem[prev].classList.remove('current', 'next', 'prev');

  mainSloganItem[current].classList.add('current');
  mainSloganItem[next].classList.add('next');
  mainSloganItem[prev].classList.add('prev');

  prev = current;
  current = next;
  next = next + 1;

}, 3000);