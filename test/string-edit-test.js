const stringEdit = require('../dist');

if(stringEdit.removeNumbers('2727272727o01245275274574775272ra7227277272272n1g227272727e') == "orange") {
  console.log("removeNumbers() works");
};

if(stringEdit.removeLetters('ópäŕdaw5ddsópäŕdaíííííííiiiiiióqřřřřddddddddddđđdĐĐwdĺľ0hhdfdghfduzhfguszfszfgduzsfgzdusgfmňŁópäŕdshfgujsbfghvbsdguhfvbsdaw') == "50") {
  console.log("removeLetters() works");
};

if(stringEdit.removeSpecialCharacters('h,.-,-,?:__:,?:__?:_?:_?:_ey12"""!!!-!§"!---?:--.-,-(//(<>>>>>3') == "hey123") {
  console.log("removeSpecialCharacters() works");
};

if(stringEdit.reverseCase('HoUse') == "hOuSE") {
  console.log("reverseCase() works");
};

if(stringEdit.alternateCase('hello world') == "HeLlO wOrLd") {
  console.log("alternateCase() works");
};