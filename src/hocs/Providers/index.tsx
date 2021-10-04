import React from 'react';
import { ThemeProvider, vars } from 'src/theme';
import { BrowserRouter } from 'react-router-dom';
import { StoreContext } from 'storeon/react';
import { LocaleContext } from 'src/context';
import { store } from 'src/store';
import { locales } from 'src/locales';
import { GlobalStyles } from 'src/theme/GlobalStyles';
import { Layout } from 'src/hocs/Layout';
import { Init } from 'src/hocs/Init';

export const Providers = ({ children }) => (
  <ThemeProvider theme={vars}>
    <BrowserRouter>
      <GlobalStyles />
      <LocaleContext.Provider value={locales}>
        <StoreContext.Provider value={store}>
          <Init>
            <Layout>{children}</Layout>
          </Init>
        </StoreContext.Provider>
      </LocaleContext.Provider>
    </BrowserRouter>
  </ThemeProvider>
);
