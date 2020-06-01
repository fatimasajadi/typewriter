const sentence = "hello there from lighthouse labs\n";
let sentenceSplit = sentence.split("");

let index = 0;
sentenceSplit.forEach(function(char, index) {
  const delay = index * 100 + 100;

  setTimeout(function() {
    process.stdout.write(char);
    index++;
  }, delay);
});