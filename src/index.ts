import "reflect-metadata";
import app from "./app";
import { dataSource } from "./database/data-source";


async function main() {
    
    try {
        await dataSource.initialize();
        await app.listen(app.get("port"));
        console.log(`Server is listening on port ${ app.get("port") }`);
    } catch (error : any) {
        console.log(error.message);
        throw new Error(error.message);
    }

}


main();