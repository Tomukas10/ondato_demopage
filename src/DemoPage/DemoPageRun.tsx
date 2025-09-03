import { theme } from '@/shared/Theme/theme';
import {
  MantineProvider
} from '@mantine/core';
import { memo, ReactElement } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './translations';
import { DemoPage } from './DemoPage';

export const DemoPageRun = memo((): ReactElement => {
  return (
    <I18nextProvider i18n={i18n}>
      <MantineProvider theme={theme}>
        <DemoPage />
      </MantineProvider>
    </I18nextProvider>
  );
});
