import '../index.css';

import { createRoot } from 'react-dom/client';
import { AppNew } from './app/app';

const container = document.getElementById('root');
if (!container) {
  throw new Error('RootElementNotFound');
}

const root = createRoot(container);
root.render(<AppNew />);
