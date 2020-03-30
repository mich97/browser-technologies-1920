var nextBtn = document.querySelector(".buttons .next");
var prevBtn = document.querySelector(".buttons .prev");
var slide = document.querySelectorAll(".photos .block");
var i = 0;

prevBtn.onclick = function() {
    slide[i].classList.remove("active");
    i--;

    if (i < 0) {
        i = slide.length - 1;
    }
    slide[i].classList.add("active");
};

nextBtn.onclick = function() {
    slide[i].classList.remove("active");
    i++;

    if (i >= slide.length) {
        i = 0;
    }

    slide[i].classList.add("active");
};
