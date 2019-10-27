import 'reflect-metadata'
import { Container } from 'inversify';
import { Main } from '../Main';
import { ConsoleLogger } from '../Loggers/ConsoleLogger';
import { Types } from '../Types';
import { ILogger } from '../Loggers/ILogger';

export const IoC = new Container;

IoC.bind(Main).toSelf();
IoC.bind<ILogger>(Types.ILogger).to(ConsoleLogger);

