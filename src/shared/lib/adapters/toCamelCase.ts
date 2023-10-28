export const toCamelCase = (obj: Record<string, unknown>) => {
  const camelObj: Record<string, unknown> = {};

  Object.keys(obj).forEach((key) => {
    camelObj[key.replace(/(_\w)/g, (k) => k[1].toUpperCase())] = obj[key];
  });

  return camelObj;
};
