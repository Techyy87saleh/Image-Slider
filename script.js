let next = document.getElementById('next');
let previous = document.getElementById('prev');
let imgTag  = document.querySelector('img');
let i = 0;
let images = ['sports.jpg','sports1.jpg','office.jpg'];
//  console.log(images);

next.addEventListener('click',()=>{
    i++;
    if( i > images.length-1){
       i = 0;
   }
   imgTag.src =  images[i];
 });

 previous.addEventListener('click',()=>{
    i--;
    if(i < 0){

       i = images.length-1;
    }
   imgTag.src = images[i];
 })