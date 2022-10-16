import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Footer, Header } from '@components';
import { PCPartInCartProvider, PCPartSelectedProvider } from '@context';
import { CartPage, HomePage } from '@pages';
import './App.css';
import liff from '@line/liff';
import { Button } from 'react-bootstrap';

function App() {
  interface Profile {
    userId: string;
    displayName: string;
    pictureUrl?: string;
    statusMessage?: string;
  }

  const [message, setMessage] = useState('');
  const [data, setData] = useState({
    isInClient: false,
    os: 'ios',
    isInAppBrowser: false,
    isLoggedIn: false,
  });
  const [profile, setProfile] = useState<Profile>({} as Profile);
  const [error, setError] = useState('');
  const liffInit = async () => {
    try {
      await liff.init({ liffId: import.meta.env.VITE_LIFF_ID });
      setMessage('LIFF init succeeded.');
      const { userAgent } = navigator;
      setData({
        isInClient: liff.isInClient(),
        isLoggedIn: liff.isLoggedIn(),
        os: liff.getOS() as string,
        isInAppBrowser: !liff.isInClient() && userAgent.includes('Line'),
      });
      if (liff.isLoggedIn()) {
        const profile = await liff.getProfile();
        setProfile(profile);
      }
    } catch (error) {
      setMessage('LIFF init failed.');
      setError(`${error}`);
    }
  };
  useEffect(() => {
    liffInit();
  }, [message]);
  const logout = () => {
    liff.logout();
  };
  const login = () => {
    liff.login();
  };

  return (
    <div className="App">
      <div className="d-flex flex-column min-vh-100 justify-content-between">
        <PCPartSelectedProvider>
          <PCPartInCartProvider>
            <Header />
            {data.isLoggedIn ? (
              <>
                <Button data-testid="logout" onClick={logout}>
                  Logout
                </Button>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/cart" element={<CartPage />} />
                </Routes>
              </>
            ) : (
              <Button data-testid="login" onClick={login}>
                Login
              </Button>
            )}

            <Footer />
          </PCPartInCartProvider>
        </PCPartSelectedProvider>
      </div>
    </div>
  );
}

export default App;
