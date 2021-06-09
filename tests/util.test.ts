import utils from '../src/utils';

describe(' 🛠️ utils -> ', () => {
    test('getEnvironment returns the correct env', () => {
        expect(utils.getEnvironment()).toBe('test');
    });

    test('determineMissingProperty returns an array of missing keys', () => {
        expect(utils.determineMissingProperty(['key'], ['key', 'value'])).toStrictEqual(['value']);
    });

    test('isURL should return false for a invalid url', () => {
        expect(utils.isUrl('htslides.com/demos/sample-videos/small.mp4')).toBe(false)
    });
    test('isURL should return true for a valid url', () => {
        expect(utils.isUrl('http://techslides.com/demos/sample-videos/small.mp4')).toBe(true)
    });
})
