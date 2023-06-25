// Business Logic

// Function to count the occurrences of each word in a passage of text
function wordOccurrences(text) {
  const textArray = text.split(" ");
  const wordCount = {};
  
  textArray.forEach(function(word) {
    const formattedWord = word.toLowerCase();
    if (formattedWord in wordCount) {
      wordCount[formattedWord]++;
    } else {
      wordCount[formattedWord] = 1;
    }
  });
  
  return wordCount;
}

// Function to sort the word occurrences in descending order
function sortOccurrences(wordCount) {
  const sortedOccurrences = [];
  
  for (let word in wordCount) {
    sortedOccurrences.push([word, wordCount[word]]);
  }
  
  sortedOccurrences.sort(function(a, b) {
    return b[1] - a[1];
  });
  
  return sortedOccurrences;
}

// Example usage
const passage = "Hi there hey yo hi hi yay yo whoa there whoa yay";
const wordCount = wordOccurrences(passage);
const sortedOccurrences = sortOccurrences(wordCount);

console.log(sortedOccurrences);
