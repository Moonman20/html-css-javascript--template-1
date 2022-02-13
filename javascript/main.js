let theColors = "0123456789ABCDEF";
let newcolors = "";

for(let i = 0;i < 6 ; i++) {
    newcolors += theColors[Math.floor(Math.random() * theColors.length)];
}

let finalColor= `#${newcolors}`;

document.body.append(finalColor);
document.body.style.backgroundColor= finalColor;

