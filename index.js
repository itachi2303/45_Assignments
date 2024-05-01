"use strict";
// task 30
// • If the username is 'admin', print a special greeting, such as Hello admin,
//  would you like to see a status report?
Object.defineProperty(exports, "__esModule", { value: true });
function carinfo(manufacturer, model, optional) {
    return {
        manufacturer,
        model,
        ...optional
    };
}
let mycar = carinfo("toyota", "corolla", { color: "silver", year: 2022 });
console.log(mycar);
