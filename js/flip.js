const flip1card = document.querySelector("#flip-1")
const flip1front = document.querySelector("#flip-1-front");
const flip1back = document.querySelector("#flip-1-back");
const flip1Inner = document.querySelector("#flip-1-inner");

// const flip2card = document.querySelector("#flip-1")
// const flip2front = document.querySelector("#flip-1-front");
// const flip2back = document.querySelector("#flip-1-back");
// const flip2Inner = document.querySelector("#flip-2-inner");
// ...


const flipCards = (e) => {
    const touch = isTouchDevice();
    if (touch === true) {
        switch (e.currentTarget.id) {
            case "flip-1":
                if (flip1front.classList.contains("side-shown")) {
                    flip1Inner.style.transform = "rotateY(180deg)";
                    flip1front.classList.remove("side-shown");
                    flip1back.classList.add("side-shown");
    
                    flip1front.ariaHidden = true;
                    flip1back.ariaHidden = false;
                } else {
                    flip1Inner.style.transform = "rotateY(0)";
                    flip1front.classList.add("side-shown");
                    flip1back.classList.remove("side-shown");
    
                    flip1front.ariaHidden = false;
                    flip1back.ariaHidden = true;
                }
                break;
            // case "flip-2":
            //     if (flip2front.classList.contains("side-shown")) {
            //         flip2Inner.style.transform = "rotateY(180deg)";
            //         flip2front.classList.remove("side-shown");
            //         flip2back.classList.add("side-shown");
    
            //         flip2front.ariaHidden = true;
            //         flip2back.ariaHidden = false;
            //     } else {
            //         flip2Inner.style.transform = "rotateY(0deg)";
            //         flip2front.classList.add("side-shown");
            //         flip2back.classList.remove("side-shown");
    
            //         flip2front.ariaHidden = false;
            //         flip2back.ariaHidden = true;
            //     }
            //     break;
            // case "flip-3":
            
            //     break;
            // case "flip-3":
        
            //     break;
            // case "flip-5":
        
            //     break;
        }
    } 
    
}

function isTouchDevice() {
  return (('ontouchstart' in window) ||
     (navigator.maxTouchPoints > 0) ||
     (navigator.msMaxTouchPoints > 0));
}

flip1card.addEventListener("click", flipCards);
// flip2card.addEventListener("click", flipCards);
// ...