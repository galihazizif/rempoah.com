document.addEventListener('DOMContentLoaded', function(){
    var Tawk_API = window.Tawk_API;
    console.log('asune');
    let tawkToButtons = document.querySelectorAll('.tawk-to-button');
    console.log('isine');
    console.log(tawkToButtons);
    tawkToButtons.forEach(button => {
        button.addEventListener('click', function(){
            if (typeof Tawk_API !== 'undefined') {
                console.log(Tawk_API);
                Tawk_API.maximize();
            } else {
                alert("Chat is not loaded yet.");
            }
        });
    });


    const observer  = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.remove('hidden');
                entry.target.classList.add('animate__animated','animate__fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    });

    document.querySelectorAll('.animate-on-scroll').forEach(ell => {
        observer.observe(ell);
    });

    /* const showHideNav = () => {
        const navbar = document.querySelector('header.wp-block-template-part');
        if(window.scrollY > 100){
            navbar.style.display = "block";
        }else{
            navbar.style.display = "none";
        }
        
    }

    const navbar = document.querySelector('header.wp-block-template-part');
    navbar.style.position = "fixed";
    navbar.style.top = "0";
    navbar.style.width = "100vw";
    navbar.style.zIndex = 99;

    window.addEventListener('scroll', showHideNav); */

});
