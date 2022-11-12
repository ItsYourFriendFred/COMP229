// json-server does not behave well with ES modules export syntax hence module.exports
module.exports = function () {
    return {
        "book-list": [
            // _id was changed to id for demonstration
            { "_id": 1, "title": "Seismic Attributes and You", "description": "lacus at velit vivamus vel nulla eget eros", "price": "95.71", "author": "Jessalin Skarin", "genre": "Drama" },
            { "_id": 2, "title": "MPIO and You", "description": "eu interdum eu tincidunt in leo maecenas pulvinar lobortis est", "price": "7.82", "author": "Jaynell Hartley", "genre": "Documentary" },
            { "_id": 3, "title": "eZ Publish and You", "description": "nulla tellus in sagittis dui vel nisl duis ac", "price": "39.03", "author": "Ysabel Wickes", "genre": "Horror" },
            { "_id": 4, "title": "Major Gift Development and You", "description": "rutrum neque aenean auctor gravida", "price": "88.78", "author": "Thorpe Moreno", "genre": "Action|Comedy|Crime" },
            { "_id": 5, "title": "XML Schema and You", "description": "ligula suspendisse ornare consequat lectus", "price": "69.08", "author": "Alejoa Rickarsey", "genre": "Comedy" }
        ],
        orders: [

        ]
    }
}