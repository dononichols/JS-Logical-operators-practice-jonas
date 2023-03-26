
const hasDriversLicense = true; // A
const hasGoodVision = false; // B


console.log(hasDriversLicense && hasGoodVision); // true
console.log(hasDriversLicense || hasGoodVision); // true
console.log(!hasDriversLicense); // ! converts true to false
//----
const shouldDrive = hasDriversLicense && hasGoodVision; //this is an: OR-true and false, which equals to a false. so the else statement will display.

if (hasDriversLicense && hasGoodVision) {
    console.log(' Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}

//---
