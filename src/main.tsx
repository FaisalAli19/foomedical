import { MantineProvider, MantineThemeOverride } from '@mantine/core';
import { MedplumClient } from '@medplum/core';
import { MedplumProvider } from '@medplum/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import './index.css';

const medplum = new MedplumClient({
  onUnauthenticated: () => (window.location.href = '/'),
});

const theme: MantineThemeOverride = {
  colors: {
    brand: ['#EBFFFC'],
    selected: ['#90E2D4'],
    primary: ['#223E9A'],
    border: ['#798BC9'],
  },
  fontFamily: 'Pangram, sans-serif',
  primaryColor: 'brand',
  primaryShade: 9,
};

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <BrowserRouter>
      <MedplumProvider medplum={medplum}>
        <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
          <App />
        </MantineProvider>
      </MedplumProvider>
    </BrowserRouter>
  </StrictMode>
);
