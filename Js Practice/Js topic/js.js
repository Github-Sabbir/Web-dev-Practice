const A = [50, 107, 'jack', 83, 'killer', 'son', true];

const Strin = A.filter(i => typeof i === 'string');
console.log("Just Strin in a new array:", Strin);

const numb = A.filter(item => typeof item === 'number').sort((a, b) => a - b);
console.log("Create a new array from the numb and sort them into rows:", numb);

const revStrin = Strin.reverse();
console.log("Reverse the string array:", revStrin);

const Combine = numb.concat(Strin);
console.log("Concatenate arrays of both numb and Strin:", Combine);

Combine.splice(5, 3);
console.log("Deconsted 3 items from the 6th item from the combined array:", Combine);

const less_Than_100 = A.filter(item => typeof item === 'number' && item < 100);
console.log("Fewer than 100 elements from A are shown:", less_Than_100);

const Modified_Strin = Strin.map(item => item.slice(0, -1) + 'str');
console.log("Remove the last character from the string array and add the word 'str' before each of them:", Modified_Strin);