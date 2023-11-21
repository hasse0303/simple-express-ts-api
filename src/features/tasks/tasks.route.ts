import express from 'express';
import * as tasksController from './tasks.controller';

const router = express.Router();

router.get('/', tasksController.getAllTasks);
router.get('/:id', tasksController.getTask);
router.post('/', tasksController.createTask);
router.put('/:id', tasksController.updateTask);
router.delete('/:id', tasksController.deleteTask);

export default router;