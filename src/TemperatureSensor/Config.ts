import { config } from 'dotenv';

export class Config
{
    public _url: string;

    constructor()
    {
        const cfg = config().parsed;
        let parsed = JSON.parse(cfg);
    }
}