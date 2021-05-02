export const capitalize = (s: string) => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const getUntilFirstDelimiter = (
  s: string,
  delimiter: string,
  fallback?: string
) => {
  return s.indexOf(delimiter) === -1
    ? fallback || ''
    : s.substr(0, s.indexOf(delimiter));
};
