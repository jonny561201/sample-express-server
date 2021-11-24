import mockFetch from 'node-fetch';
import getResults from '../../services/apiService';


jest.mock('node-fetch');


describe('Rest Api Service', () => {
    it('should call placeholder service', async () => {
        const actual = await getResults(1);
        expect(mockFetch).toHaveBeenCalled();
    });
})