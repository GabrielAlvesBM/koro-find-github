import { Outlet } from 'react-router-dom';

export const SearchLayout = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <Outlet />
    </main>
  );
};
