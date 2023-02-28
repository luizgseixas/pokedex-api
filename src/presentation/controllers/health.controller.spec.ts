import { HealthController } from './health.controller';

describe('HealthController', () => {
  it('should returns an ok response', async () => {
    const sut = new HealthController();

    const response = await sut.handle({});

    expect(response).toMatchObject({
      body: { message: 'OK' },
      statusCode: 200,
    });
  });
});
