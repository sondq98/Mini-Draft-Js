//
// -------------------forEach------------------
//
Array.prototype.forEach2 = function (callback) {
    for (let index in this) {
        if (this.hasOwnProperty(index)) {
            callback(this[index], index, this);
        }
    }
};





//
// --------------------Map-----------------
//
Array.prototype.map2 = function (callback) {
    let output = [];

    for (let index in this) {
        if (this.hasOwnProperty(index)) {
            output.push(callback(this[index], index, this));
        }
    }
    return output;
};





// 
//  ----------------Filter--------------
// 
Array.prototype.filter2 = function (callback) {
    let output = [];

    for (let index in this) {
        if (this.hasOwnProperty(index)) {
            callback(this[index], index, this) && output.push(this[index]);
        }
    }
    return output;
};






// 
// -----------------Some----------------
// 
Array.prototype.some2 = function (callback) {
    for (let index in this) {
        if (callback(this[index], index, this)) {
            return true;
        }
    }
    return false;
};
// Kiểm tra xem trong mảng có phần tử nào thỏe mãn hàm call back không





// 
// --------------------Every------------------
// 
// Array.prototype.every2 = function (callback) {
//     let arrayLength = this.length, output = true;

//     for (let i = 0; i < arrayLength; i++) {
//         if (!callback(this[i], i, this)) {
//             output = false;
//         }
//     }
//     return output;
// };
Array.prototype.every2 = function (callback) {
    for (let index in this) {
        if (this.hasOwnProperty(index)) {
            if (!callback(this[index], index, this)) {
                return false;
            }
        }
    }
    return true;
};
// Kiểm tra mọi phần tử của mảng có thỏa mãn hàm callback không?




//
// --------------------Reduce---------------
Array.prototype.reduce2 = function (callback, initValue) {
    let arrayLength = this.length, accumulator;

    if (arguments.length < 2) {
        initValue = 0;
    }

    accumulator = initValue;
    for (let i = 0; i < arrayLength; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
};



let a = [1, 2, 3, 4]
b = a.reduce2((total, number) => total + number);
console.log(b);















