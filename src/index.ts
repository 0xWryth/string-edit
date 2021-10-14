//Some very important things :o
import { latins_map, letters } from "./utils";

/**
 * This function latinizes the string.
 * For example: "héľĺô woŕlď" -> "hello world"
 * @param {String} str
 * @returns {String} Latinized string.
 */
export function latinize(str: string): string {
  return str.replace(/[^A-Za-z0-9\[\] ]/g, (substring: string) => {
    return latins_map.get(substring) ?? substring;
  });
}

/**
 * Alias for latinize().
 * This function latinizes the string.
 * For example: "héľĺô woŕlď" -> "hello world"
 * @param {String} str
 * @returns {String} Latinized string.
 */
export const latinise = latinize;

/**
 * This function removes numbers.
 * For example: "1orange 2apples 3strawberries" -> "orange apples strawberries"
 * @param {String} str
 * @returns {String} String without numbers.
 */
export function removeNumbers(str: string): string {
  return str.replace(/[0-9]/g, "");
}

/**
 * This function removes letters.
 * For example: "1orange 2apples 3strawberries 4úäňô" -> "1 2 3 4"
 * @param {String} str
 * @returns {String} String without letters.
 */
export function removeLetters(str: string): string {
  return str.replace(new RegExp("["+decodeURI(letters)+"]","g"), "");
}

/**
 * This function removes special characters except whitespace.
 * For example: "hel-lo. wor,ld!" -> "hello world"
 * @param {String} str
 * @returns {String} String without special characters except whitespace.
 */
export function removeSpecialCharacters(str: string): string {
  return str.replace(new RegExp("[^0-9"+decodeURI(letters)+" ]","g"), "");
}

/**
 * This function randomizes the case of characters.
 * For example: "apple" -> "aPPlE"
 * @param {String} str
 * @returns {String} String with randomized the case of characters.
 */
export function randomCase(str: string): string {
  var edited = "";
  for(let i=0; i < str.length; i++) {
    //Generate letter with random case
    var random = Math.round(Math.random());

    var new_letter = random === 0 ? str[i].toLowerCase() : str[i].toUpperCase();

    edited = edited + new_letter;
  }

  return edited;
}

/**
 * This function alternates the case of characters.
 * For example: "strawberry" -> "StRaWbErRy"
 * @param {String} str
 * @param {Boolean} start_with_uppercase Defaultly true
 * @param {Boolean} ignore_whitespace Defaultly true
 * @returns {String} String with alternated case.
 */
export function alternateCase(str: string, start_with_uppercase: boolean, ignore_whitespace: boolean): string {
  if(!start_with_uppercase && start_with_uppercase !== false) start_with_uppercase = true;
  if(!ignore_whitespace && ignore_whitespace !== false) ignore_whitespace = true;
  
  var edit = ignore_whitespace ? str.replace(/ /g, "") : str;
  var edited = "";

  //Alternate case based on given params
  for(let i=0,y=0; i < edit.length, y < str.length; i++, y++) {
    if(edit[i] === undefined) continue;

    //Check if the current character is whitespace and ignore it
    if(ignore_whitespace && str[y] == " ") {
      edited = edited + " ";
      i--;
      continue;
    }

    //Alternate
    if(i % 2 == 0) {
      edited += start_with_uppercase ? edit[i].toUpperCase() : edit[i].toLowerCase();
    } else {
      edited += !start_with_uppercase ? edit[i].toUpperCase() : edit[i].toLowerCase();
    }

  }

  return edited;
}

/**
 * This function reverses the string.
 * For example: "orange" -> "egnaro"
 * @param {String} str
 * @returns {String} String with reversed content.
 */
export function reverseContent(str: string): string {
  return str.split("").reverse().join("");
}

/**
 * This function reverses case of every character in the string.
 * For example: "HelLo" -> "hELlO"
 * @param {String} str
 * @returns {String} String with reversed case.
 */
export function reverseCase(str: string): string {
  var edited = "";

  //Reverse case of every letter
  for(let i=0; i < str.length; i++) {
    edited += str[i] === str[i].toLowerCase() ? str[i].toUpperCase() : str[i].toLowerCase();
  }

  return edited;
}

/**
 * This function finds every specific character's index in the string.
 * For example: "potato", "o" -> [ 1, 5 ]
 * @param {String} str
 * @param {String} to_find
 * @returns {Array} Array with found indexes.
 */
export function findCharIndexes(str: string, to_find: string): Array<any> {
  var found = [];

  for(let i=0; i < str.length; i++) {
    if(str[i] === to_find) found.push(i);
  }

  return found;
}


/**
 * This function extracts every character in the string to array or string.
 * For example: "feeling!" -> [ "f", "e", "l", "i", "n", "g", "!" ] or "fe.el" -> "fe.l"
 * @param {String} str
 * @param {Boolean} to_array Defaulty true
 * @param {Boolean} repeat_characters Defaulty false
 * @returns {any} Array or string with extracted characters.
 */
export function extractCharacters(str: string, to_array: boolean = true, repeat_characters: boolean = false): Array<String> | string {
  var res: String[] = str.split("");
  
  if (!repeat_characters) {
    res = Array.from(new Set<String>(res));
  }

  return to_array ? res : res.join("");
}

/**
 * This function shuffles the string.
 * For example: "entity" -> "tyetin"
 * @param {String} str
 * @returns {String} Shuffled string.
 */
export function shuffle(str: string): string {
  var array = str.split("");

  //Shuffle
  for(let i=0; i < array.length; i++) {
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
export function randomJoin(array: Array<string>, join_specific_amount: number): string {
  if(!join_specific_amount) { //Join everything together
    //Shuffle
    for(let i=0; i < array.length; i++) {
      const y = Math.floor(Math.random() * (i + 1));
      [array[i], array[y]] = [array[y], array[i]];
    }
    return array.join("");
  } else { //Join only two strings together
    if(array.length < join_specific_amount) throw new Error(`Error: Array length (${array.length}) is shorter than given amount ${join_specific_amount}.`);
    if(join_specific_amount < 0) throw new Error(`Error: Given amount ${join_specific_amount} is invalid. Choose number that's greater than 0.`);
    var new_array = [];
    for(let i=0; i < join_specific_amount; i++) {
      let random_index = Math.floor(Math.random() * array.length);
      new_array.push(array[random_index]);
      array.splice(random_index, 1);
    }
    return new_array.join("");
  }
}