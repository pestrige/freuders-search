export const toSnakeCase = (obj: Record<string, unknown>) => {
  const snakeObj: Record<string, unknown> = {};

  Object.keys(obj).forEach((key) => {
    snakeObj[key.replace(/([A-Z])/g, "_$1").toLowerCase()] = obj[key];
  });

  return snakeObj;
};
