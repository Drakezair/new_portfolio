import '@testing-library/jest-dom';

import { parseFilters } from '../parse';

describe('parseFilters', () => {
  it('should return an object', () => {
    expect(parseFilters({ Name: 'test' }, 'or')).toEqual({
      or: [
        {
          property: 'status',
          status: {
            equals: 'Public',
          },
        },
        {
          property: 'Name',
          title: {
            contains: 'test',
          },
        },
      ],
    });
  });
});
