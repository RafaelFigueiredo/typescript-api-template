import {Request, Response} from 'express'


class APIController{
    async call(req: Request, res: Response) {
        res.json({
            timestamp: Date.now()
        })
    }
}


export default APIController