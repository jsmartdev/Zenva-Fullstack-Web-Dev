/* eslint-disable */

let scores = [10, 20, 10];

/* let i = 0;
while(i < scores.length) {
    scores[i]++;
    i++;
}

console.log(scores); */

console.log(scores);

for(i = 0; i < scores.length; i++) {
    scores[i] ++;
}

console.log(scores);

scores.forEach(function(entry, index){
    scores[index]++;
});

console.log(scores);

let catalog = [
    {
        title: "Javscript for Beginners",
        author: "Zenva",
        copies: 1
    },
    {
        title: "HTML for Beginners",
        author: "Zenva",
        copies: 1
    },
    {
        title: "CSS for Beginners",
        author: "XYZ",
        copies: 1
    }];

    catalog.forEach(function(entry) {
        console.log(entry);
        if(entry.author == "Zenva") {
            entry.copies++;
        }
    });

    console.log(catalog);

