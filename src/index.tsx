import '../index.css';

import { createRoot } from 'react-dom/client';
import { DemoPageRun } from './DemoPage/DemoPageRun';

const container = document.getElementById('root');
if (!container) {
  throw new Error('RootElementNotFound');
}

const root = createRoot(container);
root.render(<DemoPageRun />);
