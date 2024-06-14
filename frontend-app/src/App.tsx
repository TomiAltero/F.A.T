import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';

import ECommerce from './pages/Dashboard/ECommerce';
import Profile from './pages/Profile';
import Buttons from './pages/UiElements/Buttons';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          index
          element={
            <>
              <ECommerce />
            </>
          }
        />
        <Route path="/calendar" element={<></>} />
        <Route
          element={
            <>
              <Profile />
            </>
          }
        />
        <Route path="/forms/form-elements" element={<></>} />
        <Route path="/forms/form-layout" element={<></>} />
        <Route path="/tables" element={<></>} />
        <Route path="/settings" element={<></>} />
        <Route path="/chart" element={<></>} />
        <Route path="/ui/alerts" element={<></>} />
        <Route
          element={
            <>
              <Buttons />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
