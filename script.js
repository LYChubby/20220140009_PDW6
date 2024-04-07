const navbarHeight = document.querySelector('.navbar').offsetHeight;

const navbarLinks = document.querySelectorAll('.navbar a');

navbarLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 

        const targetId = this.getAttribute('href'); 
        const targetElement = document.querySelector(targetId); 

        if (targetElement) {
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

const frieren = document.getElementById("frieren");
frieren.addEventListener("click", () => {

    createPopUp("Sepuh Kita Tercinta... FRIEREN");

    const deskripsi = document.getElementById("des-frieren");
    deskripsi.classList.remove("hidden");

});

const fern = document.getElementById("fern");
fern.addEventListener("click", () => {

    createPopUp("Murid Sepuh Kita Tercinta... FERN");

    const deskripsi = document.getElementById("des-fern");
    deskripsi.classList.remove("hidden");

});

const stark = document.getElementById("stark");
stark.addEventListener("click", () => {

    createPopUp("Si Gak Peka... Stark");

    const deskripsi = document.getElementById("des-stark");
    deskripsi.classList.remove("hidden");

});

const audio = document.getElementById("OST");
audio.addEventListener("click", () => {

    alert ("Ini OST Sousou no Frieren")

    const deskripsi = document.getElementById("audio");
    deskripsi.classList.remove("hidden");

});

function createPopUp(title, message) {
    const popUp = document.createElement("div");
    popUp.className = "pop-up";
    popUp.style.display = "block";
    popUp.style.position = "fixed";
    popUp.style.zIndex = "1000";
    popUp.style.top = "0";
    popUp.style.left = "0";
    popUp.style.width = "100%";
    popUp.style.height = "100%";
    popUp.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  
    const popUpContent = document.createElement("div");
    popUpContent.className = "pop-up-content";
    popUpContent.style.backgroundColor = "#fff";
    popUpContent.style.borderRadius = "5px";
    popUpContent.style.padding = "20px";
    popUpContent.style.position = "absolute";
    popUpContent.style.top = "50%";
    popUpContent.style.left = "50%";
    popUpContent.style.transform = "translate(-50%, -50%)";
  
    const popUpTitle = document.createElement("h1");
    popUpTitle.textContent = title;
    popUpTitle.style.fontSize = "24px";
    popUpTitle.style.marginBottom = "10px";
  
    const popUpMessage = document.createElement("p");
    popUpMessage.textContent = message;
    popUpMessage.style.fontSize = "18px";
  
    const closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.style.backgroundColor = "#007bff";
    closeButton.style.color = "#fff";
    closeButton.style.border = "none";
    closeButton.style.borderRadius = "5px";
    closeButton.style.padding = "10px 20px";
    closeButton.style.marginTop = "10px";
    closeButton.style.cursor = "pointer";
  
    closeButton.addEventListener("click", () => {
        popUp.style.display = "none";
    });
  
    popUpContent.appendChild(popUpTitle);
    popUpContent.appendChild(popUpMessage);
    popUpContent.appendChild(closeButton);
    popUp.appendChild(popUpContent);
  
    document.body.appendChild(popUp);
  }