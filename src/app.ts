import dotenv from 'dotenv';
import express, { Application } from 'express';
import apiRoutes from './routes/api.routes';

dotenv.config();

export class App {
    private app: Application;

    constructor() {
        this.app = express();
        this.middleware();
        this.routes();
    }

    private middleware(): void {
        this.app.use(express.json());
    }

    private routes(): void {
        this.app.use('/', apiRoutes);
    }

    public listen(port: number): void {
        this.app.listen(port, () => {
            console.log(`Server runnings on http://locahost:${port}`);
        })
    }

}

export default App;