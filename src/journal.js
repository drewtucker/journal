

export function Entry(title, body)
{
  this.title = title;
  this.body = body;
}

Entry.prototype.TotalWords = function(entry)
{
  var wordCount = 0;
  var entryArray = entry.split(" ");
  entryArray.forEach(function()
  {
    wordCount += 1;
  });
  return wordCount;
};

Entry.prototype.CountVowels = function(entry)
{
  var vowelArray = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];
  var totalVowels = 0;
  var entryArray = entry.split("");
  for (var count = 0; count < entryArray.length; count++)
  {
    for(var vowelIndex = 0; vowelIndex < vowelArray.length; vowelIndex++)
    {
      var entryChar = entry[count];
      var vowelChar = vowelArray[vowelIndex];
      if (entryChar === vowelChar)
      {
        totalVowels+= 1;
      }
    }
  }
  return totalVowels;
};

Entry.prototype.CountConsonants = function(entry)
{
  var consonantArray = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"];
  var totalConsonants = 0;
  var entryArray = entry.toLowerCase().split("");
  for (var count = 0; count < entryArray.length; count++)
  {
    for(var consonantIndex = 0; consonantIndex < consonantArray.length; consonantIndex++)
    {
      var entryChar = entry[count];
      var consonantChar = consonantArray[consonantIndex];
      if (entryChar === consonantChar)
      {
        totalConsonants+= 1;
      }
    }
  }
  return totalConsonants;
};
