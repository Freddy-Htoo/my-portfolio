const dot = document.getElementById("cursor-dot");

document.addEventListener("mousemove", (e) => {
    dot.style.left = `${e.clientX}px`;
    dot.style.top = `${e.clientY}px`;
});

document.addEventListener("mousedown", () => {
    dot.style.transform = "translate(-50%, -50%) scale(1.6)";
});

document.addEventListener("mouseup", () => {
    dot.style.transform = "translate(-50%, -50%) scale(1)";
});