import path from 'path';

export interface LoadedComponent {
  slug: string;
  component: React.ComponentType;
}

const importFiles = (
  webpackContext: __WebpackModuleApi.RequireContext
): LoadedComponent[] => {
  return webpackContext.keys().map((fileUrl) => {
    const body = webpackContext(fileUrl);

    const slug: string = path.parse(fileUrl).name;
    const component: React.ComponentType = body.default;

    return {
      slug,
      component,
    };
  });
};

export default importFiles;
