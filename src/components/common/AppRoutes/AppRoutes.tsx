import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MoviePage } from 'src/pages/MoviePage';
import { FavoritePage } from 'src/pages/FavoritePage';

import { Home } from '../../../pages/Home';
import { RoutesMap } from '../../../common/constans';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path={RoutesMap.MAIN} element={<Home />} />
        <Route path={RoutesMap.Movie} element={<MoviePage />} />
        <Route path={RoutesMap.NotFound} element={<h1>Page Not Found</h1>} />
        <Route path={RoutesMap.Favorite} element={<FavoritePage />} />
      </Routes>
    </>
  );
};
