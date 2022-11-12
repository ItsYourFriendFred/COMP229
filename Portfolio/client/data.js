// json-server does not behave well with ES modules export syntax hence module.exports
module.exports = function () {
    return {
        books: [
            // _id was changed to id for demonstration
            { "id": 1, "Title": "Seismic Attributes and You", "Description": "lacus at velit vivamus vel nulla eget eros", "Price": { "$numberDouble": "95.71" }, "Author": "Jessalin Skarin", "Genre": "Drama" },
            { "id": 2, "Title": "MPIO and You", "Description": "eu interdum eu tincidunt in leo maecenas pulvinar lobortis est", "Price": { "$numberDouble": "7.82" }, "Author": "Jaynell Hartley", "Genre": "Documentary" },
            { "id": 3, "Title": "eZ Publish and You", "Description": "nulla tellus in sagittis dui vel nisl duis ac", "Price": { "$numberDouble": "39.03" }, "Author": "Ysabel Wickes", "Genre": "Horror" },
            { "id": 4, "Title": "Major Gift Development and You", "Description": "rutrum neque aenean auctor gravida", "Price": { "$numberDouble": "88.78" }, "Author": "Thorpe Moreno", "Genre": "Action|Comedy|Crime" },
            { "id": 5, "Title": "XML Schema and You", "Description": "ligula suspendisse ornare consequat lectus", "Price": { "$numberDouble": "69.08" }, "Author": "Alejoa Rickarsey", "Genre": "Comedy" }
        ],
        orders: [

        ]
    }
}