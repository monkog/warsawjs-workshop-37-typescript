import { injectable, inject } from 'inversify';
import { ILogger } from './Loggers/ILogger';
import { Types } from './Types';

@injectable()
export class Main
{
    constructor(@inject(Types.ILogger)private _logger: ILogger)
    { }

    public async Start(): Promise<void>
    {
        this._logger.Log('start');
    }
}
