const nav = document.querySelector('.nav');
const header = document.querySelector('.hero-section');
let logo = document.querySelector('.logo')
const navHeight = nav.getBoundingClientRect().height;
const closeBtn = document.querySelector('.btn-close')
const navbar = document.querySelector('.nav-bar')
const bar1 = document.querySelector('.bar-1')
const bar2 = document.querySelector('.bar-2')
const bar3 = document.querySelector('.bar-3');
const navbarToggle = document.getElementById("navbarToggle");
const navbarMenu = document.getElementById("navbarMenu");
const checkBox = document.querySelector('#navbarCheck');
const navItems = document.querySelector('.nav-items')


const stickyNav = function (entries) {
    const [entry] = entries;
    console.log(entry);
    if (!entry.isIntersecting) {
        nav.classList.add('sticky');
        logo.src ="./assets/CRYPTECHX BLACK.png"
        bar1.classList.remove('bg-white')
        bar1.classList.add('bg-black')
        bar2.classList.remove('bg-white')
        bar2.classList.add('bg-black')
        bar3.classList.remove('bg-white')
        bar3.classList.add('bg-black')
        navbar.classList.add('top-14');
        navItems.classList.remove('text-white')
        navItems.classList.add('text-black')
        

    }
    else {

        nav.classList.remove('sticky');
        logo.src ="./assets/CRYPTECHX WHITE.png"
        bar1.classList.add('bg-white')
        bar1.classList.remove('bg-black')
        bar2.classList.add('bg-white')
        bar2.classList.remove('bg-black')
        bar3.classList.add('bg-white')
        bar3.classList.remove('bg-black')
        navItems.classList.add('text-white')
        navItems.classList.remove('text-black')


    }
  };
  

  const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
  });
  headerObserver.observe(header);



  navbarToggle.addEventListener("click", () => {
    console.log('hello');
    navbar.classList.remove('hide')
    navbar.classList.add('show');
  });
  
closeBtn.addEventListener('click', () => {
    navbar.classList.add('hide')
})