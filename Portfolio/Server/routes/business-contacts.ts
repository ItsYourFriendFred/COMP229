import express from 'express';
const router = express.Router();

import { AuthGuard } from '../Util';

import { DisplayBusinessContacts } from '../Controllers/business-contacts'

router.get('/business-contacts', AuthGuard, DisplayBusinessContacts);

export default router;