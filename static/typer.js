const snippets = [
    'print("Hello, World!")',
    'def scan_ports(host):',
    'const app = Flask(__name__)',
    'git commit -m "fix bug"',
    'import requests',
    '<h1>Hello, World!</h1>'
];

const typerEl = document.getElementById("typer-text");
let snippetIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {
    const current = snippets[snippetIndex];

    if (!deleting) {
        typerEl.textContent = current.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
            deleting = true;
            setTimeout(type, 1200); // pause before deleting
            return;
        }
    } else {
        typerEl.textContent = current.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            deleting = false;
            snippetIndex = (snippetIndex + 1) % snippets.length;
        }
    }

    const speed = deleting ? 30 : 60;
    setTimeout(type, speed);
}

type();