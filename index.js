const ctabtn = document.querySelector("#cta-btn");
const ctafeedback =document.querySelector("#cta-feedback")
let counter = 0;

ctabtn.addEventListener("click", () =>{
    counter++;
    console.log(counter);


    if (counter === 1 ){
        ctafeedback.classList.remove("hidden");
        ctafeedback.textContent = "hallo harusnya muncul!!";
    }
    else if (counter === 2 ) {
        ctafeedback.textContent = "Ini teks bebas yang kamu mau!";
    }
    else if (counter === 3){
        ctabtn.style.display = "none";
    }
})