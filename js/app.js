function App()
{

    const burger = document.querySelector(".burger");
    const navButtons = document.querySelector(".nav-buttons");
    const burgerIcon = document.querySelector(".burger i");

    let open = false;

    function openNav()
    {
        open = !open;
        navButtons.classList.toggle('nav-open');
        
        //Reset Burger Animation
        burgerIcon.addEventListener("webkitAnimationEnd", () => {
            burgerIcon.style.animation = '';
        })

        //Start Burger Anim
        burgerIcon.style.animation = `clickAnim .5s`;
        if (open) {
            burgerIcon.classList.replace('fa-bars', 'fa-times');
        } else {
            burgerIcon.classList.replace('fa-times', 'fa-bars');
        }
        
    }
    
    burger.addEventListener('click',openNav);

    //Nav Buttons
    const nButton = document.querySelectorAll(".nButton");
    
    function closeNav()
    {
        open = false
        navButtons.classList.remove('nav-open');
        burgerIcon.classList.replace('fa-times', 'fa-bars');
    }

    nButton.forEach((item) => {
        item.addEventListener('click',closeNav);
    })

    $(".nav-buttons a").on("click", function (e) {
        e.preventDefault();
        const href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(href).offset().top - 120}, 1000);
      });

    //Observer
    const showlist = document.querySelectorAll('.show');

    const appearOptions = {
        threshold: 0,
        rootMargin: "0px 0px -200px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("showed");
                appearOnScroll.unobserve(entry.target);
            } else {
                return;
            }
        });
    }, appearOptions);

    showlist.forEach(show => {
        appearOnScroll.observe(show);
    });

}

App();
