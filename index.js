const characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

document.getElementById("colorBtn").onclick = () => {
    let color = random();
    document.getElementById("hex").textContent = color;
    document.body.style.backgroundColor = color;
}

const random = () => {
    let code = "#";
    for (let i = 0; i < 6; i++) {
        code += characters[Math.floor(Math.random() * characters.length)]
    }
    return code;
}

document.getElementById("hex").onclick = () => navigator.clipboard.writeText(document.getElementById("hex").textContent)