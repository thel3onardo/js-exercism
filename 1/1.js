//
// This is only a SKELETON file for the 'Scrabble Score' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const score = (word) => {
    let points = 0;
    const letter_group = [
      {letters: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'], value: 1},
      {letters: [ 'D', 'G'], value: 2},
      {letters: ['B', 'C', 'M', 'P'], value: 3},
      {letters: ['F', 'H', 'V', 'W', 'Y'], value: 4},
      {letters: ['K'], value: 5},
      {letters: ['J', 'X'], value: 8},
      {letters:['Q', 'Z'], value: 10}
    ];
    const wordDestructured = word.split(' ').flat().map((el) => el.split('').map((letter) => letter)).flat();
    console.log(wordDestructured);
  
    wordDestructured.forEach((letter) => {
      letter_group.forEach((object) => {
        object.letters.forEach((letter_in_object) => {
          if (letter_in_object.toLowerCase() == letter.toLowerCase()) {
            return points = points + object.value;
          }
        })
      })
    });

    return points;
  };