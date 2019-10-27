import 'reflect-metadata'
import { Container } from 'inversify';
import { Main } from '../Main';
import { Logger } from '../Logger';

export const IoC = new Container;

IoC.bind(Main).toSelf();
IoC.bind(Logger).toSelf();