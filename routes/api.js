import express from 'express';

const router = express.Router();

import * as todoController from '../app/controllers/todoController.js';

// Create
router.post('/create', todoController.store);
// Read
router.get('/read', todoController.read);
// Update
router.put('/update', todoController.update);
// Delete
router.delete('/delete', todoController.erase);

export default router;
