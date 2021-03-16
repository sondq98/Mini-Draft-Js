//
// -------------------forEach------------------
//
Array.prototype.forEach2 = function (callback) {
    let arrayLength = this.length;

    for (let i = 0; i < arrayLength; i++) {
        callback(this[i], i, this);
    }
};





//
// --------------------Map-----------------
//
Array.prototype.map2 = function (callback) {
    let output = [], arrayLength = this.length;

    for (let i = 0; i < arrayLength; i++) {
        let result = callback(this[i], i, this);
        output.push(result);
    }
    return output;
};





// 
//  ----------------Filter--------------
// 
Array.prototype.filter2 = function (callback) {
    let output = [], arrayLength = this.length;

    for (let i = 0; i < arrayLength; i++) {
        callback(this[i], i, this) && output.push(this[i]);
    }
    return output;
};
// 





// 
// -----------------Some----------------
// 
Array.prototype.some2 = function (callback) {
    let arrayLength = this.length, output = false;

    for (let i = 0; i < arrayLength; i++) {
        if (callback(this[i], i, this)) {
            output = true;
        }
    }
    return output;
};
// Kiểm tra xem trong mảng có phần tử nào thỏe mãn hàm call back không





// 
// --------------------Every------------------
// 
Array.prototype.every2 = function (callback) {
    let arrayLength = this.length, output = true;

    for (let i = 0; i < arrayLength; i++) {
        if (!callback(this[i], i, this)) {
            output = false;
        }
    }
    return output;
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
alert(`Test reduce: ${b}`);






// keyword this & arrow function

const person = {
    first: 'DINH',
    last: 'SON',
    full: () => {
        console.log(this)
        this.first + ' ' + this.last;
    }
}


const bunny = {
    nam: 'Usagi',
    tasks: ['transform', 'eat cake', 'blow kisses'],
    showTasks: function () {
        console.log(this);
        var _this = this;

        this.tasks.forEach(function (task) {
            console.log(this);
            console.log(_this.nam + " wants to " + task);
        });
    }
};













