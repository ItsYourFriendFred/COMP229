/*! 
File Name: Client/Scripts/app.js
Student Name: Fred Wong
Student ID: 301199984 
Date: October 3, 2022
Last Updated: October 26

Miscellaneous JS client-side functions go here
*/

// IIFE -- Immediately Invoked Function Expression
(function(){

    function Start()
    {
        console.log("App Started...");

        // Function to confirm deletion of business contact upon clicking Delete button
        $("a.delete").on("click", function(event){
            if(!confirm("Are you sure?"))
            {
                event.preventDefault();
                location.href = "/business-contacts"
            }
        });
    }

    window.addEventListener("load", Start);

})();