export const beautify = function(sentence) {
  sentence.indexOf(',') !== -1 ? (sentence = sentence.split(',')[0]) : sentence
  sentence.indexOf('(') !== -1 ? (sentence = sentence.split('(')[0]) : sentence
  return sentence
}
