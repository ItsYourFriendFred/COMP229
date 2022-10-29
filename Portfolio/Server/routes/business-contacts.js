"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const Util_1 = require("../Util");
const business_contacts_1 = require("../Controllers/business-contacts");
router.get('/business-contacts', Util_1.AuthGuard, business_contacts_1.DisplayBusinessContacts);
exports.default = router;
//# sourceMappingURL=business-contacts.js.map