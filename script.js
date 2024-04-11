function loadContent(contentId, clickedLink) {
    const mainContent = document.getElementById("mainContent");

    const contentDivs = mainContent.querySelectorAll("div[id$='-content']");
    contentDivs.forEach(div => div.style.display = "none");

    const selectedContent = document.getElementById(contentId);
    if (selectedContent) {
        selectedContent.style.display = "block";

        const menuItems = document.querySelectorAll(".menu li");
        menuItems.forEach(item => item.classList.remove("active"));
        if (clickedLink) {
            clickedLink.closest("li").classList.add("active");
        }
    }
}

