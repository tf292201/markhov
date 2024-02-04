// makeText.js
const fs = require('fs');
const MarkovMachine = require('./markov');

const filename = process.argv[2];
if (!filename) {
  console.error('Please provide a filename as an argument.');
  process.exit(1);
}

// Read the content of the specified file
const text = fs.readFileSync(filename, 'utf8');

// Instantiate MarkovMachine with the text
const markovMachine = new MarkovMachine(text);

// Generate and print random text
const generatedText = markovMachine.makeText();
console.log(generatedText);
