import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import Today from './pages/Today';
import Library from './pages/Library';
import Journal from './pages/Journal';
import Settings from './pages/Settings';
import SplashScreen from './components/SplashScreen';

export default function App() {
  const [isSplashComplete, setIsSplashComplete] = useState(false);

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        {!isSplashComplete && (
          <SplashScreen onComplete={() => setIsSplashComplete(true)} />
        )}
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Today />} />
              <Route path="/library" element={<Library />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
