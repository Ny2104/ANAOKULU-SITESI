
    function scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  
    function showPopup(imageSrc, caption) {
      const popup = document.getElementById("popup");
      const popupImage = document.getElementById("popup-image");
      const popupCaption = document.getElementById("popup-caption");
      const closeBtn = document.getElementById("close-btn");

      popupImage.src = imageSrc;
      popupCaption.innerText = caption;

      popup.style.display = "block";

      popupImage.style.transform = "scale(1)";
      popupImage.style.transition = "transform 0.3s ease";

      popupImage.addEventListener("click", function(event) {
        event.stopPropagation();
      });

      popup.addEventListener("click", closePopup);
      closeBtn.addEventListener("click", closePopup);
    }

    function closePopup() {
      const popup = document.getElementById("popup");
      const popupImage = document.getElementById("popup-image");
      const closeBtn = document.getElementById("close-btn");

      popup.style.display = "none";
      popupImage.style.transform = "scale(1)";
      popupImage.style.transition = "transform 0.3s ease";

      popup.removeEventListener("click", closePopup);
      closeBtn.removeEventListener("click", closePopup);
    }

    function zoomInImage(element) {
      const parentWrapper = element.parentNode;
      const image = parentWrapper.querySelector("img");
      image.style.transform = "scale(1.5)";
      image.style.transition = "transform 0.3s ease";
    }
