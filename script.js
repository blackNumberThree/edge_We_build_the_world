
    var isScrolling = false;
 
    window.addEventListener("scroll", throttleScroll, false);
 
    function throttleScroll(e) {
      if (isScrolling == false) {
        window.requestAnimationFrame(function() {
          scrolling(e);
          isScrolling = false;
        });
      }
      isScrolling = true;
    }
 
    document.addEventListener("DOMContentLoaded", scrolling, false);
 
    var secondBox = document.querySelector(".animebox");
    var secondBox1 = document.querySelector(".animebox1");
    var secondBox2 = document.querySelector(".animebox2");
        var secondBox3 = document.querySelector(".animebox3");
            var secondBox4 = document.querySelector(".animebox4");




 
    function scrolling(e) {
 
   
      if (isFullyVisible(secondBox)) {
        secondBox.classList.add("anime2");

        secondBox.classList.add("addclass");
      }


      if (isFullyVisible(secondBox1)) {
        secondBox1.classList.add("anime2");
        secondBox1.classList.add("addclass");
      }

   if (isFullyVisible(secondBox2)) {
        secondBox2.classList.add("anime2");
        secondBox2.classList.add("addclass");
      }

   if (isFullyVisible(secondBox3)) {
        secondBox3.classList.add("anime2");
        secondBox3.classList.add("addclass");
      }

 
    }
 
    function isFullyVisible(el) {
      var elementBoundary = el.getBoundingClientRect();
      var top = elementBoundary.top;
      var bottom = elementBoundary.bottom;
      return ((top >= 0) && (bottom <= window.innerHeight));
    }


