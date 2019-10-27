import { injectable, inject } from 'inversify';
import { Logger } from './Logger';

@injectable()
export class Main
{
    constructor(private _logger: Logger)
    { }

    public async Start(): Promise<void>
    {
        this._logger.Log('start');
    }
}
