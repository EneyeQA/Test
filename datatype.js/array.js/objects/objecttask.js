// TASK 1

const books = {title: "Object methods", 
        description:"Method as a function of key-value pair", 
        numberOfPages: 79, 
        authour: "Suleiman"
}

console.log(books.description)  






// TASK 2
const books = {title: "Object methods", 
        description:"Method as a function of key-value pair", 
        numberOfPages: 200, 
        authour: "Suleiman", 
        readingStatus: false,
        toggleReadingStatus: function(){
            if(books.readingStatus === true){
                books.readingStatus = false
            } else {
                books.readingStatus = true
            }
        }
}

books.toggleReadingStatus()
console.log(books.description)





// TASK 3
let books = [
            {   title: "Object methods", 
                description:"Method as a function of key-value pair", 
                numberOfPages: 600, 
                authour: "Suleiman",
                readingStatus: true 
            },
            {
                title: "The power of Now", 
                description:"The power of Now Is a spiritual self-help book that explores the concept of minfulness and living in the present moment", 
                numberOfPages: 224, 
                authour: "Eckhart Tolle", 
                readingStatus: false
            },
            {
                title: "The Alchemist", 
                description:"A fable about a young shepherd named Santiago, who embarks on a journey to fulfill his personal legend and find his treasure,", 
                numberOfPages: 208, 
                authour: "Pualo Coelho", 
                readingStatus: false,
                addDescription: "Along the wayhe learns valuable life lessons and discovers the importance of listening to his heart."
            },
            {
                title: "1984", 
                description:"A dystopian novel that depicts a totalitarian future society where independent thought is discouraged and citizens are constatnly surveilled.", 
                numberOfPages: 328, 
                authour: "George Orwell", 
                readingStatus: true,
                addDescription: "The story follows Winston Smith, a low-ranking member of the ruling Party, who begins to quenstion the official ideology and eventually rebels againse the system."
            },    
            {
                title: "To Kill a Mochingbird", 
                description:"A classic novel set in the Deep South during the 1930s, exploringissues of racial injustice, tolerance, and the loss of innocence.", 
                numberOfPages: 281, 
                authour: "Harper Lee", 
                readingStatus: false

            },
            {
                title: "The Diary of a Young Girl", 
                description:"A personal and emotional account of a young girl's experience during World War II..", 
                numberOfPages: 320, 
                authour: "Anne Frank",
                readingStatus: true
            }
       
        
];

console.log(books)
console.log(books[1], books[3])

for (let star = 0; star <= books.length; star++) {
    if (books[star].readingStatus) {
        console.log(books[star]);
    }
}