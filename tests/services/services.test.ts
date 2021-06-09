import { successResponse, errorResponse } from '../../src/services/response';

describe(' 🛠️ services -> ', () => {
    test('successResponse returns the correct output', () => {
        expect(successResponse({key: 'value'})).toEqual(
            {
                'code': 200, 
                'data': {'key': 'value'}, 
                'success': true
            }
        );
    });

    test('errorResponse returns the correct output', () => {
        expect(errorResponse('error')).toEqual({
            'code': 400, 
            'data': {'message': 'error'}, 
            'error': true
        })
    });
})
