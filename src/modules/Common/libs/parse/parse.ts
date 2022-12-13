import { FieldValues } from 'react-hook-form';

export function parseFilters(filters: FieldValues, type: 'or' | 'and'): object {
  return {
    [type]: [
      {
        property: 'status',
        status: {
          equals: 'Public',
        },
      },
      {
        property: 'Name',
        title: {
          contains: filters['Name'],
        },
      },
      ...Object.keys(filters)
        .filter((item: string) => item !== 'Name' && filters[item])
        .map((item) => ({
          property: 'Tags',
          multi_select: {
            contains: item.split('-')[0],
          },
        })),
    ],
  };
}
