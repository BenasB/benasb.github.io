import slugify from 'slugify';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const slugifier = (str: string | any[]) => {
  const options = {
    lower: true,
    remove: /[*+~,.()'"!:@]/g,
  };
  if (typeof str === 'string') {
    return slugify(str, options);
  } else {
    return slugify(str.reduce(anyArrayReducer), options);
  }
};

// Used when array of unkown objects are passed in from mdx header text
const anyArrayReducer = (accumulator: string, currentValue: unknown) => {
  if (typeof currentValue === 'string') {
    return accumulator + currentValue;
  }
  return accumulator;
};

export default slugifier;
