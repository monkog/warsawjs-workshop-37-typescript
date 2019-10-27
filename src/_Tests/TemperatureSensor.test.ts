import 'reflect-metadata'
import { TemperatureSensor } from '../TemperatureSensor/TemperatureSensor'
import { IHttp } from '../TemperatureSensor/IHttp';
import { Mock, It } from 'moq.ts'

describe('TemperatureSensor tests', () => {
    it('should convert Celcius to Fahrenheit', () => {
        const httpMock = new Mock<IHttp>();
        httpMock.setup(m => m.Get(It.IsAny<string>())).returns(5);
        const unitUnderTest: TemperatureSensor = new TemperatureSensor(httpMock.object());

        let result: number = unitUnderTest.GetTemperature();

        expect(result).toBe(10);
    })
})