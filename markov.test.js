const MarkovMachine = require('./markov');

describe('MarkovMachine', () => {
  test('should not return undefined', () => {
    const text = 'the cat in the hat';
    const markovMachine = new MarkovMachine(text);
    const generatedText = markovMachine.makeText();
    expect(generatedText).not.toBe(undefined);
  });
  
  test('should return a string', () => {
    const text = 'the cat in the hat';
    const markovMachine = new MarkovMachine(text);
    const generatedText = markovMachine.makeText();
    expect(typeof generatedText).toBe('string');
  });

  test('should handle length of input or less', () => {
    const text = 'the cat in the hat';
    const markovMachine = new MarkovMachine(text);
    const generatedText = markovMachine.makeText(3);
    expect(generatedText.split(' ').length).toBeLessThanOrEqual(3);
  });

  test('should handle input text with only one word', () => {
    const text = 'hello';
    const markovMachine = new MarkovMachine(text);
    const generatedText = markovMachine.makeText();
    expect(generatedText).toBe('hello');
  });

});