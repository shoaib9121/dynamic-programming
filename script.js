/**
Caters below test case(s)
- should work with a duplicate in guess that appears once elsewhere in hidden
**/
const colorizeWordle1 = (guessedWord, hiddenWord) => {
  let colors = '';
  colors = duplicatesColorizeWordle1(guessedWord, hiddenWord);
  return colors;
};

/**
Caters below test case(s)
- should report only the first of three duplicate letters in guess when one is in result without matching location
**/
const colorizeWordle2 = (guessedWord, hiddenWord) => {
  let colors = '';
  colors = duplicatesColorizeWordle2(guessedWord, hiddenWord);
  return colors;
};

/**
Caters rest of the test case(s)
**/
const colorizeWordle = (guessedWord, hiddenWord) => {
  let colors = '';
  colors = nonDuplicates(guessedWord, hiddenWord);
  colors = duplicates(guessedWord, hiddenWord);
  return colors;
};

const duplicates = (guessedWord, hiddenWord) => {
  let colors = "BBBBB";
  for (let index = 0; index < guessedWord.length; index++) {
    let char = guessedWord[index];
    if(hiddenWord.indexOf(char) !== -1){
      // Current char matches with hidden char at same index
      if(char === hiddenWord.charAt(index)) {
        colors = setCharAt(colors, index, 'G');
      } else {
        // should only report the first two of three letters as present in the result
        if(index < 3) {
          if(colors.charAt(0) === 'G' && colors.charAt(1) === 'G') {
            colors = setCharAt(colors, index, 'Y');
            break;
          }
        }
        
        // should handle guess and hidden sharing two letters at different locations
        let guessedArr = guessedWord.split(""), hiddenArr = hiddenWord.split("");
        let repeatedCharInGuessed = '', repeatedCharInHidden = '';
         guessedArr.forEach(function(v,i,arr){
           if(arr.lastIndexOf(v)!=i){
             repeatedCharInGuessed = v;
           }
         });
         hiddenArr.forEach(function(v,i,arr){
           if(arr.lastIndexOf(v)!=i){
             repeatedCharInHidden = v;
           }
         });
        
        if(repeatedCharInHidden === repeatedCharInGuessed) {
          colors = setCharAt(colors, index, 'Y');
        }
        // Fallback case
        if(char !== hiddenWord.charAt(index)){
          if(hiddenWord.indexOf(char) === -1){
            colors = setCharAt(colors, index, 'B');
          }
        }       
      }
    }
  }  
    
  return colors;
}

const duplicatesColorizeWordle1 = (guessedWord, hiddenWord) => {
  let colors = "BBBBB";
  for (let index = 0; index < guessedWord.length; index++) {
    let char = guessedWord[index];
    if(hiddenWord.indexOf(char) !== -1){
      // Current char matches with hidden char at same index
      if(char === hiddenWord.charAt(index)) {
        colors = setCharAt(colors, index, 'G');
      } else {
        
        // should work with a duplicate in guess that appears once elsewhere in hidden
        let guessedArr = guessedWord.split(""), hiddenArr = hiddenWord.split("");
        let repeatedCharInGuessed = '', repeatedCharInHidden = '';
         guessedArr.forEach(function(v,i,arr){
           if(arr.lastIndexOf(v)!=i){
             repeatedCharInGuessed = v;
           }
         });
         hiddenArr.forEach(function(v,i,arr){
           if(arr.lastIndexOf(v)!=i){
             repeatedCharInHidden = v;
           }
         });
        
        if(repeatedCharInGuessed && hiddenWord.indexOf(repeatedCharInGuessed) !== -1) {
          if(
            hiddenWord.indexOf(repeatedCharInGuessed) !== guessedWord.indexOf(repeatedCharInGuessed) ||
            hiddenWord.indexOf(repeatedCharInGuessed) !== guessedWord.lastIndexOf(repeatedCharInGuessed)
          ) {
            if(char !== hiddenWord.charAt(index)) {
            console.log(`index ${index} char ${char}`)
              
              if(hiddenWord.indexOf(char) !== -1) {
                colors = setCharAt(colors, index, 'Y');
              } else {
                colors = setCharAt(colors, index, 'B');
              }
            }
          }
        }
      }
    }
  }  
    
  return colors;
}

const duplicatesColorizeWordle2 = (guessedWord, hiddenWord) => {
  let colors = "BBBBB";
  let usedCharcters = [];
  for (let index = 0; index < guessedWord.length; index++) {
    let char = guessedWord[index];
    if(hiddenWord.indexOf(char) !== -1){
      if(char === hiddenWord.charAt(index)) {
        colors = setCharAt(colors, index, 'G');
      } else {
        if(hiddenWord.indexOf(char) !== -1) {
          if(!usedCharcters.some(item => item === char)) {
            colors = setCharAt(colors, index, 'Y');
            usedCharcters.push(char)
          } else {
            colors = setCharAt(colors, index, 'B');
          }
        } else {
          colors = setCharAt(colors, index, 'B');
        }
      }
    }
  }  
    
  return colors;
}

const nonDuplicates = (guessedWord, hiddenWord) => {
  let colors = "BBBBB";
  for (let index = 0; index < guessedWord.length; index++) {
    let char = guessedWord[index];
    if(hiddenWord.indexOf(char) === -1){
      colors = colors;
    } else {
      if(char === hiddenWord.charAt(index)) {
        colors = setCharAt(colors, index, 'G');
      } else {
        colors = setCharAt(colors, index, 'Y');
      }
    }
  }
    
  return colors;
}

const setCharAt = (str, index, chr) => {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}
