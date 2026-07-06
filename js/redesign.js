document.getElementById('year').textContent = new Date().getFullYear();

// scroll reveal
const revealEls = document.querySelectorAll('[data-reveal]');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
  });
},{threshold:.15});
revealEls.forEach(el=>io.observe(el));

// close mobile nav on link click
document.querySelectorAll('.main-nav a').forEach(a=>{
  a.addEventListener('click', ()=>{
    const t = document.getElementById('nav-toggle');
    if(t) t.checked = false;
  });
});
