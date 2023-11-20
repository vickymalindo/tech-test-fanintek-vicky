const sentenceA = 'Saat meng*ecat tembok, Agung dib_antu oleh Raihan.';
const sentenceB = 'Berapa u(mur minimal[ untuk !mengurus ktp?';
const sentenceC = 'Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda.';
const realWords = (sentence) => {
  const arrOfSentence = sentence.split(' ');
  const specialChar = /[ `!@#$%^&*()_+\=\[\]{};':"\\|<>\/~]/;

  let countWords = 0;
  for (let i = 0; i < arrOfSentence.length; i++) {
    if (!specialChar.test(arrOfSentence[i])) {
      countWords += 1;
    }
  }
  return countWords;
};
console.log(realWords(sentenceA));
console.log(realWords(sentenceB));
console.log(realWords(sentenceC));
