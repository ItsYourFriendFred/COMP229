"use strict";
/*!
File Name: Server/routes/users.js
Student Name: Fred Wong
Student ID: 301199984
Date: October 3, 2022
Last Updated: October 26

Currently unused section; for later use when roles are implemented
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', function (req, res, next) {
    res.send('respond with a resource - placeholder');
});
exports.default = router;
//# sourceMappingURL=users.js.map