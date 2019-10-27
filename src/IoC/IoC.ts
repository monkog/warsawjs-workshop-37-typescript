import 'reflect-metadata'
import { Container } from 'inversify';
import { Main } from '../Main';
import { ConsoleLogger } from '../Loggers/ConsoleLogger';
import { Types } from '../Types';
import { ILogger } from '../Loggers/ILogger';
import { TemperatureSensor } from '../TemperatureSensor/TemperatureSensor';
import { Http } from '../TemperatureSensor/Http';
import { IHttp } from '../TemperatureSensor/IHttp';

export const IoC = new Container;

IoC.bind(Main).toSelf().inSingletonScope();
IoC.bind<ILogger>(Types.ILogger).to(ConsoleLogger);
IoC.bind(TemperatureSensor).toSelf().inSingletonScope();
IoC.bind<IHttp>(Types.IHttp).to(Http).inTransientScope();