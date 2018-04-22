
import axios from 'axios';
import { getCurrentWeather } from './api';

jest.mock('axios');

test ('get current weather data', () => {
        const resp = { "data": { "temp_c" : "11.0" }};
        axios.get.mockImplementation(() => Promise.resolve(resp));
       
        getCurrentWeather('abc').then((response) => expect(response.temp_c).toEqual('11.0'));
});
