const calendarApi = require('../../src/api/calendarAPI');

describe('Pruebas en el CalendarApi', () => {
  test('Debe de tener la configuracion por defecto', () => {
    expect(calendarApi.default.defaults.baseURL).toBe(process.env.VITE_API_URL);
  });

  test('Debe de tener el x-token en el header de todas las peticiones', async () => {
    const token = 'ABC-123-XYZ';
    localStorage.setItem('token', token);

    const res = await calendarApi.default
      .get('/auth')
      .then((res) => res)
      .catch((res) => res);

    expect(res.config.headers['x-token']).toBe(token);
  });
});
