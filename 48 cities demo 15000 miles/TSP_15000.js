// input m array is stored in array "bounties"
// storage integers of last iteration are stored in array "storages"
var path = "Path: ";
var i;
for (i = 1; i < 49; i++) {
    path += storages[0]["storage"][i] + "\t";
}
//path = path + storages[1];
console.log("World record is 10,618 miles . A Network has found a PATH less than 15,000 miles: cost = " + storages[0]["storage"][0]);
console.log(path);
