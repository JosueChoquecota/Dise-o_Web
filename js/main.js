function loadComponent(id, file) {
    fetch(file)
    .then(res=> res.text())
    .then(data => {
        document.getElementById(id).innerHTML = data;
    })
}
window.addEventListener("DOMContentLoaded", () => {
    loadComponent("header", "../../components/header.html");
    loadComponent("footer", "../../components/footer.html");
    loadComponent("body", "components/body.html")
    loadComponent("body2", "components/body2.html")
    loadComponent("", "")


    setTimeout(() => {
            loadComponent("cards", "components/card/card.html")
            loadComponent("promCard", "components/card/promCard.html")
            loadComponent("aboutUs","components/aboutUs/aboutUs.html")
    }, 200);
  });


