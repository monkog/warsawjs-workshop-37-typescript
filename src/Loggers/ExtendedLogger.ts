import { ILogger } from "./ILogger";

export class ExtendedLogger implements ILogger
{
    Log(text: string): void
    {
        console.log('Extended', text);
    }
}