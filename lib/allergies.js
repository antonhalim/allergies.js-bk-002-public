'use strict';
function Allergies(allergenIndex) {
  this.myList = [];
  this.number = allergenIndex;
  var allergy = {1: "eggs" , 2: "peanuts" , 4: "shellfish" , 8: "strawberries" , 16: "tomatoes" , 32: "chocolate" , 64: "pollen" , 128: "cats"},
      keys = Object.keys(allergy).reverse();
  while (this.number > 256){
    this.number -= 256;
  }
  for(var i = 0; i < keys.length ; i++){
    if(this.number - keys[i] >= 0){
      this.number -= keys[i];
      this.myList.push(allergy[filterInt(keys[i])])
    };
  };
}

Allergies.prototype.list = function () {
  return this.myList.reverse()
};

Allergies.prototype.allergicTo = function (string) {
  for(var i = 0; i < this.myList.length; i++){
    if(this.myList[i] === string){return true}

  };
  return false
};

function filterInt(value) {
  if(/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
    return Number(value);
  return NaN;
};

/*
1,2,4,8,16,32,64,128,256

* eggs (1)
* peanuts (2)
* shellfish (4)
* strawberries (8)
* tomatoes (16)
* chocolate (32)
* pollen (64)
* cats (128)



248,255


*/
