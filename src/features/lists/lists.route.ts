import express from 'express';

import * as listController from './lists.controller';

const router = express.Router();
router.get('/', listController.getAll);
router.get('/:id', listController.get);
router.post('/', listController.create);
router.put('/:id', listController.update);
router.delete('/:id', listController.remove);

export default router;