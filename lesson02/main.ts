// tuple
let myTuple: [string, number, boolean];
myTuple = ['chinhpd5', 20, true];

let myRGB: [number,number, number] = [0,0,255];
myRGB = [1,100,255];

// enum
enum Status {
  SUCCESS = 'success',
  WARNING = 'warn',
  ERROR = 'error'
}

let myStatus: Status = Status.WARNING

console.log(myStatus);
