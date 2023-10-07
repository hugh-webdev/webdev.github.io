    // allows navbar to transistion on scroll
    $(function () {
        $(document).scroll(function () {
          var $nav = $("#mainNavbar");
          $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
        });
      });
  
      ////// Smooth Scroll Into View JvaScript Function
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
  
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
        });
      });
  
      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }
  

    //// Function to toggle popup onclick
    let popup = document.getElementById('popup');
    
    function openPopup(){
        popup.classList.add('open-popup');
    }
    function closePopup(){
        popup.classList.remove('open-popup');

    }


      //// Function to allow boxes to scroll into view
    const boxes = document.querySelectorAll('.box');

    window.addEventListener('scroll', checkBoxes);
    
    checkBoxes();
    
    function checkBoxes(){
       const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if(boxTop < triggerBottom){
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
    }

    