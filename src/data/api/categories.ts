import fetchAPI from './index';

export async function getCategories() {
  return fetchAPI('/categories/');
}
