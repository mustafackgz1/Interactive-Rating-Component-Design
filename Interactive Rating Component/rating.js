const stars = document.querySelectorAll(".star") ;
const rateEl = document.querySelector(".rate");
const container = document.querySelector(".container");
const feedback = document.querySelector(".feedback");
const submitBtn = document.querySelector(".submit");
const backBtn = document.querySelector(".back");
var rating;

stars.forEach((star) =>{
    star.addEventListener("click", ()=>{
        removeActiveClasses()
        star.classList.add("active");
        rating = star.innerHTML;
    })
    function removeActiveClasses(){
        stars.forEach((star)=>{
            star.classList.remove("active")
        })
    }
})

submitBtn.addEventListener("click", () =>{
    container.style.display = "none";
    feedback.style.display = "block";
    rateEl.classList.add("active")
    rateEl.innerHTML = `You gave ${rating} out of 5!`
})

backBtn.addEventListener("click", () =>{
    container.style.display = "block";
    feedback.style.display = "none";
    function removeActiveClasses(){
        stars.forEach((star)=>{
            star.classList.remove("active")
        })
    }
    removeActiveClasses()
})
