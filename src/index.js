import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import './index.css';
import App from './App';
import { Provider } from './context/context';

ReactDOM.render(
  <SpeechProvider appId="d1208334-e7e6-4b2c-96f5-b0408762aeee" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root'),
);

