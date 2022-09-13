function darkLightToggle() {
   var element = document.body
   var imgElement = document.getElementById('footer-icon');

   var imgDark = "./assets/icon/Nuclear's WM 2022 (dark mode).png"
   var imgLight = "./assets/icon/Nuclear's WM 2022 (light mode).png"

   element.classList.toggle("light-mode")

   imgElement.src.toggle(imgLight)
}