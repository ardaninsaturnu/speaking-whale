const input = "Merhaba sayın arkadaşlar";
const vowels = ["a","e","i","o","u"];

let resultArray = [] ;

for (let iix = 0 ; iix < input.length ; iix++ ) {

    for (let jjx = 0; jjx < vowels.length ; jjx++ ) {

      if( input[iix] === vowels[jjx] ) {

       if (input[iix] === 'e') {
         resultArray.push("ee")
       } else if (input[iix] ==='u') {
         resultArray.push("uu")
       } else {
         resultArray.push(input[iix])
       }

      }
  }
}
console.log(resultArray.join("").toUpperCase())
