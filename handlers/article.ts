const data = {
  a: 'Article a',
  b: 'Article b',
  c: 'Article c',
};

export const fetchArticle = async (path: string | string[] = '') => {
  let docsPath = typeof path === 'string' ? path : path.join('/');
  if (!docsPath || docsPath === '/') {
    docsPath = 'a';
  }

  console.log('fetchArtile', docsPath);

  const content = data[docsPath];

  return {
    id: docsPath,
    content,
  };
};
