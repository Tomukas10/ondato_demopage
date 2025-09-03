import { useTranslation } from 'react-i18next';
import {
  Button,
  Container,
  Flex,
  Grid,
  Group,
  List,
  ListItem,
  ScrollArea,
  SimpleGrid,
  Tabs,
  Title,
} from '@mantine/core';
import { ProductItem } from './ProductItem';

import '../../shared/component.css';

const productData = [
  { id: 1, isActive: true },
  { id: 2, isActive: false },
  { id: 3, isActive: false },
  { id: 4, isActive: false },
  { id: 5, isActive: false },
];

export function IdentityVerification(): JSX.Element {
  const { t } = useTranslation();

  return (
    <Tabs.Panel value="IdentityVerification" w={1042} h={734} p={24}>
      <Flex direction="column" gap={8}>
        <Group gap={4} maw={670}>
          <Title order={4}>{t('IdentityVerification.Title')}</Title>
          <Title order={6}>{t('IdentityVerification.Description')}</Title>
        </Group>
        <Title order={4} mb="md">
          {t('IdentityVerification.Solutions')}
        </Title>
      </Flex>

      <Grid columns={3}>
        <Grid.Col span={2}>
          <ScrollArea className="misc" scrollbars="y" h={570} p={24}>
            <SimpleGrid spacing="xs" verticalSpacing="xl">
              {productData.map((item) => (
                <ProductItem key={item.id} isActive={item.isActive} />
              ))}
            </SimpleGrid>
          </ScrollArea>
        </Grid.Col>

        <Grid.Col span={1}>
          <Group gap={25}>
            <Container className="misc" w={315} ml="xs">
              <Title order={5} p={16}>
                {t('IdentityVerification.OndatoOSBanner')}
              </Title>
            </Container>
            <Group gap={8} ml="xs">
              <Title order={3}>{t('IdentityVerification.Whitelabeling')}</Title>
              <Container className="misc" w={315} h={132} />
              <Title order={6}>{t('IdentityVerification.WhiteLabelingDescription')}</Title>
              <Flex direction="column" gap={8}>
                <List>
                  <ListItem>{t('IdentityVerificationList.Logo')}</ListItem>
                  <ListItem>{t('IdentityVerificationList.Typography')}</ListItem>
                  <ListItem>{t('IdentityVerificationList.UIElements')}</ListItem>
                  <ListItem>{t('IdentityVerificationList.Illustrations')}</ListItem>
                </List>

                <Button size="xs" variant="default">
                  {t('Button.MoreInformation')}
                </Button>
              </Flex>
            </Group>

            <Flex direction="column" gap={8} ml="xs">
              <Title order={4}>{t('Button.Examples')}</Title>
              <Group>
                <Button size="xs" variant="secondary">
                  {t('Button.LightMode')}
                </Button>
                <Button size="xs" variant="secondary">
                  {t('Button.DarkMode')}
                </Button>
              </Group>
            </Flex>
          </Group>
        </Grid.Col>
      </Grid>
    </Tabs.Panel>
  );
}
