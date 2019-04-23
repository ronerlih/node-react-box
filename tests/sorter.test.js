import sorter from '../api/sorter';

let data = [1,2,2];

test('testing a test- log data', () => {
    expect(sorter( data )).arrayContaining();
});
