//Making the Year at the Copyright automatic:
const yearEL = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEL.textContent = currentYear;

//Making Mobile Navigation Work//
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

//Making Mobile Navigation close on the click of a link.//
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});
  
//Making Stycky Navigation Work//
 const sectionHeroEL =  document.querySelector('.section-hero')
 const  obs = new IntersectionObserver(function(entries) {
  const ent = entries[0];
  if (ent.isIntersecting === false){
    document.body.classList.add('sticky')
  }else{
    document.body.classList.remove('sticky')
  }
 }, 
 {
  root:null,
  threshold:0,
  rootMargin:'-80px',
 })
 obs.observe(sectionHeroEL);

///////////////////////////////////////////////////////////