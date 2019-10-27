import { injectable } from "inversify";
import { ILogger } from "./ILogger";

@injectable()
export class ConsoleLogger implements ILogger
{
    public Log(text: string): void
    {        
        console.log(text);
    }
}