export const capitalize = (s: string) => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const getUntilFirstDelimiter = (
  s: string,
  delimiter: string,
  fallback?: string
) => {
  if (delimiter.length === 0) return s;

  return s.indexOf(delimiter) === -1
    ? fallback || ''
    : s.substr(0, s.indexOf(delimiter));
};

export const isURL = (str: string) => {
  const expression = new RegExp(
    // requires http/https protocol
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
  );

  return expression.test(str);
};

export const isDomain = (url: string) => {
  const pattern = new RegExp(
    // requires http/https protocol
    /(https?:\/\/(.+?\.)?benasb\.github\.io(\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*)?)/
  );
  return pattern.test(url);
};
