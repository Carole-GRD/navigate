// --------------------------------------------------
// Modify the script.js, do not create any new nodes!
// --------------------------------------------------

// Select the last child of the <ol> tag and put it at the beginning of the list

let ol = document.querySelector('ol');

let olFirstChild = ol.children[0];
let olLastChild = ol.children[ol.children.length - 1];

ol.insertBefore(ol.children[ol.children.length - 1], ol.children[0]);

// --------------------------------------------------

// Move the <h2> of the third section in the second one and vice-versa

let secondSection = document.querySelector('section:nth-of-type(2)');
let h2SecondSection = document.querySelector('section:nth-of-type(2) h2');
let pSecondSection = document.querySelector('section:nth-of-type(2) p');
// console.log(secondSection);
// console.log(h2SecondSection);
// console.log(pSecondSection);

let thirdSection = document.querySelector('section:nth-of-type(3) div');
let h2ThirdSection = document.querySelector('section:nth-of-type(3) div h2');
let pThirdSection = document.querySelector('section:nth-of-type(3) div p');
// console.log(thirdSection);
// console.log(h2ThirdSection);
// console.log(pThirdSection);


secondSection.appendChild(h2ThirdSection);
thirdSection.appendChild(h2SecondSection);

// console.log(secondSection);
// console.log(thirdSection);
let newH2SecondSection = document.querySelector('section:nth-of-type(2) h2');
let newH2ThirdSection = document.querySelector('section:nth-of-type(3) h2');
// console.log(newH2SecondSection);
// console.log(newH2ThirdSection);

secondSection.insertBefore(newH2SecondSection, pSecondSection);
thirdSection.insertBefore(newH2ThirdSection, pThirdSection);

// --------------------------------------------------

// Delete the last section from the DOM, we don't need it anyways

let lastSection = document.querySelector('section:last-of-type');
// console.log(lastSection);
lastSection.remove();