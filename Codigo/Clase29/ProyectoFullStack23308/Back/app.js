import express from "express"
import db from "./database/db.js"
import cors from "cors"
import PostRouter from "./routes/PostRouter.js"

const app = express()

const port = 8000

app.use (cors())
app.use(express.json())

app.use("/posts",PostRouter)

// conexion a la base de datos
// realizar la funcion correctamente 
const conexionDb = async()=>{
    try {
        await db.authenticate()
        console.log("conectado ok a la DB");
           console.log(`ok el servidor en el puerto ${port}`)
    } catch (error) {
        console.log(`error de conexion ${error}`);  
    }
}



app.listen(port,()=>{
    conexionDb()
    console.log(`ok el servidor en el puerto ${port}`);
})