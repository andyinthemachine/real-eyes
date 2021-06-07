import utils from '../src/utils';

describe(' 🛠️ utils -> ', () => {
    test('getEnvironment returns the correct env', () => {
        expect(utils.getEnvironment()).toBe('test');
    });
})
