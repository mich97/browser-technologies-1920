var currentTab = 0;
showTab(currentTab);

function showTab(n) {
    var x = document.getElementsByTagName("fieldset");
    x[n].style.display = "block";

    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").style.display = "none";
        document.getElementById("subBtn").style.display = "inline";
    } else {
        document.getElementById("nextBtn").style.display = "inline";
        document.getElementById("subBtn").style.display = "none";
    }

    fixStepIndicator(n)
}

function nextPrev(n) {
    var x = document.getElementsByTagName("fieldset");
    x[currentTab].style.display = "none";

    currentTab = currentTab + n;

    if (currentTab >= x.length) {
        document.getElementById("regForm").submit();
        return false;
    }
    showTab(currentTab);
}

function fixStepIndicator(n) {
    var i, x = document.getElementsByTagName("span");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace("active", "");
    }
    x[n].className += " active";
}

document.getElementById("prevBtn").onclick = function () {
    nextPrev(-1)
};

document.getElementById("nextBtn").onclick = function () {
    nextPrev(1)
};
