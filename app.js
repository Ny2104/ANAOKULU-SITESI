
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
	element.scrollIntoView({ behavior: "smooth" });
  }
}

function showPopup(imageSrc, caption) {
  const popup = document.querySelector(".popup");
  const popupImage = popup.querySelector("img");
  const popupCaption = popup.querySelector("p");
  const overlay = document.querySelector(".overlay");

  popupImage.src = imageSrc;
  popupCaption.innerText = caption;

  popup.style.display = "block";
  overlay.style.display = "block";

  overlay.addEventListener("click", hidePopup);

  function hidePopup() {
	popup.style.display = "none";
	overlay.style.display = "none";
	overlay.removeEventListener("click", hidePopup);
  }
}
