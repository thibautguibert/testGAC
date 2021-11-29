export function setPageName(pageName) {
  return {
    type: 'PAGENAME.UPDATE',
    name: pageName,
  };
}
