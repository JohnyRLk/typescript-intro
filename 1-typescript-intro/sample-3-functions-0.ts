var paragraph =
  "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
const searchTerm = "dog";

var parts = [
  paragraph.slice(4, -2),
  paragraph.charAt(1),
  paragraph[1],
  paragraph.substr(1, 2),
  paragraph.split(","),
  paragraph.split(",").length,
  paragraph.indexOf(searchTerm),
];

console.log(parts);
console.log(
  `The word "${searchTerm}" ${
    paragraph.includes(searchTerm) ? "is" : "is not"
  } in the paragraph`
);
