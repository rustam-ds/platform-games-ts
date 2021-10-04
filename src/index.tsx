import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { Providers } from 'src/hocs/Providers';
import { App } from 'src/App';

const app = (
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>
);

render(app, document.getElementById('root'));
