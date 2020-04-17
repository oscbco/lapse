var getLapse = require('./lapse').default
var pinnedDate = new Date("1/31/2020 16:59:00").getTime();
describe('lapse', () => {
  it('shows correct date', () => {
    expect(getLapse('en', new Date("1/31/2020 16:58:30").getTime(), pinnedDate)).toBe('Less than a minute ago');
    expect(getLapse('en', new Date("1/31/2020 16:58:00").getTime(), pinnedDate)).toBe('1 minute ago');
    expect(getLapse('en', new Date("1/31/2020 16:48:30").getTime(), pinnedDate)).toBe('10 minutes ago');
    expect(getLapse('en', new Date("1/31/2020 15:48:30").getTime(), pinnedDate)).toBe('1 hour ago');
    expect(getLapse('en', new Date("1/30/2020 15:48:30").getTime(), pinnedDate)).toBe('1 day ago');
    expect(getLapse('en', new Date("1/20/2020 15:48:30").getTime(), pinnedDate)).toBe('1.6 weeks ago');
    expect(getLapse('en', new Date("12/25/2019 15:48:30").getTime(), pinnedDate)).toBe('1.3 months ago');
    expect(getLapse('en', new Date("12/25/2018 15:48:30").getTime(), pinnedDate)).toBe('1.1 years ago');
    expect(getLapse('en', new Date("1/31/2019 16:59:00").getTime(), pinnedDate)).toBe('1 year ago');
    expect(getLapse('en', new Date("1/31/2119 16:59:00").getTime(), pinnedDate)).toBe(false);

    expect(getLapse('es', new Date("1/31/2020 16:58:30").getTime(), pinnedDate)).toBe('Hace menos de un minuto');
    expect(getLapse('es', new Date("1/31/2020 16:58:00").getTime(), pinnedDate)).toBe('Hace 1 minuto');
    expect(getLapse('es', new Date("1/31/2020 16:48:30").getTime(), pinnedDate)).toBe('Hace 10 minutos');
    expect(getLapse('es', new Date("1/31/2020 15:48:30").getTime(), pinnedDate)).toBe('Hace 1 hora');
    expect(getLapse('es', new Date("1/30/2020 15:48:30").getTime(), pinnedDate)).toBe('Hace 1 dia');
    expect(getLapse('es', new Date("1/20/2020 15:48:30").getTime(), pinnedDate)).toBe('Hace 1.6 semanas');
    expect(getLapse('es', new Date("12/25/2019 15:48:30").getTime(), pinnedDate)).toBe('Hace 1.3 meses');
    expect(getLapse('es', new Date("12/25/2018 15:48:30").getTime(), pinnedDate)).toBe('Hace 1.1 años');
    expect(getLapse('es', new Date("1/31/2019 16:59:00").getTime(), pinnedDate)).toBe('Hace 1 año');
  });
});
