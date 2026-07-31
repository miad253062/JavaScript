const words = [
    "happy",
    "congratulation",
    "you",
    "got",
    "job",
    "at",
    "google"
];

function nextIndexFind(word, letter, startIndex) {
    for (let i = startIndex + 1; i < word.length; i++) {
        if (word[i] === letter) {
            return i;
        }
    }
    return -1;
}

function mapString(word) {
    const map = {};

    for (let i = 0; i < word.length; i++) {
        const letter = word[i];

        if (!map[letter]) {
            map[letter] = [];
        }

        map[letter].push(i);
    }

    return map;
}

function compareWords(word1, word2) {
    const map1 = mapString(word1);
    const map2 = mapString(word2);

    let score = 0;

    for (const letter in map1) {
        if (map2[letter]) {
            score += Math.min(map1[letter].length, map2[letter].length);
        }
    }

    return score;
}

function findClosestWord(dictionary, target) {

    // Exact match
    for (const word of dictionary) {
        if (word === target) {
            return word;
        }
    }

    let bestWord = "";
    let bestScore = -1;

    for (const word of dictionary) {
        const score = compareWords(word, target);

        if (score > bestScore) {
            bestScore = score;
            bestWord = word;
        }
    }

    return bestWord;
}

console.log(findClosestWord(words, "googel"));      // google
console.log(findClosestWord(words, "congratulaton"));// congratulation
console.log(findClosestWord(words, "hapy"));         // happy