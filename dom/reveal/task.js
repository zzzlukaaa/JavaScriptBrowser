const reveal = Array.from(document.getElementsByClassName("reveal"));
window.addEventListener("scroll", scrollFunc);

function scrollFunc() {
    reveal.forEach((element) => {
        let obj = ({ top, bottom, height} = element.getBoundingClientRect());
       const viewportHeight = window.innerHeight;
        if (obj.top < viewportHeight && obj.bottom < viewportHeight && obj.bottom > 0) {
            element.classList.add("reveal_active");
        } else {
            element.classList.remove("reveal_active");
        }
    });
}