"use strict";
/*!
File Name: Server/routes/auth.js
Student Name: Fred Wong
Student ID: 301199984
Date: October 25, 2022
Last Updated: October 26

Routes handling requests related to authentication
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const auth_1 = require("../Controllers/auth");
router.post('/login', auth_1.ProcessLoginPage);
router.post('/register', auth_1.ProcessRegisterPage);
router.get('/logout', auth_1.ProcessLogoutPage);
exports.default = router;
//# sourceMappingURL=auth.js.map