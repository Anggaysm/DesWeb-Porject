function scrollToSection(sectionId) {
  var section = document.querySelector(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
    });
  }
}
let pindahAbout = document.getElementById("aboutpage");
pindahAbout.addEventListener("click", function () {
  window.location.href = "about.html";
});
