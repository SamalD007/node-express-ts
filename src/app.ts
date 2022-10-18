import express, {Application, Request, Response} from "express"

const app:Application = express()
const port:number =  5000

app.get('/user', (req: Request, res: Response) => {
    let result = {id:1,name:'user1'}
    res.status(200).json(result)
})

app.listen(port, () => {
console.log(`app is listening on port at http://localhost:${port}`)
})