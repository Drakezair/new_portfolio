import { getFilteredPages } from '../api';

const mockNotioData = {
  object: 'list',
  results: [
    {
      object: 'page',
      id: '574a6618-c303-450d-8231-8806987349d1',
      created_time: '2022-10-22T05:47:00.000Z',
      last_edited_time: '2022-12-10T22:29:00.000Z',
      created_by: {
        object: 'user',
        id: 'e9e2c440-0773-4338-b9fb-f114488820cf',
      },
      last_edited_by: {
        object: 'user',
        id: 'e9e2c440-0773-4338-b9fb-f114488820cf',
      },
      cover: {
        type: 'external',
        external: {
          url: 'https://images.unsplash.com/photo-1594904351111-a072f80b1a71?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
        },
      },
      icon: null,
      parent: {
        type: 'database_id',
        database_id: '6126e5b5-7881-4b8d-816d-676a4974b852',
      },
      archived: false,
      properties: {
        Tags: {
          id: '%3DIH%5E',
          type: 'multi_select',
          multi_select: [
            {
              id: '6e38b57e-1137-4462-b3c0-36c1b221955d',
              name: 'home',
              color: 'gray',
            },
          ],
        },
        Created: {
          id: 'f%3D%60%40',
          type: 'created_time',
          created_time: '2022-10-22T05:47:00.000Z',
        },
        Description: {
          id: 'hO%60n',
          type: 'rich_text',
          rich_text: [
            {
              type: 'text',
              text: {
                content:
                  'Muy a menudo se requiere validar los campos en nuestros formularios. Esto se puede hacer fácilmente usando React Hook From',
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: 'default',
              },
              plain_text:
                'Muy a menudo se requiere validar los campos en nuestros formularios. Esto se puede hacer fácilmente usando React Hook From',
              href: null,
            },
          ],
        },
        status: {
          id: 'moEh',
          type: 'status',
          status: {
            id: '9a4619fc-82a5-4e89-b891-dd569c96a04c',
            name: 'Public',
            color: 'green',
          },
        },
        Name: {
          id: 'title',
          type: 'title',
          title: [
            {
              type: 'text',
              text: {
                content:
                  'Maneja formularios en react de forma sencilla y organizada con Hook form',
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: 'default',
              },
              plain_text:
                'Maneja formularios en react de forma sencilla y organizada con Hook form',
              href: null,
            },
          ],
        },
      },
      url: 'https://www.notion.so/Maneja-formularios-en-react-de-forma-sencilla-y-organizada-con-Hook-form-574a6618c303450d82318806987349d1',
    },
    {
      object: 'page',
      id: '8524a319-c3b0-4056-b95b-30f84be24b95',
      created_time: '2022-10-22T04:48:00.000Z',
      last_edited_time: '2022-12-10T23:10:00.000Z',
      created_by: {
        object: 'user',
        id: 'e9e2c440-0773-4338-b9fb-f114488820cf',
      },
      last_edited_by: {
        object: 'user',
        id: 'e9e2c440-0773-4338-b9fb-f114488820cf',
      },
      cover: {
        type: 'external',
        external: {
          url: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
        },
      },
      icon: null,
      parent: {
        type: 'database_id',
        database_id: '6126e5b5-7881-4b8d-816d-676a4974b852',
      },
      archived: false,
      properties: {
        Tags: {
          id: '%3DIH%5E',
          type: 'multi_select',
          multi_select: [
            {
              id: '6e38b57e-1137-4462-b3c0-36c1b221955d',
              name: 'home',
              color: 'gray',
            },
          ],
        },
        Created: {
          id: 'f%3D%60%40',
          type: 'created_time',
          created_time: '2022-10-22T04:48:00.000Z',
        },
        Description: {
          id: 'hO%60n',
          type: 'rich_text',
          rich_text: [
            {
              type: 'text',
              text: {
                content:
                  'React Query es una biblioteca que le da a ReactJS la capacidad de gestión de estado para cualquier tipo de datos asíncronos. Según su documentación oficial',
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: 'default',
              },
              plain_text:
                'React Query es una biblioteca que le da a ReactJS la capacidad de gestión de estado para cualquier tipo de datos asíncronos. Según su documentación oficial',
              href: null,
            },
          ],
        },
        status: {
          id: 'moEh',
          type: 'status',
          status: {
            id: '9a4619fc-82a5-4e89-b891-dd569c96a04c',
            name: 'Public',
            color: 'green',
          },
        },
        Name: {
          id: 'title',
          type: 'title',
          title: [
            {
              type: 'text',
              text: {
                content:
                  'gestión de estado para cualquier tipo de datos asíncronos con React Query',
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: 'default',
              },
              plain_text:
                'gestión de estado para cualquier tipo de datos asíncronos con React Query',
              href: null,
            },
          ],
        },
      },
      url: 'https://www.notion.so/gesti-n-de-estado-para-cualquier-tipo-de-datos-as-ncronos-con-React-Query-8524a319c3b04056b95b30f84be24b95',
    },
    {
      object: 'page',
      id: '0fc51002-4817-408f-b147-b904c18f14ee',
      created_time: '2022-10-21T19:47:00.000Z',
      last_edited_time: '2022-12-10T22:28:00.000Z',
      created_by: {
        object: 'user',
        id: 'e9e2c440-0773-4338-b9fb-f114488820cf',
      },
      last_edited_by: {
        object: 'user',
        id: 'e9e2c440-0773-4338-b9fb-f114488820cf',
      },
      cover: {
        type: 'external',
        external: {
          url: 'https://images.unsplash.com/photo-1610986602538-431d65df4385?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
        },
      },
      icon: null,
      parent: {
        type: 'database_id',
        database_id: '6126e5b5-7881-4b8d-816d-676a4974b852',
      },
      archived: false,
      properties: {
        Tags: {
          id: '%3DIH%5E',
          type: 'multi_select',
          multi_select: [
            {
              id: '6e38b57e-1137-4462-b3c0-36c1b221955d',
              name: 'home',
              color: 'gray',
            },
          ],
        },
        Created: {
          id: 'f%3D%60%40',
          type: 'created_time',
          created_time: '2022-10-21T19:47:00.000Z',
        },
        Description: {
          id: 'hO%60n',
          type: 'rich_text',
          rich_text: [
            {
              type: 'text',
              text: {
                content:
                  'Una tarea común para los desarrolladores front-end es simular un servicio REST de back-end para entregar algunos datos en formato JSON a la aplicación front-end y asegurarse de que todo funcione como se espera.',
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: 'default',
              },
              plain_text:
                'Una tarea común para los desarrolladores front-end es simular un servicio REST de back-end para entregar algunos datos en formato JSON a la aplicación front-end y asegurarse de que todo funcione como se espera.',
              href: null,
            },
          ],
        },
        status: {
          id: 'moEh',
          type: 'status',
          status: {
            id: '9a4619fc-82a5-4e89-b891-dd569c96a04c',
            name: 'Public',
            color: 'green',
          },
        },
        Name: {
          id: 'title',
          type: 'title',
          title: [
            {
              type: 'text',
              text: {
                content: 'Crea tu UI antes que el backend con JSON server',
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: 'default',
              },
              plain_text: 'Crea tu UI antes que el backend con JSON server',
              href: null,
            },
          ],
        },
      },
      url: 'https://www.notion.so/Crea-tu-UI-antes-que-el-backend-con-JSON-server-0fc510024817408fb147b904c18f14ee',
    },
  ],
  next_cursor: null,
  has_more: false,
  type: 'page',
  page: {},
};

describe('getFilteredPages', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('pass', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockNotioData),
      })
    ) as jest.Mock;
    const data = await getFilteredPages({
      and: [
        {
          property: 'status',
          status: {
            equals: 'Draft',
          },
        },
      ],
    });
    expect(data).toStrictEqual([
      {
        title:
          'Maneja formularios en react de forma sencilla y organizada con Hook form',
        image:
          'https://images.unsplash.com/photo-1594904351111-a072f80b1a71?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
        id: '574a6618-c303-450d-8231-8806987349d1',
      },
      {
        title:
          'gestión de estado para cualquier tipo de datos asíncronos con React Query',
        image:
          'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
        id: '8524a319-c3b0-4056-b95b-30f84be24b95',
      },
      {
        title: 'Crea tu UI antes que el backend con JSON server',
        image:
          'https://images.unsplash.com/photo-1610986602538-431d65df4385?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
        id: '0fc51002-4817-408f-b147-b904c18f14ee',
      },
    ]);
  });

  test('fail', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        status: 400,
      })
    ) as jest.Mock;
    const data = await getFilteredPages({
      and: [
        {
          property: 'status',
          status: {
            equals: 'Draft',
          },
        },
      ],
    });
    expect(data).toStrictEqual([]);
  });
});
