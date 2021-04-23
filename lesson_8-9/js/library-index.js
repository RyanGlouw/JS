'use strict';

function getRandomBooks() {
    return [
        {
            id: 1,
            img: 'https://picsum.photos/200/300?random=1'
        },
        {
            id: 55,
            img: 'https://picsum.photos/200/300?random=2'
        },
        {
            id: 9,
            img: 'https://picsum.photos/200/300?random=3'
        },
        {
            id: 27,
            img: 'https://picsum.photos/200/300?random=4'
        },
        {
            id: 5,
            img: 'https://picsum.photos/200/300?random=5'
        },
        {
            id: 20,
            img: 'https://picsum.photos/200/300?random=6'
        },
        {
            id: 37,
            img: 'https://picsum.photos/200/300?random=7'
        },
        {
            id: 31,
            img: 'https://picsum.photos/200/300?random=8'
        },
    ];
}

function addRandomBooks(where, books){
    for (let book of books){
        let bookDiv = document.createElement('div'); // innderHTML всегда будет перезаписывать элементы
        bookDiv.innerHTML = ` 
        <img src="${book.img}">
        <a href="one-book.html?id=${book.id}">Читать</a>
        `;
        where.append(bookDiv);
    }
}
addRandomBooks(document.querySelector(".random"), getRandomBooks());



function getBooksByGenre() {
    return [
        {
            genreName: "Жанр 1",
            books: [
                {
                    id: 8,
                    title: "Lorem ipsum",
                    description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non nulla " +
                        "optio quae quod quos repudiandae rerum, tempore",
                    img: "https://picsum.photos/200/300?random=8"
                },
                {
                    id: 10,
                    title: "Aliquam consequatur",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam consequatur " +
                        "ea fugit inventore laudantium natus",
                    img: "https://picsum.photos/200/300?random=5"
                },
                {
                    id: 34,
                    title: "Laudantium",
                    description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non " +
                        "nulla optio quae quod quos repudiandae rerum, tempore, voluptate. laudantium natus, necessitatibus " +
                        "non nulla optio quae quod quos repudiandae rerum, tempore, voluptate.",
                    img: "https://picsum.photos/200/300?random=2"
                }
            ]
        },
        {
            genreName: "Жанр 2",
            books: [
                {
                    id: 4,
                    title: "Necessitatibus",
                    description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non" +
                        " nulla optio quae quod quos repudiandae rerum, tempore",
                    img: "https://picsum.photos/200/300?random=9"
                },
                {
                    id: 13,
                    title: "Nulla optio quae quod",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam consequatur ea " +
                        "fugit inventore laudantium natus",
                    img: "https://picsum.photos/200/300?random=10"
                },
                {
                    id: 59,
                    title: "Non nulla",
                    description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non " +
                        "nulla optio quae quod quos repudiandae rerum, tempore, voluptate. laudantium natus," +
                        " necessitatibus non nulla optio quae quod quos repudiandae rerum, tempore, voluptate.",
                    img: "https://picsum.photos/200/300?random=11"
                }
            ]
        }
    ]
}


// <!--<div>
// <img src="https://picsum.photos/200/300?random=1">
// <a href="#">Читать</a>
// </div>-->
// </section>
// <!--<section class="flex-row wrap">
// <h2 class="text-shadow-blue text-center section-title">Книги из жанра 1</h2>
// <div class="col-4 col-xs-12 col-sm-6 flex-row">
// <article class="book">
//     <span>Lorem ipsum.</span>
//     <div><img src="img/eebd2dc209f1ea85902e74c0eeaa3444.jpg" alt="альтернативный текст"></div>
//     <p>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam consequatur ea fugit
//         inventore
//         laudantium natus, necessitatibus non nulla optio quae quod quos repudiandae rerum, tempore,
//         voluptate.
//         Ipsam, perferendis!
//     </p>
//     <<a href="#">Читать</a>
// </article>
// </div>
// </section>-->

function addByGenre(where, byGenre) {
    for (let genre of byGenre){
        let section = document.createElement("section");
        section.classList.add("flex-row", "wrap");

        let title = document.createElement("h2");
        title.classList.add("text-shadow-blue", "text-center", "section-title")
        title.innerText = `Книги из Жанра ${genre.genreName}`

        section.append(title)

        for (let book of genre.books){
            let cardDiv = document.createElement("div");
            cardDiv.classList.add("col-4", "col-xs-12", "col-sm-6", "flex-row");

            let article = document.createElement("article");
            article.classList.add("book")
            
            let span = document.createElement("span");
            span.innerHTML = `${book.title}`;
            
            let div = document.createElement("div");
            div.classList.add("div")

            let img = document.createElement("img");
            img.setAttribute("src", book.img);
            div.append(img)

            let description = document.createElement("p");
            description.innerHTML = `${book.description}`;

            article.append(span, div, description)
            cardDiv.append(article)
            section.append(cardDiv)
        }
        where.append(section)
    }
}

addByGenre(document.querySelector("main"),getBooksByGenre());