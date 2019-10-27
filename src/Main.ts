import { injectable, inject } from 'inversify';
import { ILogger } from './Loggers/ILogger';
import { Types } from './Types';
import { TemperatureSensor } from './TemperatureSensor/TemperatureSensor';

@injectable()
export class Main
{
    constructor(@inject(Types.ILogger)private _logger: ILogger, private _temperatureSensor: TemperatureSensor)
    { }

    public async Start(): Promise<void>
    {
        this._logger.Log('Sensor temperature ' + this._temperatureSensor.GetTemperature());
    }
}
