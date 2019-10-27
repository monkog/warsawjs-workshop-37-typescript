import { IHttp } from "./IHttp";
import { injectable, inject } from "inversify";
import { Types } from "../Types";

@injectable()
export class TemperatureSensor
{
    constructor(@inject(Types.IHttp) private _http: IHttp)
    {
    }

    public GetTemperature(): number
    {
        const temperature = this._http.Get('192.168.1.1:1000');

        return this.CelciusToFahrenheit(temperature);
    }

    public CelciusToFahrenheit(temperature: number): number
    {
        return temperature * 2;
    }
}