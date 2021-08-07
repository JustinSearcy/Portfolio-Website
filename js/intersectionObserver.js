const faders = document.querySelectorAll(".fade-in");

const options = {
    root: null,
    threshold: 0,
    rootMargin: "0px 0px -200px 0px",
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.toggle("appear");
            observer.unobserve(entry.target);
        }
    });
}, options);

faders.forEach(fader => {
    observer.observe(fader);
});
