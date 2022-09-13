function darkLightToggle() {
   var element = document.body
   var imgDark = "./assets/icon/Nuclear's WM 2022 (dark mode).png"
   var imgLight = "./assets/icon/Nuclear's WM 2022 (light mode).png"

   let imgElement = document.getElementById("footer-icon");
   
   //change theme
   element.classList.toggle("light-mode")

   //change footer logo "Nuclear 2022"
   if (imgElement.getAttribute('src') === imgDark) {
      imgElement.setAttribute('src', imgLight);
    }
    else {
      imgElement.setAttribute('src', imgDark);
    }
}