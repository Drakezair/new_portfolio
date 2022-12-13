export interface DatabaseQuery {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: {
    object: string;
    id: string;
  };
  last_edited_by: {
    object: string;
    id: string;
  };
  cover: {
    type: string;
    external: {
      url: string;
    };
  };
  icon: null;
  parent: {
    type: string;
    database_id: string;
  };
  archived: false;
  properties: {
    Description: {
      id: string;
      type: string;
      rich_text: [
        {
          type: string;
          text: {
            content: string;
            link: null;
          };
          annotations: {
            bold: false;
            italic: false;
            strikethrough: false;
            underline: false;
            code: false;
            color: string;
          };
          plain_text: string;
          href: null;
        }
      ];
    };
    Tags: {
      id: string;
      type: string;
      multi_select: {
        id: string;
        name: string;
        color: string;
      }[];
    };
    Created: {
      id: string;
      type: string;
      created_time: string;
    };
    status: {
      id: string;
      type: string;
      status: {
        id: string;
        name: string;
        color: string;
      };
    };
    Name: {
      id: string;
      type: string;
      title: [
        {
          type: string;
          text: {
            content: string;
            link: string | null;
          };
          annotations: {
            bold: boolean;
            italic: boolean;
            strikethrough: boolean;
            underline: boolean;
            code: boolean;
            color: string;
          };
          plain_text: string;
          href: string | null;
        }
      ];
    };
  };
  url: string;
}

export interface DatabaseRetrieve {
  object: string;
  id: string;
  cover: null;
  icon: null;
  created_time: string;
  created_by: {
    object: string;
    id: string;
  };
  last_edited_by: {
    object: string;
    id: string;
  };
  last_edited_time: string;
  title: [
    {
      type: string;
      text: {
        content: string;
        link: null;
      };
      annotations: {
        bold: boolean;
        italic: boolean;
        strikethrough: boolean;
        underline: boolean;
        code: boolean;
        color: string;
      };
      plain_text: string;
      href: null;
    }
  ];
  description: [];
  is_inline: false;
  properties: {
    Tags: {
      id: string;
      name: string;
      type: string;
      multi_select: {
        options: {
          id: string;
          name: string;
          color: string;
        }[];
      };
    };
    Created: {
      id: string;
      name: string;
      type: string;
      created_time: object;
    };
    Description: {
      id: string;
      name: string;
      type: string;
      rich_text: object;
    };
    status: {
      id: string;
      name: string;
      type: string;
      status: {
        options: {
          id: string;
          name: string;
          color: string;
        }[];
        groups: {
          id: string;
          name: string;
          color: string;
          option_ids: string[];
        }[];
      };
    };
    Name: {
      id: string;
      name: string;
      type: string;
      title: object;
    };
  };
  parent: {
    type: string;
    workspace: boolean;
  };
  url: string;
  archived: boolean;
}

export interface TagDatabaseNotion {
  id: string;
  name: string;
  type: string;
  multi_select: {
    options: {
      id: string;
      name: string;
      color: string;
    }[];
  };
}

export interface PageRetrieve {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: {
    object: string;
    id: string;
  };
  last_edited_by: {
    object: string;
    id: string;
  };
  cover: {
    type: string;
    external: {
      url: string;
    };
  };
  icon: {
    type: string;
    emoji: string;
  };
  parent: {
    type: string;
    database_id: string;
  };
  archived: false;
  properties: {
    Tags: {
      id: string;
      type: string;
      multi_select: {
        id: string;
        name: string;
        color: string;
      }[];
    };
    Created: {
      id: string;
      type: string;
      created_time: string;
    };
    Description: {
      id: string;
      type: string;
      rich_text: {
        type: string;
        text: {
          content: string;
          link: null;
        };
        annotations: {
          bold: boolean;
          italic: boolean;
          strikethrough: boolean;
          underline: boolean;
          code: boolean;
          color: string;
        };
        plain_text: string;
        href: string | null;
      }[];
    };
    status: {
      id: string;
      type: string;
      status: {
        id: string;
        name: string;
        color: string;
      };
    };
    Name: {
      id: string;
      type: string;
      title: {
        type: string;
        text: {
          content: string;
          link: null | string;
        };
        annotations: {
          bold: boolean;
          italic: boolean;
          strikethrough: boolean;
          underline: boolean;
          code: boolean;
          color: string;
        };
        plain_text: string;
        href: null | string;
      }[];
    };
  };
  url: string;
}
