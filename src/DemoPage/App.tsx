import { MantineProvider} from '@mantine/core';
import { memo, ReactElement } from 'react';
import { I18nextProvider } from 'react-i18next';
import { theme } from '@/shared/Theme/theme';
import { DemoPage } from './DemoPage';

import i18n from './translations';


export const DemoPageRun = memo((): ReactElement => {
  return (
    <I18nextProvider i18n={i18n}>
      <MantineProvider theme={theme}>
        <DemoPage />
      </MantineProvider>
    </I18nextProvider>
  );
});
