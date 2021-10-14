//Some very important things :o
var Latin = require("./lib/latin.js");
var letters = require("./lib/letters.js");

/**
 * This function latinizes the string.
 * For example: "héľĺô woŕlď" -> "hello world"
 * @param {String} string
 * @returns {String} Latinized string.
 */
exports.latinize = function(string) {
  return string.replace(/[^A-Za-z0-9\[\] ]/g, function(a){return Latin.latin_map[a]||a});
}

/**
 * Alias for latinize().
 * This function latinizes the string.
 * For example: "héľĺô woŕlď" -> "hello world"
 * @param {String} string
 * @returns {String} Latinized string.
 */
exports.latinise = function(string) {
  return string.replace(/[^A-Za-z0-9\[\] ]/g, function(a){return Latin.latin_map[a]||a});
}

/**
 * This function removes numbers.
 * For example: "1orange 2apples 3strawberries" -> "orange apples strawberries"
 * @param {String} string
 * @returns {String} String without numbers.
 */
exports.removeNumbers = function(string) {
  return string.replace(/[0-9]/g, "");
}

/**
 * This function removes letters.
 * For example: "1orange 2apples 3strawberries 4úäňô" -> "1 2 3 4"
 * @param {String} string
 * @returns {String} String without letters.
 */
exports.removeLetters = function(string) {
  return string.replace(new RegExp("["+unescape(letters.letters)+"]","g"), "");
}

/**
 * This function removes special characters except whitespace.
 * For example: "hel-lo. wor,ld!" -> "hello world"
 * @param {String} string
 * @returns {String} String without special characters except whitespace.
 */
exports.removeSpecialCharacters = function(string) {
  return string.replace(new RegExp("[^0-9"+unescape(letters.letters)+" ]","g"), "");
}

/**
 * This function randomizes the case of characters.
 * For example: "apple" -> "aPPlE"
 * @param {String} string
 * @returns {String} String with randomized the case of characters.
 */
exports.randomCase = function(string) {
  var edited = "";
  for(i=0; i < string.length; i++) {
    //Generate letter with random case
    var random = Math.round(Math.random());

    if(random === 0) {
      new_letter = string[i].toLowerCase();
    } else {
      new_letter = string[i].toUpperCase();
    }

    edited = edited + new_letter;
  }

  return edited;
}

/**
 * This function alternates the case of characters.
 * For example: "strawberry" -> "StRaWbErRy"
 * @param {String} string
 * @param {Boolean} start_with_uppercase Defaultly true
 * @param {Boolean} ignore_whitespace Defaultly true
 * @returns {String} String with alternated case.
 */
exports.alternateCase = function(string, start_with_uppercase, ignore_whitespace) {
  if(!start_with_uppercase && start_with_uppercase !== false) start_with_uppercase = true;
  if(!ignore_whitespace && ignore_whitespace !== false) ignore_whitespace = true;
  var edited = "";

  if(ignore_whitespace) edit = string.replace(/ /g, "");
  if(!ignore_whitespace) edit = string;

  //Alternate case based on given params
  for(i=0,y=0; i < edit.length, y < string.length; i++, y++) {
    if(edit[i] === undefined) continue;

    //Check if the current character is whitespace and ignore it
    if(ignore_whitespace && string[y] == " ") {
      edited = edited + " ";
      i--;
      continue;
    }

    //Alternate
    if(i % 2 == 0) {
      if(start_with_uppercase) edited = edited + edit[i].toUpperCase();
      if(!start_with_uppercase) edited = edited + edit[i].toLowerCase();
    } else {
      if(start_with_uppercase) edited = edited + edit[i].toLowerCase();
      if(!start_with_uppercase) edited = edited + edit[i].toUpperCase();
    }

  }

  return edited;
}

/**
 * This function reverses the string.
 * For example: "orange" -> "egnaro"
 * @param {String} string
 * @returns {String} String with reversed content.
 */
exports.reverseContent = function(string) {
  return string.split("").reverse().join("");
}

/**
 * This function reverses case of every character in the string.
 * For example: "HelLo" -> "hELlO"
 * @param {String} string
 * @returns {String} String with reversed case.
 */
exports.reverseCase = function(string) {
  var edited = "";

  //Reverse case of every letter
  for(i=0; i < string.length; i++) {
    if(string[i] === string[i].toLowerCase()) {
      edited = edited + string[i].toUpperCase();
    } else {
      edited = edited + string[i].toLowerCase();
    }
  }

  return edited;
}

/**
 * This function finds every specific character's index in the string.
 * For example: "potato", "o" -> [ 1, 5 ]
 * @param {String} string
 * @param {String} to_find
 * @returns {Array} Array with found indexes.
 */
exports.findCharIndexes = function(string, to_find) {
  var found = [];

  for(i=0; i < string.length; i++) {
    if(string[i] === to_find) found.push(i);
  }

  return found;
}


/**
 * This function extracts every character in the string to array or string.
 * For example: "feeling!" -> [ "f", "e", "l", "i", "n", "g", "!" ] or "fe.el" -> "fe.l"
 * @param {String} string
 * @param {Boolean} to_array Defaulty true
 * @param {Boolean} repeat_characters Defaulty false
 * @returns {any} Array or string with extracted characters.
 */
exports.extractCharacters = function(string, to_array, repeat_characters) {
  if(!to_array && to_array !== false) to_array = true;
  if(!repeat_characters && repeat_characters !== false) repeat_characters = false;

  var characters = [];
  var characters_string = "";

  for(i=0; i < string.length; i++) {

    //Extract characters
    if(to_array) { //Extract to Array
      if(repeat_characters) {
        characters.push(string[i]);
      } else {
        if(!characters.includes(string[i])) {
          characters.push(string[i]);
        }
      }
    } else { //Extract to String
      if(repeat_characters) {
        characters_string = characters_string + string[i];
      } else {
        if(!characters_string.includes(string[i])) {
          characters_string = characters_string + string[i];
        }
      }
    }
  }

  if(to_array) {
    return characters;
  } else {
    return characters_string;
  }
}

/**
 * This function shuffles the string.
 * For example: "entity" -> "tyetin"
 * @param {String} string
 * @returns {String} Shuffled string.
 */
exports.shuffle = function(string) {
  var array = string.split("");

  //Shuffle
  for(i=0; i < array.length; i++) {
    const y = Math.floor(Math.random() * (i + 1));
    [array[i], array[y]] = [array[y], array[i]];
  }

  return array.join("");
}

/**
 * This function joins strings from array randomly.
 * For example: [ "ab", "cd", "ef" ] -> "cdefab" or [ "ab", "cd", "ef" ] -> "efcd"
 * @param {Array} array
 * @param {Number} join_specific_amount Defaultly 0
 * @returns {String} String, that's made from randomly joined strings.
 */
exports.randomJoin = function(array, join_specific_amount) {
  if(!join_specific_amount) { //Join everything together
    //Shuffle
    for(i=0; i < array.length; i++) {
      const y = Math.floor(Math.random() * (i + 1));
      [array[i], array[y]] = [array[y], array[i]];
    }
    return array.join("");
  } else { //Join only two strings together
    if(array.length < join_specific_amount) throw new Error(`Error: Array length (${array.length}) is shorter than given amount ${join_specific_amount}.`);
    if(join_specific_amount < 0) throw new Error(`Error: Given amount ${join_specific_amount} is invalid. Choose number that's greater than 0.`);
    var new_array = [];
    for(i=0; i < join_specific_amount; i++) {
      random_index = Math.floor(Math.random() * array.length);
      new_array.push(array[random_index]);
      array.splice(random_index, 1);
    }
    return new_array.join("");
  }
}