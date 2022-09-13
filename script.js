function darkLightToggle() {
   var element = document.body
   let imgElement = document.getElementById("footer-icon");
   let textTitle = document.getElementById("main-title")
   let linkTrees = document.getElementById("link-tree")

   var imgDark = "./assets/icon/Nuclear's WM 2022 (dark mode).png"
   var imgLight = "./assets/icon/Nuclear's WM 2022 (light mode).png"
   
   //change theme
   element.classList.toggle("light-mode")

   //change text color
   if (textTitle.getAttribute('style') === "color: black") {
      textTitle.setAttribute('style', "color: white")
   } else {
      textTitle.setAttribute('style', "color: black")
   }

   if (linkTrees.getAttribute('class') === 'w3-black') {
      linkTrees.setAttribute('class', 'w3-white')
   } else {
      linkTrees.setAttribute('class', 'w3-black')
   }

   //change footer logo "Nuclear 2022"
   if (imgElement.getAttribute('src') === imgDark) {
      imgElement.setAttribute('src', imgLight);
    }
    else {
      imgElement.setAttribute('src', imgDark);
    }
}
console.log(darkLightToggle())