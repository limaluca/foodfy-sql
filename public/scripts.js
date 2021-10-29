var currentPage = location.pathname;
var navAnchors = document.querySelectorAll("header nav a");

for (item of navAnchors) {
    if (currentPage.includes(item.getAttribute("href"))) {
        item.classList.add("active")
    }
}