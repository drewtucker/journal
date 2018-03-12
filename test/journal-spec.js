import { Entry } from "./../src/journal.js";

describe('Entry', function() {
  var reusableEntry;

  beforeEach(function() {
    reusableEntry = new Entry("Test", "test test test");
  });
  it('should test that the TotalWords function returns the correct amount of words', function() {
    expect(reusableEntry.TotalWords(reusableEntry.body)).toEqual(3)
  });

  it('should test that the CountVowels function returns the correct amount of vowels', function() {
    expect(reusableEntry.CountVowels(reusableEntry.body)).toEqual(3)
    
  });

  it('should test that the CountConsonants function returns the correct amount of consonants', function() {
    expect(reusableEntry.CountConsonants(reusableEntry.body)).toEqual(9)

  });
});
