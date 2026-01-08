"use strict";
// tuple
let myTuple = [1, 'chinhpd5', true];
let myRGB = [0, 0, 255];
let myRGB1 = [1, 1, 100];
// enum
var Status;
(function (Status) {
    Status["SUCCESS"] = "success";
    Status["WARNING"] = "warn";
    Status["ERROR"] = "error";
})(Status || (Status = {}));
let myStatus = Status.WARNING;
console.log(myStatus);
