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
  return str.split("")
    .map(letter => Math.random() < 0.5 ? letter.toLowerCase() : letter.toUpperCase())
    .join("");
}

/**
 * This function alternates the case of characters.
 * For example: "strawberry" -> "StRaWbErRy"
 * @param {String} str
 * @param {Boolean} start_with_uppercase Defaultly true
 * @returns {String} String with alternated case.
 */
export function alternateCase(str: string, start_with_uppercase: boolean): string {
  const remainder = start_with_uppercase ? 0 : 1;
  return str.split("")
    .map((letter, index) => index % 2 === remainder ? letter.toUpperCase() : letter.toLowerCase())
    .join("");
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
  return str.split("")
    .map(letter => letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase())
    .join("");
}

/**
 * This function finds every specific character's index in the string.
 * For example: "potato", "o" -> [ 1, 5 ]
 * @param {String} str
 * @param {String} to_find
 * @returns {Array} Array with found indexes.
 */
export function findCharIndexes(str: string, to_find: string): Array<number> {
  return str.split("")
    .map((letter, index) => letter === to_find ? index : NaN)
    .filter(index => !isNaN(index));
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