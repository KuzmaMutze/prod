import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app/App';
import { ThemeProvider } from './app/providers/ThemeProvider/ui/ThemeProvider';
import { StoreProdiver } from 'app/providers/StoreProdiver';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';

import 'app/sass/index.scss';
import 'shared/config/i18n/i18n';

render(
  <StoreProdiver>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProdiver>,
  document.getElementById('root')
);
