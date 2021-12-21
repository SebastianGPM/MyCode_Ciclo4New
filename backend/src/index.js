import { server } from "./server";
import './database'

/* puerto del servidor */
server.start({port: 3100}, ({port}) => {
    console.log('srver on port: ', port);
})