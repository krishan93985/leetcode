/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const wordMap = new Map()
    for(let i=0; i<wordList.length; i++)
        wordMap.set(wordList[i],true)

    const queue = []
    queue.push({word:beginWord, level:1})

    while(queue.length){
        let {word:currWord, level} = queue.shift();
        for(let i=0; i<currWord.length; i++){
            for(let ch=0; ch<26; ch++){
                let newChar = String.fromCharCode('a'.charCodeAt(0) + ch)
                let word = currWord.slice(0,i) + newChar + currWord.slice(i+1,currWord.length)
                if(word === currWord) continue;

                if(wordMap.has(word)){
                    if(word === endWord) return level+1;

                    wordMap.delete(word)
                    queue.push({word, level:level+1})
                } 
            }
        }
    }
    
    return 0;
};