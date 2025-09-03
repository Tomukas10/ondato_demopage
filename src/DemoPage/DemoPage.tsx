import { BusinessIntelligence } from "@/components/BusinessIntelligence/BusinessIntelligence";
import { CustomerDataPlatform } from "@/components/CustomerDataPlatform/CustomerDataPlatform";
import { IdentityVerification } from "@/components/IdentityVerification/IdentityVerification";
import { AppShell, Group, Flex, Title, Button, Box, Tabs, Image } from "@mantine/core";
import { IconPhoto, IconMessageCircle, IconSettings } from "@tabler/icons-react";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

export function DemoPage(): JSX.Element { 
  const { t } = useTranslation();
  return (
    <AppShell>
      <Group h={840} justify="center">
        <Flex w={1042} justify="space-between">
          <Flex gap={28}>
            <Image w={135} h={29} src="src/assets/Ondato_logo.png" alt="Ondato Logo" />
            <Title order={4}>{t("Header.SalesPlatform")}</Title>
          </Flex>
          <Button variant="secondary">{t("Header.ContactUs")}</Button>
        </Flex>

        <Box w={1042}>
          <Tabs defaultValue="IdentityVerification">
            <Tabs.List ml="xs">
              <Tabs.Tab value="IdentityVerification" leftSection={<IconPhoto size={12} />}>
                {t("IdentityVerification.Tab")}
              </Tabs.Tab>
              <Tabs.Tab value="customerDataPlatform" leftSection={<IconMessageCircle size={12} />}>
                {t("CustomerDataPlatform.Tab")}
              </Tabs.Tab>
              <Tabs.Tab value="businessInteligence" leftSection={<IconSettings size={12} />}>
                {t("BusinessIntelligence.Tab")}
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="IdentityVerification">
              <IdentityVerification />
            </Tabs.Panel>

            <Tabs.Panel value="customerDataPlatform">
              <CustomerDataPlatform />
            </Tabs.Panel>

            <Tabs.Panel value="businessInteligence">
              <BusinessIntelligence />
            </Tabs.Panel>
          </Tabs>
        </Box>
      </Group>
    </AppShell>
  );
}
