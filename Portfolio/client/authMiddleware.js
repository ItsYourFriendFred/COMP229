"use strict";
exports.__esModule = true;
var jwt = require("jsonwebtoken");
var App_Secret = 'Secret';
var Username = 'Fred63';
var Password = 'Kirby';
var mappings = {
    get: ['/api/orders', '/orders'],
    post: ['/api/book-list', '/book-list', 'api/categories', '/categories']
};
function RequiresAuth(method, url) {
    return (mappings[method.toLowerCase()] || [])
        .find(function (p) { return url.startsWith(p); }) !== undefined;
}
// json-server does not behave well with ES modules export syntax hence module.exports
module.exports = function (req, res, next) {
    if (req.url.endsWith('/login') && req.method == 'POST') {
        if (req.body && req.body.name == Username && req.body.password == Password) {
            var token = jwt.sign({ date: Username, expiresIn: '1h' }, App_Secret);
            res.json({ success: true, token: token });
        }
        else {
            res.json({ success: false, message: 'Error: Authentication Failed' });
        }
        res.end();
        return;
    }
    else if (RequiresAuth(req.method, req.url)) {
        var token = req.headers['authorization'] || "";
        if (token.startsWith('Bearer<')) {
            token = token.substring(7, token, length - 1);
            try {
                jwt.verify(token, App_Secret);
                next();
                return;
            }
            catch (error) {
            }
        }
        res.statusCode = 401;
        res.end();
        return;
    }
    next();
};
