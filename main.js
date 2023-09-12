
function runLengthEncoding(sequence) {
  let encodedSequence = "";
  let count = 1;
  for (let i = 0; i < sequence.length - 1; i++) {
    if (sequence[i] === sequence[i + 1]) {
      count++;
    } else {
      encodedSequence += count + sequence[i];
      count = 1;
    }
  }
  encodedSequence += count + sequence[sequence.length - 1];
  return encodedSequence;
}

function runLengthDecoding(encodedSequence) {
  let decodedSequence = "";
  let i = 0;
  while (i < encodedSequence.length) {
    let count = parseInt(encodedSequence[i]);
    decodedSequence += encodedSequence[i + 1].repeat(count);
    i += 2;
  }
  return decodedSequence;
}


let originalSequence = "112233";
let encodedSequence = runLengthEncoding(originalSequence);
let compressionRatio = encodedSequence.length / originalSequence.length;

console.log("Original Sequence:", originalSequence);
console.log("Encoded Sequence:", encodedSequence);
console.log("Compression Ratio:", compressionRatio);

let decodedSequence = runLengthDecoding(encodedSequence);
console.log("Decoded Sequence:", decodedSequence);


// function compress(nums) {
//   // Convert the list of integers to a string of characters.
//   let chars = nums.map(num => String.fromCharCode(num + 96)).join('');

//   // Compress the string of characters using run-length encoding.
//   let compressedChars = [];
//   let currentChar = chars[0];
//   let currentCount = 1;
//   for (let i = 1; i < chars.length; i++) {
//     if (chars[i] === currentChar) {
//       currentCount++;
//     } else {
//       compressedChars.push(currentChar);
//       compressedChars.push(currentCount);
//       currentChar = chars[i];
//       currentCount = 1;
//     }
//   }
//   compressedChars.push(currentChar);
//   compressedChars.push(currentCount);

//   // Return the compressed string of characters.
//   return compressedChars.join('');
// }

// function decompress(compressedString) {
//   // Convert the string of characters to a list of integers.
//   let chars = compressedString.split('');
//   let nums = chars.map(char => char.charCodeAt(0) - 96);

//   // Decompress the list of integers using run-length decoding.
//   let decompressedNums = [];
//   let currentNum = nums[0];
//   let currentCount = parseInt(nums[1]);
//   for (let i = 2; i < nums.length; i += 2) {
//     let num = nums[i];
//     let count = parseInt(nums[i + 1]);
//     for (let j = 0; j < count; j++) {
//       decompressedNums.push(currentNum);
//     }
//     currentNum = num;
//     currentCount = count;
//   }

//   // Return the decompressed list of integers.
//   return decompressedNums;
// }