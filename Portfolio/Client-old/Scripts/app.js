"use strict";
/*!
File Name: Client/Scripts/app.js
Student Name: Fred Wong
Student ID: 301199984
Date: October 3, 2022
Last Updated: October 26

Miscellaneous JS client-side functions go here
*/
(function () {
    function Start() {
        console.log("App Started...");
        $("a.delete").on("click", function (event) {
            if (!confirm("Are you sure?")) {
                event.preventDefault();
                if (!(window.location.href.indexOf('edit') > -1)) {
                    location.href = "/business-contacts";
                }
            }
        });
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map