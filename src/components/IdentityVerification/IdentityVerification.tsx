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
import { ProductItem } from './ProductList';

const productData = [true, false, false, false, false];

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
          <ScrollArea
            scrollbars="y"
            style={{ backgroundColor: '#F9FAFC', borderRadius: '8px' }}
            h={570}
            p={24}
          >
            <SimpleGrid spacing="xs" verticalSpacing="xl">
              {productData.map((active, index) => (
                <ProductItem key={index} isActive={active} />
              ))}
            </SimpleGrid>
          </ScrollArea>
        </Grid.Col>

        <Grid.Col span={1}>
          <Group gap={25}>
            <Container
              w={315}
              ml={'xs'}
              style={{ backgroundColor: '#F9FAFC', borderRadius: '8px' }}
            >
              <Title order={5} p={16}>
                {t('IdentityVerification.OndatoOSBanner')}
              </Title>
            </Container>
            <Group gap={8} ml="xs">
              <Title order={3}>{t('IdentityVerification.Whitelabeling')}</Title>
              <Container
                w={315}
                h={132}
                style={{ backgroundColor: '#F9FAFC', borderRadius: '8px' }}
              ></Container>
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
