import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useSnapshot } from 'valtio';

import blog_state from '@/modules/Blog/Stores/blog_state';
import { getFilteredPagesFront } from '@/modules/Common/libs/notion/api';
import { parseFilters } from '@/modules/Common/libs/parse/parse';
import { CheckboxInput, SearchInput } from '@/modules/Common/UI';

export default function FiltersBlogLayout() {
  const queryClient = useQueryClient();
  const { tags } = useSnapshot(blog_state);
  const { handleSubmit, watch, register } = useForm({
    defaultValues: {
      Name: '',
      ...tags?.multi_select.options
        .map(({ name }: { name: string }) => ({
          [name]: false,
        }))
        .reduce((acc, current) => {
          return {
            ...acc,
            ...current,
          };
        }),
    } as { [key: string]: number | string },
  });

  const { isFetching } = useQuery({
    queryKey: ['blog_posts'],
    queryFn: async ({ signal }) => {
      await handleSubmit(async (data) => {
        const parsedValues = parseFilters(data, 'and');
        const posts = await getFilteredPagesFront(parsedValues, signal);
        blog_state.posts = posts;
      })();
      return true;
    },
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    const subscribtion = watch(() => {
      queryClient.invalidateQueries(['blog_posts']);
    });

    return () => subscribtion.unsubscribe();
  }, [queryClient, watch]);

  useEffect(() => {
    blog_state.loading = isFetching;
  }, [isFetching]);

  return (
    <form>
      <div className='flex flex-col gap-3 max-lg:h-28 max-lg:bg-gray-700 max-lg:p-5 lg:grid lg:divide-y'>
        <div>
          <SearchInput
            inputProps={{ ...register('Name') }}
            buttonProps={{ type: 'submit' }}
          />
        </div>
        <div className='h-80'>
          <p className='my-2 font-mono text-xl font-extralight text-white max-lg:hidden'>
            Etiquetas
          </p>
          <div className='max-lg:flex max-lg:w-full max-lg:flex-row max-lg:overflow-x-scroll  max-lg:scrollbar-hide '>
            {tags?.multi_select?.options?.map(({ name, color }, index) => (
              <CheckboxInput
                key={index}
                id={`${name}_tag`}
                {...register(name)}
                wrapperClassName='max-lg:flex max-lg:flex-row'
                labelElement={
                  <span
                    style={{
                      textDecoration: `underline ${color} 2px`,
                    }}
                    className='flex flex-row items-center no-underline max-lg:mr-6'
                  >
                    {name}
                  </span>
                }
              />
            ))}
          </div>
        </div>
      </div>
    </form>
  );
}
