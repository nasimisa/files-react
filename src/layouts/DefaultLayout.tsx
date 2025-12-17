import { NavLink, useLocation, Outlet } from 'react-router-dom';
import { Button, Paper, Stack } from '@mantine/core';

const NAV_ITEMS = [
  { label: 'Homepage', path: '/' },
  { label: 'Favorites', path: '/favorites' },
];

export const Sidebar = () => {
  const location = useLocation();

  return (
    <Paper
      withBorder
      style={{
        width: 200,
        height: "100vh",
        background: "#f9f9f9",
        padding: 20,
      }}
    >
      <Stack>
        {NAV_ITEMS.map(({ label, path }) => {
          const isActive = location.pathname === path;

          return (
            <Button component={NavLink} to={path} variant={isActive ? 'filled' : 'default'}>
              {label}
            </Button>
          );
        })}
      </Stack>
    </Paper>
  );
};

export const DefaultLayout = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100vh',
      }}
    >
      <Sidebar />

      <div
        style={{
          padding: 30,
          flex: 1,
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};
