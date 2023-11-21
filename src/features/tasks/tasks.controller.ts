import { Request, Response, NextFunction } from "express";
import * as tasksService from './tasks.service';

async function getAllTasks(req: Request, res: Response, next: NextFunction) {
    try {
        return res.json(await tasksService.getAll());
    } catch (error) {
        console.log('Error', error.message);
        next(error);
    }
}

async function getTask(req: Request, res: Response, next: NextFunction){
    try {
        return res.json(await tasksService.get(req.params.id));
    } catch (error) {
        console.log('Error', error.message);
        next(error); 
    }
}

async function createTask(req: Request, res: Response, next: NextFunction) {
    try {
        return res.json(await tasksService.create(req.body));
    } catch (error) {
        console.log('Error', error.message);
        next(error);
    }
}

async function updateTask(req: Request, res: Response, next: NextFunction) {
    try {
        return res.json(await tasksService.update(req.params.id, req.body));
    } catch (error) {
        console.log('Error', error.message);
        next(error);
    }
}

async function deleteTask(req: Request, res: Response, next: NextFunction){
    try {
        return res.json(await tasksService.remove(req.params.id)); 
    } catch (error) {
        console.log('Error', error.message);
        next(error);
    }
}

export { getAllTasks, getTask, createTask, updateTask, deleteTask};