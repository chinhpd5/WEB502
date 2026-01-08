"use strict";
// tuple
let myTuple;
myTuple = ['chinhpd5', 20, true];
let myRGB = [0, 0, 255];
myRGB = [1, 100, 255];
// enum
var Status;
(function (Status) {
    Status["SUCCESS"] = "success";
    Status["WARNING"] = "warn";
    Status["ERROR"] = "error";
})(Status || (Status = {}));
let myStatus = Status.WARNING;
console.log(myStatus);
