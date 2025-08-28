import { memo, ReactElement } from 'react';
import { IconMessageCircle, IconPhoto, IconSettings } from '@tabler/icons-react';
import { I18nextProvider } from 'react-i18next';
import {
  AppShell,
  Box,
  Button,
  Container,
  Flex,
  Group,
  Image,
  MantineProvider,
  Tabs,
  Text,
  Title,
} from '@mantine/core';

import i18n from './translations';
import businessintelligence from '@/components/BusinessIntelligence/BusinessIntelligence';
import customerDataPlatform from '@/components/CustomerDataPlatform/CustomerDataPlatform';
import idVerificationTab from '@/components/IdentityVerification/IdVerification';
import { themeV7 } from '@/shared/Theme/themeV7';


export const AppNew = memo((): ReactElement => {
  // #############################################################################
  // #############################################################################

  function DemoPage() {
    return (
      <AppShell>
          <Group h={840} justify='center'>
            <Flex w={1042} justify="space-between">
              <Flex gap={28}>
                <Image w={135} h={29} src="src/assets/Ondato_logo.png" alt="Ondato Logo" />
                <Title order={4}>
                  Sales platform
                </Title>
              </Flex>
              <Button variant='secondary'>Contact us</Button>
            </Flex>

            <Box
              w={1042}>
              <Tabs defaultValue="idVerification">
                <Tabs.List>
                  <Tabs.Tab value="idVerification" leftSection={<IconPhoto size={12} />}>
                    Identity verification
                  </Tabs.Tab>
                  <Tabs.Tab
                    value="customerDataPlatform"
                    leftSection={<IconMessageCircle size={12} />}
                  >
                    Customer data platform
                  </Tabs.Tab>
                  <Tabs.Tab value="businessInteligence" leftSection={<IconSettings size={12} />}>
                    Business intelligence
                  </Tabs.Tab>
                </Tabs.List>
                {idVerificationTab()}
                {customerDataPlatform()}
                {businessintelligence()}
              </Tabs>
            </Box>
          </Group>
      </AppShell>
    );
  }

  // #############################################################################
  // #############################################################################

  return (
    <I18nextProvider i18n={i18n}>
      <MantineProvider theme={themeV7}>
        <DemoPage />
      </MantineProvider>
    </I18nextProvider>
  );
});