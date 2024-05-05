import { app } from './app';
import * as http from 'http';

const httpServer = http.createServer(app);
const port = process.env.PORT;

httpServer.listen(port, () => {
    console.log(`Server running on port ${port}`);
})