// arguments object - no longer bound with arrow functions

const add = function (a, b) {
  // console.log(arguments);
  return a + b;
};
console.log(add(55,1,1001));

// this keyword - no longer bound

// const user = {
//   name: 'Andrew',
//   cities: ["Miami", "Brooklyn", "Atlanta"],
//   printPlacesLived: function () {
//     // console.log(this.name);
//     // console.log(this.cities);
//     const that = this; //using that is a work around since this dot is isn't able to access the forEach function

//     this.cities.forEach(function (city) {
//       // console.log(this.name + ' has lived in ' + city);
//       console.log(that.name + ' has lived in ' + city);
//     });
//   }
// };

//cleaner way with arrow functions
// const user = {
//   name: 'Andrew',
//   cities: ["Miami", "Brooklyn", "Atlanta"],
//   printPlacesLived: function () {
    
//     this.cities.forEach((city) => {
//       console.log(this.name + ' has lived in ' + city);
//     });
//   }
// };

// const user = {
//   name: 'Andrew',
//   cities: ["Miami", "Brooklyn", "Atlanta"],
//   printPlacesLived: function () {
    
//   const cityMessages = this.cities.map((city) => {
//     return city + "!";
//     });
//     return cityMessages;
//   }
// };

const user = {
  name: 'Andrew',
  cities: ["Miami", "Brooklyn", "Atlanta"],
  printPlacesLived () {
  return this.cities.map((city) => this.name + " has lived in " + city);    
  }
};

console.log(user.printPlacesLived());



//challenge area
const multipler = {

};

//numbers - array of numbers
//multiplyBy - single number
//multiply - return a new array where the number have been multiplied 











