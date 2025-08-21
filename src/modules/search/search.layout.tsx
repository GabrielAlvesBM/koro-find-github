import { Outlet } from 'react-router-dom';

export const SearchLayout = () => {
  return (
    <main className="h-screen">
      <Outlet />
    </main>
  );
};
