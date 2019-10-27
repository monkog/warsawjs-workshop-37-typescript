import { IHttp } from "./IHttp";
import { injectable, inject } from "inversify";
import { Types } from "../Types";
import { IEnvironment } from "./IEnvironment";

@injectable()
export class TemperatureSensor
{
    constructor(@inject(Types.IHttp) private _http: IHttp, @inject(Types.IEnvironment) private _env: IEnvironment)
    {
    }

    public GetTemperature(): number
    {
        const temperature = this._http.Get(this._env.ValueOf('URL'));

        return this.CelciusToFahrenheit(temperature);
    }

    public CelciusToFahrenheit(temperature: number): number
    {
        return temperature * 2;
    }
}