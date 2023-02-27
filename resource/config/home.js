let container = document.querySelector(".container");
let icon = document.querySelectorAll(".container .sidebar div");
let mainbar = document.querySelector(".container .mainbar");
let viewbar = document.querySelector(".container .viewbar");
let sendbar = document.querySelector(".container .sendbar");
console.log(icon);

window.addEventListener("click",(e) => {

    if(e.target.classList.contains("send")){
        container.style.gridTemplateColumns ="1.5fr 15fr";
        mainbar.style.display = "none";
        viewbar.style.display = "none";
        icon.forEach((e) => {
            if(e.classList.contains("send")){
                e.classList.add("active");
            }else{
                e.classList.remove("active")
            }
        })
        sendbar.style.display = "block";
    }else if(e.target.classList.contains("email")){
        container.style.gridTemplateColumns ="1.5fr 6fr 9fr";
        mainbar.style.display = "flex";
        viewbar.style.display = "block";
        icon.forEach((e) => {
            if(e.classList.contains("email")){
                e.classList.add("active");
            }else{
                e.classList.remove("active")
            }
        })
        sendbar.style.display = "none";
    }
})