let content = document.getElementById('content');
let randomQuotes;
let quotes = [

  "Early to bed & early to rise makes a man healty wealthy & wise - Saleh imtiaz",
  "Never Give up - Salezz Varun",
  "Keep on insulting me,i will keep burning you - Imtiaz Saleh",
  "Life is not a bed of roses - Vk Rohit",
  "World will always clap on your success but not in your difficult times - Saleh Imtiaz"
]
let button = document.getElementById('btn');
button.addEventListener('click',()=>{

  let randomQuotes = quotes[Math.floor(Math.random()*quotes.length)];
  content.innerText = randomQuotes;
})