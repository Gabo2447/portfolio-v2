type tURL = `https://${string}`;

export interface Framework {
  name: string;
  icon: string;
}

export interface CardPropsSchema {
  img: string;
  title: `${string} - ${string}`;
  frameworks: Framework[];
  description: string;
  github?: tURL;
  preview: tURL;
}

export type tIMG = Pick<CardPropsSchema, "img">;
export type tTitle = Pick<CardPropsSchema, "title">;
export type tFrameworks = Pick<CardPropsSchema, "frameworks">;
export type tDescription = Pick<CardPropsSchema, "description">;
export type tPreview = Pick<CardPropsSchema, "preview">;
export type tGithub = Pick<CardPropsSchema, "github">;
