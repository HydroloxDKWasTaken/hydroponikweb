document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".btn"); // Hämtar menuknappen
    const sidenav = document.querySelector(".sidenav"); // Hämtar sidomenyn
    const menuLinks = document.querySelectorAll(".items a"); // Hämtar alla länkar i menyn

    // Öppna och stäng menyn vid knapptryck
    btn.addEventListener("click", (event) => {
        document.body.classList.toggle("active");
        event.stopPropagation(); // Förhindra att klick händelsen bubblar upp
    });
    console.log(menuLinks);
    // Stäng menyn när man klickar på en länk
    menuLinks.forEach(link => {
        
        link.addEventListener("click", () => {
            
            document.body.classList.remove("active");
        });
    });

    // Stäng menyn om man klickar utanför den
    document.addEventListener("click", (event) => {
        if (!sidenav.contains(event.target) && !btn.contains(event.target)) {
            document.body.classList.remove("active");
        }
    });
});
