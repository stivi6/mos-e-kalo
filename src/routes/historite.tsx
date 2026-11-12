import { createFileRoute, Outlet } from '@tanstack/react-router';
export const Route = createFileRoute('/historite')({ component: StoriesLayout });
function StoriesLayout() { return <Outlet/>; }
