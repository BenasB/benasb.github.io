/* eslint-disable @typescript-eslint/no-explicit-any */
import { default as pathModule } from 'path';
import { PostMetaData } from 'components/postOverview/PostOverview';
import { getUntilFirstDelimiter } from './stringManipulation';
import GlobalTopics from 'enums/globalTopics';

export interface LoadedComponent {
  relativeFilePathWithoutExtension: string;
  fileName: string;
  component: React.ComponentType;
}

export interface LoadedPost extends LoadedComponent {
  metadata: PostMetaData;
}

const getGenericData = (
  path: string,
  fileUrl: string,
  body: any
): LoadedComponent => {
  const component: React.ComponentType = body.default;
  const fileName: string = pathModule.parse(fileUrl).name;
  const relativeFilePathWithoutExtension: string =
    pathModule.parse(fileUrl).dir + '/' === path
      ? fileName
      : pathModule.join(
          pathModule.parse(fileUrl).dir.replace(path, ''),
          pathModule.parse(fileUrl).name
        );

  return {
    fileName,
    relativeFilePathWithoutExtension,
    component,
  };
};

export const importGenericFiles = (
  path: string,
  webpackContext: __WebpackModuleApi.RequireContext
): LoadedComponent[] => {
  return importFiles<LoadedComponent>(path, webpackContext, getGenericData);
};

export const importPosts = (
  path: string,
  webpackContext: __WebpackModuleApi.RequireContext
): LoadedPost[] => {
  const getPostData = (
    path: string,
    fileUrl: string,
    body: any
  ): LoadedPost => {
    const genericData = getGenericData(path, fileUrl, body);
    const metaData = body.meta;
    metaData.date = new Date(metaData.date);

    return {
      ...genericData,
      metadata: {
        ...metaData,
        fileName: genericData.fileName,
        path: genericData.relativeFilePathWithoutExtension,
        topic: getUntilFirstDelimiter(
          genericData.relativeFilePathWithoutExtension,
          '/',
          GlobalTopics.UNCATEGORIZED
        ),
      },
    };
  };

  return importFiles<LoadedPost>(path, webpackContext, getPostData);
};

const importFiles = <Type,>(
  path: string,
  webpackContext: __WebpackModuleApi.RequireContext,
  eachFileCallback: (
    path: string,
    fileUrl: string,
    body: any // Unfortunately this must be of type 'any', eslint ignore at the top of this file
  ) => Type
): Type[] => {
  return webpackContext.keys().map((fileUrl) => {
    const body = webpackContext<Type>(fileUrl);
    return eachFileCallback(path, fileUrl, body);
  });
};
