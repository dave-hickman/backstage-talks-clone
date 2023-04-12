const body = document.querySelector('body')

window.addEventListener('scroll', function(){
    const scrollPosition=window.scrollY;
    if(scrollPosition < 500){
        body.classList.remove('green', 'yellow', 'red', 'blue', 'orange');
    }
    else if (scrollPosition < 1000){
        body.classList.remove('white');
        body.classList.add('green');}
    else if (scrollPosition < 2000 && scrollPosition > 1000){
        body.classList.remove('green');
        body.classList.add('orange');
    }
    else if (scrollPosition > 2000 && scrollPosition < 3000){
        body.classList.remove('orange');
        body.classList.add('yellow');
    }
    else if (scrollPosition > 3000 && scrollPosition < 4000){
        body.classList.remove('yellow');
        body.classList.add('blue');
    }
    else if (scrollPosition > 4000 ){
        body.classList.remove('blue');
        body.classList.add('red');
    }
    }
);

let sections = document.getElementsByTagName('section');
// tracks index of current section
let currentSectionIndex = 0;

document.addEventListener('wheel', e => {
  if (e.wheelDeltaY > 0 && currentSectionIndex - 1 >= 0) {
    // wheel up
    sections[currentSectionIndex].className = '';
    currentSectionIndex--;
    sections[currentSectionIndex].className = 'active';
  } else if (e.wheelDeltaY < 0 && currentSectionIndex + 1 < sections.length) {
    // wheel down
    sections[currentSectionIndex].className = '';
    currentSectionIndex++;
    sections[currentSectionIndex].className = 'active';
  }
});
