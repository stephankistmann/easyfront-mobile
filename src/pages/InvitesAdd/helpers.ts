export const removeDateSeconds = (time: string) => {
  const [hour, minute] = time.split(":");

  return `${hour}:${minute}`;
};
