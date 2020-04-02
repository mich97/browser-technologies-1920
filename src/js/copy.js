if (document.execCommand("copy") == false) {
    document.getElementById("withoutSupport").style.display = "none";
    document.getElementById("withSupport").style.display = "block";
}

function copy() {
    var copyText = document.querySelector("#input");
    copyText.select();
    document.execCommand("copy");
}

document.querySelector("#copy").addEventListener("click", copy);