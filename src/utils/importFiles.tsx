import path from 'path';
import { BlogMetaData } from 'components/blogOverview/blogOverview';

export interface LoadedComponent {
  slug: string;
  component: React.ComponentType;
}

export interface LoadedPost extends LoadedComponent {
  metadata: BlogMetaData;
}

const getGenericData = (fileUrl: string, body: any): LoadedComponent => {
  const slug: string = path.parse(fileUrl).name; // TODO: leave path (remove only the starting to search path)
  const component: React.ComponentType = body.default;

  return {
    slug,
    component,
  };
};

export const importGenericFiles = (
  webpackContext: __WebpackModuleApi.RequireContext
): LoadedComponent[] => {
  return importFiles<LoadedComponent>(webpackContext, getGenericData);
};

export const importPosts = (
  webpackContext: __WebpackModuleApi.RequireContext
): LoadedPost[] => {
  const getPostData = (fileUrl: string, body: any): LoadedPost => {
    const metaData = body.metadata;
    return {
      ...getGenericData(fileUrl, body),
      metadata: { ...metaData, path: `/blog/${path.parse(fileUrl).name}` },
    };
  };

  return importFiles<LoadedPost>(webpackContext, getPostData);
};

const importFiles = <Type,>(
  webpackContext: __WebpackModuleApi.RequireContext,
  eachFileCallback: (
    fileUrl: string,
    body: __WebpackModuleApi.RequireContext // TODO: DETERMINE TYPE
  ) => Type
): Type[] => {
  return webpackContext.keys().map((fileUrl) => {
    const body = webpackContext(fileUrl);
    return eachFileCallback(fileUrl, body);
  });
};
