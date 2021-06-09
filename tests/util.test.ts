import utils from '../src/utils';

describe(' 🛠️ utils -> ', () => {
    test('getEnvironment returns the correct env', () => {
        expect(utils.getEnvironment()).toBe('test');
    });

    test('determineMissingProperty returns an array of missing keys', () => {
        expect(utils.determineMissingProperty(['key'], ['key', 'value'])).toStrictEqual(['value']);
    });
})
