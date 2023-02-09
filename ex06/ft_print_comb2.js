function displayCombinations() {
    for (let i = 0; i <= 9; i++) {
      for (let j = 0; j <= 9; j++) {
        for (let k = 0; k <= 9; k++) {
          for (let l = 0; l <= 9; l++) {
            console.log(`${i}${j}${k}${l}`.padStart(4, '0'));
          }
        }
      }
    }
  }
  
  displayCombinations();
  