import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import Routes from './routes';
import store from './store';
import history from './routes/history';
import GlobalStyles from './styles/globalStyles';

const App = () => (
  <Provider store={store}>
    <GlobalStyles />
    <Routes>
      <ConnectedRouter history={history} />
    </Routes>
  </Provider>
);

export default App;
