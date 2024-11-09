export const getPresentationLink = (url: string) => {
  return url.replace('https://', '').replace('www.', '');
};
