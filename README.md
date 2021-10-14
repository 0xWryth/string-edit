Typescript version of BramboraSK's string-edit package. 

<!-- BADGES/ -->

<span class="badge-npmversion"><a href="https://npmjs.org/package/string-edit" title="View this project on NPM"><img src="https://img.shields.io/npm/v/string-edit.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/string-edit" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/string-edit.svg" alt="NPM downloads" /></a></span>

<!-- /BADGES -->

# String Edit

- String Edit and String Tools
- Easy-to-Use

## Installation
```
npm install --save string-edit
```

## Features

- Latinization of text
- Removal of letters, number or special characters
- Random case, alternating case
- And many more...

## Usage


``` js
const stringEdit = require("string-edit");

//Alternate case
stringEdit.alternateCase("my name is john"); // => "My NaMe Is JoHn"
stringEdit.alternateCase("my name is john", false, false); // => "mY NaMe iS JoHn"

//Reverse case
stringEdit.reverseCase("hEllO, WhaT'S Up?"); // => "HeLLo, wHAt's uP?"

//Find character's indexes
stringEdit.findCharIndexes("potato potatoes", "o"); // => [ 1, 5, 8, 12 ]
```


## Functions

### latinize(string)

This function latinizes the string.
For example: "héľĺô woŕlď" -> "hello world"

##### string
Type: `string`
The string to be latinized.


### removeNumbers(string)

This function removes numbers.
For example: "1orange 2apples 3strawberries" -> "orange apples strawberries"

##### string
Type: `string`
The string where the numbers will be removed.


### removeLetters(string)

This function removes letters.
For example: "1orange 2apples 3strawberries 4úäňô" -> "1 2 3 4"

##### string
Type: `string`
The string where the letters will be removed.


### removeSpecialCharacters(string)

This function removes special characters except whitespace.
For example: "hel-lo. wor,ld!" -> "hello world"

##### string
Type: `string`
The string where the special characters will be removed.


### randomCase(string)

This function randomizes the case of characters.
For example: "apple" -> "aPPlE"

##### string
Type: `string`
The string where the case will be randomized.


### alternateCase(string, start_with_uppercase, ignore_whitespace)

This function alternates the case of characters.
For example: "strawberry" -> "StRaWbErRy"

##### string
Type: `string`
The string where the case will be alternated.

##### start_with_uppercase
Type: `boolean`
Default value: `true`
The alternating case will start with uppercase if true.

##### ignore_whitespace
Type: `boolean`
Default value: `true`
Whitespaces will be ignored (they won't count as character) if true.


### reverseContent(string)

This function reverses the string.
For example: "orange" -> "egnaro"

##### string
Type: `string`
The string to be reversed.


### reverseCase(string)

This function reverses case of every character in the string.
For example: "HelLo" -> "hELlO"

##### string
Type: `string`
The string where the case will be reversed.


### findCharIndexes(string, to_find)

This function finds every specific character's index in the string.
For example: "potato", "o" -> [ 1, 5 ]

##### string
Type: `string`
The string that you want to search through.

##### to_find
Type: `string`
The character to be found.


### extractCharacters(string, to_array, repeat_characters)

This function extracts every character in the string to array or string.
For example: "feeling!" -> [ "f", "e", "l", "i", "n", "g", "!" ] or "fe.el" -> "fe.l"

##### string
Type: `string`
The string with characters that will extracted.

##### to_array
Type: `boolean`
Default value: `true`
Characters will be extracted to array if true (otherwise to string).

##### repeat_characters
Type: `boolean`
Default value: `false`
Characters won't repeat if false.


### shuffle(string)

This function shuffles the string.
For example: "entity" -> "tyetin"

##### string
Type: `string`
The string to be shuffled.


### randomJoin(array, join_specific_amount)

This function joins strings from array randomly.
For example: [ "ab", "cd", "ef" ] -> "cdefab" or [ "ab", "cd", "ef" ] -> "efcd"

##### array
Type: `array`
The array from which the strings will be joined.

##### join_specific_amount
Type: `number`
Default value: `0`
The amount of strings to be joined (needs to be greater than 0).