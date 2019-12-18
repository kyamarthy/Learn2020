
console.log("Krishna Yamarthy");

const btn = document.querySelector('button');
console.log(btn);

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

btn.onclick = function() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  console.log(rndCol);
  document.body.style.color = rndCol;
}

