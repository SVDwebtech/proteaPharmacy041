const hamburgerBtn = document.querySelector('.hamburgerBtn');

const hamburgerTopBar = document.querySelector(".hamburgerBtn__hamburgerBar--top");
const hamburgerMiddleBar = document.querySelector(".hamburgerBtn__hamburgerBar--middle");
const hamburgerBottomBar = document.querySelector(".hamburgerBtn__hamburgerBar--bottom");

const hamburgerMenu = document.querySelector('.navList');

const navItems = document.querySelectorAll('.navItem');

const navItem1 = document.querySelector('.navItem1');
const navItem2 = document.querySelector('.navItem2');
const navItem3 = document.querySelector('.navItem3');
const navItem4 = document.querySelector('.navItem4');
const navItem5 = document.querySelector('.navItem5');
const navItem6 = document.querySelector('.navItem6');
const navItem7 = document.querySelector('.navItem7');
const navItem8 = document.querySelector('.navItem8');

const profilePhoto = document.querySelector('.profilePhoto');
const logo = document.querySelector('.logo');
const navbar = document.querySelector('.navbarSection');
const navFrame = document.querySelector('.navFrame');

const footer = document.querySelector('.footer');

const hero = document.querySelector('.heroSection');

// Select the slides(teamMember cards) in the aboutSection
const slides = document.querySelectorAll('.imageSlider__slide');

// Select the dots below the slides in the aboutSection
const dots = document.querySelectorAll('.imageSlider__dot');

let slideIndex = 0;
const slideInterval = 12000;

function nextSlide() {
      if (slideIndex >= slides.length) {
        slides[slideIndex-1].classList.remove('displayBlock');
        slides[slideIndex-1].classList.add('displayNone');
        dots[slideIndex-1].style.backgroundColor = '#012e4c';
        slideIndex = 0;
      }
      if(slideIndex === 0) {
        slides[slideIndex].classList.remove('displayNone');
        slides[slideIndex].classList.add('displayBlock');
        slides[slideIndex].classList.add('animateCurrentSlide');
        dots[slideIndex].style.backgroundColor = '#4fdc03';

      } else {
        slides[slideIndex-1].classList.remove('displayBlock');
        slides[slideIndex-1].classList.add('displayNone');
        slides[slideIndex].classList.add('displayBlock');
        slides[slideIndex].classList.add('animateCurrentSlide');
        dots[slideIndex-1].style.backgroundColor = '#012e4c';
        dots[slideIndex].style.backgroundColor = '#4fdc03';
      }
      slideIndex++;
      console.log(slideIndex);
      console.log("slides.lenth : ",slides.length);
    }

setInterval(nextSlide, slideInterval);






let footerHeight = footer.offsetHeight;
hero.style.minHeight = `${window.innerHeight - footerHeight}px`;
console.log(`${window.innerHeight - footerHeight}px`);

let height = navbar.offsetHeight;
navFrame.style.height = `${height}px`;

visualViewport.addEventListener("resize", () => {
  height = navbar.offsetHeight;
  navFrame.style.height = `${height}px`;

  console.log(`navbar height = ${navbar.offsetHeight}`);
  console.log(`navFrame height = ${navFrame.offsetHeight}`);
});


window.addEventListener('resize', function(){
  footerHeight = footer.offsetHeight;
  hero.style.minHeight = `${window.innerHeight - footerHeight}px`;
});

hamburgerBtn.addEventListener('click', () => {
  
  console.log(`navbar offsetHeight = ${navbar.offsetHeight}`);
  navFrame.style.height = `${height}px`;
  console.log(`navFrame offsetHeight = ${navFrame.offsetHeight}`);
  
  if (!hamburgerTopBar.classList.contains('hamburgerBtn__hamburgerBar--right')) {
    setTimeout(() => {
      hamburgerTopBar.classList.toggle('hamburgerBtn__hamburgerBar--right');
      hamburgerMiddleBar.classList.toggle('hamburgerBtn__hamburgerBar--transparent');
      hamburgerBottomBar.classList.toggle('hamburgerBtn__hamburgerBar--left');
    }, 200);
  } else {
    setTimeout(() => {
      hamburgerTopBar.classList.toggle('hamburgerBtn__hamburgerBar--right');
      hamburgerMiddleBar.classList.toggle('hamburgerBtn__hamburgerBar--transparent');
      hamburgerBottomBar.classList.toggle('hamburgerBtn__hamburgerBar--left');
    }, 500);
    
    if(window.scrollY < 200 && !hamburgerMenu.classList.contains('navList--displayNone')){
      footer.style.position = "fixed";
      navbar.style.visibility = "hidden";
      navbar.style.opacity = "0";
      navbar.classList.remove('navbar--background');
    }
  }
  
  
  if(hamburgerMenu.classList.contains('navList--displayNone')) {
    hamburgerMenu.classList.remove('navList--displayNone');
    hamburgerMenu.classList.add('navList--display');
    for(let item of navItems) {
      item.style.opacity = "0";
    }
    setTimeout(() => {
      hamburgerMenu.classList.remove('navList--navListMoveOut');
      hamburgerMenu.classList.add('navList--navListMoveIn');
      for(let item of navItems) {
        item.classList.remove('navItem--moveOut');
        item.classList.add('navItem--moveIn');
      }
      navItem1.style.animationDelay = '.70s';
      navItem2.style.animationDelay = '.80s';
      navItem3.style.animationDelay = '.90s';
      navItem4.style.animationDelay = '1.00s';
      navItem5.style.animationDelay = '1.10s';
      navItem6.style.animationDelay = '1.20s';
      navItem7.style.animationDelay = '1.30s';
      navItem8.style.animationDelay = '1.40s';
    }, 20);
  } else {
    hamburgerMenu.classList.remove('navList--navListMoveIn')
    hamburgerMenu.classList.add('navList--navListMoveOut')
    for(let item of navItems) {
      item.style.opacity = "1";
      item.classList.remove('navItem--moveIn');
      item.classList.add('navItem--moveOut');
    }
    navItem1.style.animationDelay = '.10s';
    navItem2.style.animationDelay = '.15s';
    navItem3.style.animationDelay = '.20s';
    navItem4.style.animationDelay = '.25s';
    navItem5.style.animationDelay = '.30s';
    navItem6.style.animationDelay = '.35s';
    navItem7.style.animationDelay = '.40s';
    navItem8.style.animationDelay = '.45s';
    setTimeout(() => {
      hamburgerMenu.classList.remove('navList--display');
      hamburgerMenu.classList.add('navList--displayNone');
    }, 2000);
  }  
});

window.onscroll = () => {
  if(window.scrollY > 200) {  
    footer.style.position = "static";
    navbar.style.visibility = "visible";
    navbar.style.opacity = "1";
    navbar.classList.add('navbar--background');

  } else if(window.scrollY < 200 && hamburgerMenu.classList.contains('navList--displayNone')){
    footer.style.position = "fixed";
    navbar.style.visibility = "hidden";
    navbar.style.opacity = "0";
    navbar.classList.remove('navbar--background');
  }
}

for(let item of navItems) {
  item.addEventListener('click', () => {
    hamburgerMenu.classList.remove('navList--navListMoveIn')
    hamburgerMenu.classList.add('navList--navListMoveOut')
    for(let item of navItems) {
      item.style.opacity = "1";
      item.classList.remove('navItem--moveIn');
      item.classList.add('navItem--moveOut');
    }
    navItem1.style.animationDelay = '.10s';
    navItem2.style.animationDelay = '.15s';
    navItem3.style.animationDelay = '.20s';
    navItem4.style.animationDelay = '.25s';
    navItem5.style.animationDelay = '.30s';
    navItem6.style.animationDelay = '.35s';
    navItem7.style.animationDelay = '.40s';
    navItem8.style.animationDelay = '.45s';
    setTimeout(() => {
      hamburgerMenu.classList.remove('navList--display');
      hamburgerMenu.classList.add('navList--displayNone');
    }, 1200);

    setTimeout(() => {
      hamburgerTopBar.classList.toggle('hamburgerBtn__hamburgerBar--right');
      hamburgerMiddleBar.classList.toggle('hamburgerBtn__hamburgerBar--transparent');
      hamburgerBottomBar.classList.toggle('hamburgerBtn__hamburgerBar--left');
    }, 500);

    setTimeout(() => {
      if(window.scrollY < 200 ){
        footer.style.position = "fixed";
        navbar.style.visibility = "hidden";
        navbar.style.opacity = "0";
        navbar.classList.remove('navbar--background');
      }
    }, 800);
    
    

  });
}

