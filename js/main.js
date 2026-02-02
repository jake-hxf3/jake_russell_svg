console.log("JS file connected");

const svgs = document.querySelectorAll("#gallery");
console.log(svgs);

function logId() {
    console.log(this.id);
}

svgs.forEach(x => x.addEventListener("click", logId));