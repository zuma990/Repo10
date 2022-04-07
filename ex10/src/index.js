function myFunction() {

    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            artist: "Eminem",
            title: "mockingbird",
            release_year: 2009,
            formats: {
                1: "ED",
                2: "8T",
                3: "LP"
            }


        }
    }
    return myMusic;
}
myFunction(0)[2];
console.log(myFunction(0)[2]);
module.exports = myFunction;;