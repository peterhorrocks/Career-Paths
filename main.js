var snapper = document.getElementsByClassName("snapper")[0];
all = Array.from(snapper.children);
all.forEach(element => {
    element.addEventListener("wheel", function(e) {
        if (snapper.scrollTop >= window.innerHeight*7 && e.deltaY > 0) {
            snapper.classList.add("smooth");
        } else if (snapper.scrollTop <= window.innerHeight*7) {
            snapper.classList.remove("smooth");
        }

    })
})





