import { Request, Response, NextFunction } from "express";
import * as listService from './lists.service';

async function getAll(req: Request, res: Response, next: NextFunction) {
    try {
        res.json( await listService.getAll());
    } catch (error) {
        console.log(`Error`, error.message);
        next(error);
    }
}

async function get(req: Request, res: Response, next: NextFunction) {
    try {
        res.json( await listService.get(req.params.id));
    } catch (error) {
        console.log(`Error`, error.message);
        next(error);
    }
}

async function create(req: Request, res: Response, next: NextFunction) {
    try {
        res.json( await listService.create(req.body));
    } catch (error) {
        console.log(`Error`, error.message);
        next(error);
    }
}

async function update(req: Request, res: Response, next: NextFunction) {
    try {
        res.json( await listService.update(req.params.id,req.body));
    } catch (error) {
        console.log(`Error`, error.message);
        next(error);
    }
}

async function remove(req: Request, res: Response, next: NextFunction) {
    try {
        res.json( await listService.remove(req.params.id));
    } catch (error) {
        console.log(`Error`, error.message);
        next(error)
    }
}

export { getAll, get, create, update, remove };