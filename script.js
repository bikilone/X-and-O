// 1. napraviti mrezu ++
// 2. napraviti logiku da unosimo x i oks (naizmenicno) na nasu mrezu - dom manipulacija
// 3. neki niz, koji bi belezio gde se nalaze x i oks .push() x = [3, 5] o = [] 1-9 u dva niza

// addEventListener
// removeEventListener
var opsegGledanja = document.getElementsByClassName("container")[0];
var upisX = [];
var upisO = [];
var counter = 0;
var winningArrays = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

opsegGledanja.addEventListener("click", function(event) {
  var dataId = parseInt(event.target.dataset.id);
  if (event.target.classList.contains("polja")) {
    // da li je iks ili je oks

    // provera da li je iks ili oks na redu
    if (counter % 2 == 0) {
      // provera da li se pozicija nalazi vec u nekom od nizova
      if (!(upisX.includes(dataId) || upisO.includes(dataId))) {
        counter++;
        event.target.innerText = "O";
        upisO.push(dataId);
        checkSubArray(winningArrays, upisO);
      }
    } else {
      if (!(upisO.includes(dataId) || upisX.includes(dataId))) {
        counter++;
        event.target.innerText = "X";
        upisX.push(dataId);
        checkSubArray(winningArrays, upisX);
      }
    }
  }
});

var polja = document.getElementsByClassName("polja");

for (var i = 0; i < polja.length; i++) {
  polja[i].setAttribute("data-id", i);
}

// how to chekc subarray

function checkSubArray(arrayOfSubarrays, bigArray) {
  // go through list of winning arrays
  for (var i = 0; i < arrayOfSubarrays.length; i++) {
    // set counter  (we need 3 to finish game)
    var counters = 0;
    for (var j = 0; j < arrayOfSubarrays[i].length; j++) {
      /// check if each of number from winning combinations is in current X or O array
      if (bigArray.includes(arrayOfSubarrays[i][j])) {
        counters++;
      }
      // if there is matching winning combination
      if (counters == 3) {
        console.log("WIN WIN WIN!!!!!!");
        return true;
      }
    }
  }
  return false;
}
