import { successResponse } from '../../src/services/response';

describe(' 🛠️ services -> ', () => {
    test('getEnvironment returns the correct env', () => {
        expect(successResponse({key: 'value'})).toEqual(
            {
                'code': 200, 
                'data': {'key': 'value'}, 
                'success': true
            }
        );
    });
})
