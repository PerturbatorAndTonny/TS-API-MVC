import express, { type Application, type Request, type Response, type NextFunction } from "express"
import routerUsers from "./routes/userRoutes.ts";
import morgan from "morgan";

const app: Application = express();
// const port = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('dev'));

app.use("/api", routerUsers);

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({
        message: "Servidor en etapa de desarrollo, ruta no encontrada"
    })
})

export default app;

