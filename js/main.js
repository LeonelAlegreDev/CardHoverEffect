const cards = document.getElementsByClassName('card');

for(let i = 0; i < cards.length; i++){
    hoverEffect(cards[i])
}

function hoverEffect(selected){
    
    selected.addEventListener("mouseenter", function(event){
        let selected = event.target;
        let cardArticle = selected.firstElementChild.firstElementChild.firstElementChild;
        let cardImg = selected.lastElementChild;

        animationEnter(selected, cardArticle, cardImg);
    });
    selected.addEventListener("mouseleave", function(event){
        let selected = event.target;
        let cardArticle = selected.firstElementChild.firstElementChild.firstElementChild;
        let cardImg = event.target.lastElementChild;

        animationLeave(selected, cardArticle, cardImg);
    });        
}
function animationEnter(selected, cardArticle, cardImg){
    let viewportWidth = window.innerWidth;
    if(viewportWidth > 550){
        //image animation
        cardImg.style.transform = "scale(1.3) translateX(80px)";
        //card animation
        selected.style.backgroundColor = "rgb(255, 195, 106)";
        selected.style.width = "500px";
        selected.style.height = "250px";
        selected.style.borderRadius = "10px";
        //article animation
        cardArticle.style.display= "flex";
        setTimeout(function()
        {
            cardArticle.style.transform= "translateX(0)";
        }, 200);
    }
    else{
        //image animation
       cardImg.style.transform = "scale(1.3) translateX(70px)";
        //card animation
        selected.style.backgroundColor = "rgb(255, 195, 106)";
        selected.style.width = "300px";
        selected.style.height = "200px";
        selected.style.borderRadius = "10px";
        //article animation
        cardArticle.style.display= "flex";
        setTimeout(function()
        {
            cardArticle.style.transform= "translateX(0)";
        }, 200);
    }

}
function animationLeave(selected, cardArticle, cardImg){
    let viewportWidth = window.innerWidth;
    if(viewportWidth > 550){
        //image animation
        cardImg.style.transform = "scale(1) translateX(0)";
        //card animation
        selected.style.backgroundColor = "rgb(0, 28, 10)";
        selected.style.width = "250px";
        selected.style.height = "250px";
        selected.style.borderRadius = "100%";
        //article animtion
        cardArticle.style.transform= "translateX(100%)";
        cardArticle.style.display= "none";
    }
    else{
        //image animation
        cardImg.style.transform = "scale(1) translateX(0)";
        //card animation
        selected.style.backgroundColor = "rgb(0, 28, 10)";
        selected.style.width = "150px";
        selected.style.height = "150px";
        selected.style.borderRadius = "100%";
        //article animtion
        cardArticle.style.transform= "translateX(100%)";
        cardArticle.style.display= "none";
    }
}