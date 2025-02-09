export const getCartFromLS = () => {
  const data = localStorage.getItem('favoriteMoviesTest');
  return data ? JSON.parse(data) : [];
};
