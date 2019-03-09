var nameVar = 'Junior';
var nameVar = 'Billy';
console.log('nameVar', nameVar);

let nameLet = "Jen";
// let nameLet = "Julie"; //this will give an error
nameLet = "Julie";
console.log("nameLet", nameLet);

const nameConst = "Frank";
// const nameConst = "Gunther"; //gives an error as well
// nameConst = "Gunther"; //will also give an error
console.log("nameConst", nameConst);

function getPetName(){
  const petName = "Zeus";
  return petName;
}

const petName = getPetName();
console.log(petName);


//BLOCK SCOPING
var fullName = 'Jr Dugue';

if (fullName) {
  const firstName = fullName.split(" ")[0];
  console.log(firstName);
}

console.log(firstName);