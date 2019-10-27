import { injectable } from "inversify";

@injectable()
export class Logger
{
    public Log(text: string): void
    {        
        console.log('start');
    }
}