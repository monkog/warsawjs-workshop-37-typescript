import 'reflect-metadata'
import { TemperatureSensor } from '../TemperatureSensor/TemperatureSensor'
import { IHttp } from '../TemperatureSensor/IHttp';
import { Mock, It } from 'moq.ts'
import { IEnvironment } from '../TemperatureSensor/IEnvironment';

describe('TemperatureSensor tests', () => {
    it('should convert Celcius to Fahrenheit', () => {
        const httpMock = new Mock<IHttp>();
        httpMock.setup(m => m.Get(It.IsAny<string>())).returns(5);
        const envMock = new Mock<IEnvironment>();
        envMock.setup(m => m.ValueOf(It.IsAny<string>())).returns('');

        const unitUnderTest: TemperatureSensor = new TemperatureSensor(httpMock.object(), envMock.object());

        let result: number = unitUnderTest.GetTemperature();

        expect(result).toBe(10);
    })
})