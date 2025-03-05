getAdvice();

const patternDivider = document.getElementById("pattern-divider");
const adviceId = document.getElementById("advice-id");
const adviceBtn = document.getElementById("advice-btn");
const adviceContent = document.querySelector(".advice-content");


if(screen.width > 375) {
    patternDivider.src = "images/pattern-divider-desktop.svg";
}
else {
    patternDivider.src = "images/pattern-divider-mobile.svg"
}

async function getAdvice() {
    const url = "https://api.adviceslip.com/advice?timestamp=" + Date.now();
    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        const slip = await json.slip;
        
        adviceId.innerHTML = `${slip.id}`;
        adviceContent.innerHTML = `<q>${slip.advice}</q>`;

    } catch (error) {
        console.error(error.message);
    }
}

adviceBtn.addEventListener("click",getAdvice);