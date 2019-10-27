import { injectable } from "inversify";
import { IHttp } from "./IHttp";

@injectable()
export class Http implements IHttp
{
    public Get(url: string): number 
    {
        return 14;
    }
}