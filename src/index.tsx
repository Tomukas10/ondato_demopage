import { createRoot } from 'react-dom/client';
import { DemoPageRun } from './DemoPage/App';

import '../index.css';

const container = document.getElementById('root');
if (!container) {
  throw new Error('RootElementNotFound');
}

const root = createRoot(container);
root.render(<DemoPageRun />);
