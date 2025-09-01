import { useTranslation } from 'react-i18next';
import {
  Button,
  Flex,
  Grid,
  Group,
  Image,
  ScrollArea,
  SimpleGrid,
  Tabs,
  Title,
} from '@mantine/core';
import { FeatureItem } from './FeatureList';

const features = Array(5).fill(null);

export function CustomerDataPlatform(): JSX.Element {
  const { t } = useTranslation();

  return (
    <Tabs.Panel value="customerDataPlatform" w={1042} h={734} p={24}>
      <Flex align="center" direction="row" gap={89}>
        <Group gap={4} w={677}>
          <Title order={4}>{t('CustomerDataPlatform.Title')}</Title>
          <Title order={6}>{t('CustomerDataPlatform.Description')}</Title>
        </Group>
        <Button ml="xs">
          <Title order={6}>{t('Button.CheckOutIdData')}</Title>
        </Button>
      </Flex>

      <Grid columns={5} mt="md">
        <Grid.Col span={3} mt="xl">
          <Image src="./src/assets/d456eaab86213f569834005ce2e9ac77b473b657.png" />
        </Grid.Col>

        <Grid.Col span={2}>
          <Group gap={12}>
            <Title order={4}>{t('FeatureList.Title')}</Title>
            <ScrollArea
              scrollbars="y"
              p={24}
              h={582}
              w={371}
              style={{ backgroundColor: '#F9FAFC', borderRadius: '8px' }}
            >
              <SimpleGrid spacing="xs" verticalSpacing="md">
                {features.map((_, index) => (
                  <FeatureItem key={index} />
                ))}
              </SimpleGrid>
            </ScrollArea>
          </Group>
        </Grid.Col>
      </Grid>
    </Tabs.Panel>
  );
}
