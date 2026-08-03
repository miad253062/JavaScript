function formatAndCheck(sentence){
    let map = {}
    const cleanedText = sentence.trim();
    const reverseText = cleanedText.split('').reverse().join('');
    const reverseWord = cleanedText.split(' ').reverse().join(' ');
    const hasjavaScript = cleanedText.toLowerCase().includes("javascript");
    const isStartsLearning = (cleanedText.toLowerCase().split(" ")[0] === "learning")

    map.cleanedText = cleanedText;
    map.reverseText = reverseText;
    map.reverseWord = reverseWord;
    map.hasjavaScript = hasjavaScript;
    map.isStartsLearning = isStartsLearning;
    return map;
}   

console.log(formatAndCheck("Learning JavaScript is easy"))