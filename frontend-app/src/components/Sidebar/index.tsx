import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true',
  );

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
      document.addEventListener('keydown', keyHandler);
    };
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  const handleLogout = () => {
    console.log('Logging out...');
  };

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-gray-2 duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <NavLink to="/">
          <h1 className="text-2xl font-bold text-blue-800 font-mono ">
            DownIsUp
          </h1>
        </NavLink>
      </div>
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear flex-grow">
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              <li>
                <NavLink
                  to="/"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out color-black ${pathname.includes(
                    'calendar',
                  )}`}
                >
                  <svg
                    className="fill-current"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 3L2 12h3v7h6v-4h2v4h6v-7h3L12 3z" fill="" />
                  </svg>
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/panel-hijo"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-semibold ${pathname.includes(
                    'profile',
                  )}`}
                >
                  <svg
                    className="fill-current"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.0002 7.79065C11.0814 7.79065 12.7689 6.1594 12.7689 4.1344C12.7689 2.1094 11.0814 0.478149 9.0002 0.478149C6.91895 0.478149 5.23145 2.1094 5.23145 4.1344C5.23145 6.1594 6.91895 7.79065 9.0002 7.79065ZM9.0002 1.7719C10.3783 1.7719 11.5033 2.84065 11.5033 4.16252C11.5033 5.4844 10.3783 6.55315 9.0002 6.55315C7.62207 6.55315 6.49707 5.4844 6.49707 4.16252C6.49707 2.84065 7.62207 1.7719 9.0002 1.7719Z"
                      fill=""
                    />
                    <path
                      d="M10.8283 9.05627H7.17207C4.16269 9.05627 1.71582 11.5313 1.71582 14.5406V16.875C1.71582 17.2125 1.99707 17.5219 2.3627 17.5219C2.72832 17.5219 3.00957 17.2407 3.00957 16.875V14.5406C3.00957 12.0469 4.67182 9.99314 7.17207 9.99314H10.8283C13.3286 9.99314 14.9908 12.0469 14.9908 14.5406V16.875C14.9908 17.2125 15.2721 17.5219 15.6377 17.5219C16.0033 17.5219 16.2846 17.2407 16.2846 16.875V14.5406C16.2846 11.5313 13.8377 9.05627 10.8283 9.05627Z"
                      fill=""
                    />
                  </svg>
                  Mi hijo
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/notifications"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium ${pathname.includes(
                    'notifications',
                  )}`}
                >
                  <svg
                    className="fill-current"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 0.75C9.69036 0.75 10.25 1.30964 10.25 2V2.75H12.0625C13.7915 2.75 15.1875 4.14597 15.1875 5.875V10.4541L16.6951 12.1914C16.8031 12.3122 16.875 12.4643 16.875 12.625V14C16.875 14.5523 16.4273 15 15.875 15H2.125C1.57272 15 1.125 14.5523 1.125 14V12.625C1.125 12.4643 1.19687 12.3122 1.30493 12.1914L2.8125 10.4541V5.875C2.8125 4.14597 4.20847 2.75 5.9375 2.75H7.75V2C7.75 1.30964 8.30964 0.75 9 0.75ZM8 16.25H10C10 16.9404 9.44036 17.5 8.75 17.5H9C9.69036 17.5 10.25 18.0596 10.25 18.75C10.25 19.4404 9.69036 20 9 20H8C7.30964 20 6.75 19.4404 6.75 18.75C6.75 18.0596 7.30964 17.5 8 17.5H8.25C7.55964 17.5 7 16.9404 7 16.25H8Z"
                      fill=""
                    />
                  </svg>
                  Notificaciones
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/therapies"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium ${pathname.includes(
                    'therapies',
                  )}`}
                >
                  <svg
                    className="fill-current"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 0.75C10.2434 0.75 11.25 1.7566 11.25 3V4.6875H15.625C16.8392 4.6875 17.875 5.72331 17.875 6.9375V15.625C17.875 16.8392 16.8392 17.875 15.625 17.875H2.375C1.16079 17.875 0.125 16.8392 0.125 15.625V6.9375C0.125 5.72331 1.16079 4.6875 2.375 4.6875H6.75V3C6.75 1.7566 7.7566 0.75 9 0.75ZM6.75 4.6875V6H2.375C1.89229 6 1.5 6.39229 1.5 6.875V15.625C1.5 16.1077 1.89229 16.5 2.375 16.5H15.625C16.1077 16.5 16.5 16.1077 16.5 15.625V6.875C16.5 6.39229 16.1077 6 15.625 6H11.25V4.6875H6.75Z"
                      fill=""
                    />
                  </svg>
                  Terapias
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <div className="mt-auto px-4 lg:px-6 py-4">
          <button
            onClick={handleLogout}
            className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium  duration-300 ease-in-out"
          >
            <svg
              className="fill-current"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5375 0.618744H11.6531C10.7594 0.618744 10.0031 1.37499 10.0031 2.26874V4.64062C10.0031 5.05312 10.3469 5.39687 10.7594 5.39687C11.1719 5.39687 11.55 5.05312 11.55 4.64062V2.23437C11.55 2.16562 11.5844 2.13124 11.6531 2.13124H15.5375C16.3625 2.13124 17.0156 2.78437 17.0156 3.60937V18.3562C17.0156 19.1812 16.3625 19.8344 15.5375 19.8344H11.6531C11.5844 19.8344 11.55 19.8 11.55 19.7312V17.3594C11.55 16.9469 11.2062 16.6031 10.7594 16.6031C10.3125 16.6031 10.0031 16.9469 10.0031 17.3594V19.7312C10.0031 20.625 10.7594 21.3812 11.6531 21.3812H15.5375C17.2219 21.3812 18.5625 20.0062 18.5625 18.3562V3.64374C18.5625 1.95937 17.1875 0.618744 15.5375 0.618744Z"
                fill=""
              />
              <path
                d="M6.05001 11.7563H12.2031C12.6156 11.7563 12.9594 11.4125 12.9594 11C12.9594 10.5875 12.6156 10.2438 12.2031 10.2438H6.08439L8.21564 8.07813C8.52501 7.76875 8.52501 7.2875 8.21564 6.97812C7.90626 6.66875 7.42501 6.66875 7.11564 6.97812L3.67814 10.4844C3.36876 10.7938 3.36876 11.275 3.67814 11.5844L7.11564 15.0906C7.25314 15.2281 7.45939 15.3312 7.66564 15.3312C7.87189 15.3312 8.04376 15.2625 8.21564 15.125C8.52501 14.8156 8.52501 14.3344 8.21564 14.025L6.05001 11.7563Z"
                fill=""
              />
            </svg>
            Cerrar sesión
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
