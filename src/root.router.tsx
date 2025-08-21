import { Route, Routes } from 'react-router-dom';
import { SearchLayout, SearchPage, SearchRoutes } from './modules/search';

export const RootRouter = () => {
  return (
    <Routes>
      <Route element={<SearchLayout />}>
        <Route path={SearchRoutes.Base} element={<SearchPage />} />
      </Route>
    </Routes>
  );
};
