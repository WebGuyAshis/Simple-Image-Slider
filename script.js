const slider = document.querySelectorAll('.slider');
console.log(slider);

let counter = 0;

slider.forEach((slide, index)=>{
    slide.style.left = `${index * 100}%`;
})
const goLeft = () =>{
    console.log("Right Slide!");
    counter++;
    console.log("Counter= :",counter);
    if(counter >=1 ){
        console.log("Done");
        counter = - (slider.length-1);
    }
    slideImg();
}

const goRight = () =>{
   
    console.log('Left Slide!');
    counter--;
    console.log("Counter=", counter);
    if(counter <= -(slider.length)){
        console.log("Done");
        counter = 0;
    }
    slideImg();
}


const slideImg = () =>{
    slider.forEach((slide)=>{
        slide.style.transform = `translateX(${(counter * 100)}%)`
    })
}