import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
    //res.render('page/page')
    res.send('home no controller')
}
export const dogs = (req: Request, res: Response) => {
    //res.render('page/page')
}
export const cats = (req: Request, res: Response) => {
    //res.render('page/page')
}
export const fishes = (req: Request, res: Response) => {
    //res.render('page/page')
}