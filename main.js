//Final JavaScript

    var quotes = [
    {
        quote: "“Be yourself; everyone else is already taken.”",
        author: "-- Oscar Wilde"
    },
    {
        quote: "“Anyone who has never made a mistake has never tried anything new.”",
        author: "-- Albert Einstein"
    },
    {
        quote: "“A First Sign of the Beginning of Understanding is the Wish to Die.”",
        author: "-- Franz Kafka"
    },
    {
        quote: "“Nothing in this world is harder than speaking the truth, nothing easier than flattery.”",
        author: "-- Fyodor Dostoevsky"
    },
    {
        quote: "“A room without books is like a body without a soul.”",
        author: "-- Marcus Tullius Cicero"
    },
    {
        quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        author: "-- Bernard M. Baruch"
    },
    {
        quote: "“Be the change that you wish to see in the world.”",
        author: "-- Mahatma Gandhi"
    },
    {
        quote: "“Do not walk in front of me… I may not follow Do not walk behind me… I may not lead Walk beside me… just be my friend”",
        author: "-- Albert Camus"
    },
    {
        quote: "“Without music, life would be a mistake.”",
        author: "-- Friedrich Nietzsche"
    }
];
var previousIndex=1;
function newQuote(){
var arrayIndex
do{


 arrayIndex = Math.floor(Math.random() * quotes.length);}
 while (arrayIndex === previousIndex );
 
 previousIndex = arrayIndex 
 
    document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;
    document.getElementById("author").innerHTML = quotes[arrayIndex].author;

}

