const canvas = document.getElementById("matrix-bg");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const chars = "01010101010101010101010101010110101001န့ၣ်ၢ်ၢၣ်ၢၥ်ၤၢၢ်ၠၥန့ၣ်,ၠၢှှမ်၂၃၄၄ဝၡဝၢၢ်ၤွ့.ှုၦဧ။ဒီးဧ✩။?ၠဒီးျ့?アイウエオカキクケコサシスセソタチツテト".split("");
const fontSize = 16;
let columns = Math.floor(canvas.width / fontSize);
let drops = new Array(columns).fill(1);

function getColor() {
    return document.body.classList.contains("dark-mode") ? "#61dafb" : "#2d2d6e";
}

function draw() {
    ctx.fillStyle = document.body.classList.contains("dark-mode")
        ? "rgba(18, 18, 18, 0.08)"
        : "rgba(250, 250, 250, 0.12)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = getColor();
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(draw, 80);

window.addEventListener("resize", () => {
    columns = Math.floor(canvas.width / fontSize);
    drops = new Array(columns).fill(1);
});