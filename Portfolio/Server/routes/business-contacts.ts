import express from 'express';
const router = express.Router();

import { DisplayBusinessContacts } from '../Controllers/business-contacts'

router.get('/business-contacts', DisplayBusinessContacts);

export default router;