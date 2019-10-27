import 'reflect-metadata';
import { injectable } from 'inversify';
import { IEnvironment } from './IEnvironment';

@injectable()
export class Environment implements IEnvironment
{
    public Exists(key: string): boolean
    {
        return (process.env[key] !== undefined);
    }

    public IsSet(key: string): boolean
    {
        if (!this.Exists(key))
        {
            return false;
        }

        if (process.env[key] !== '')
        {
            return true;
        }

        return false;
    }

    public ValueOf(key: string): string
    {
        if (!this.Exists(key))
        {
            throw new Error('Environment variable "' + key + '" not exists');
        }

        return this.ValueOrDefault(process.env[key], '');
    }

    public ValueOrDefault(key: string | undefined, defaultValue: string): string
    {
        if(key == null)
        {
            return '';
        }

        try
        {
            return this.ValueOf(key);
        }
        catch (ex)
        {
            return defaultValue;
        }
    }
}
