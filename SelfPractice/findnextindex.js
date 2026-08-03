function findLongest(words){
    let longestWord = ''
    for(const word of words){
        if(word.length > longestWord.length){
            longestWord = word;
        }
    }
    return longestWord;
}


function nextIndexFind(word, character, _index){
    for(let i = _index + 1; i<word.length; i++){
        if(word[i] === character){
            return i;
        }
    }
    return -1
}



function mapString(word) {
    const map = {};

    for(let i = 0; i<word.length; i++){
        let letter = word[i];
        if(!map[letter]){
            map[letter] = [];
        }

        map[letter].push(i)

    }
    return map;
}


function findLongestMap(words){
    const longestWord = findLongest(words)
    return mapString(longestWord)
}


function compareWord(lword, tword){
    let score = 0;
    for(const key in tword){
        if(lword[key]){
            score++; //delete if order sensitive is active
            //Order Sensitive--------------------
            // const arr1 = lword[key];          |
            // const arr2 = tword[key];          |
            // for(const index of arr2){         |
            //     if(arr1.includes(index)){     |
            //         score++;                  |
            //     }                             |
            // }                                 |
            //-----------------------------------
        }
    }
    return score;
}


function findWord(words, target){
    let targetmap = mapString(target);
    let maxScore = 0;
    let bestMatched = '';
    for(const word of words){
        let score = compareWord(mapString(word), targetmap)
        console.log(`Score for ${word} is ${score}`);
        if(maxScore <= score){
            maxScore = score;
            bestMatched = word;
        }
        
    }
    return bestMatched;
}

const words = ['hello', 'java', 'how', 'are', 'javaScript'];
console.log(findWord(words, "java"));