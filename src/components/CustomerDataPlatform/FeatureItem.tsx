import { useTranslation } from 'react-i18next';
import { Button, Grid, Group, Image, Title } from '@mantine/core';

export function FeatureItem(): JSX.Element {
  const { t } = useTranslation();

  return (
    <Grid columns={12}>
      <Grid.Col span={4}>
        <Image h={90} w={90} radius="md" src="src/assets/ProductPlaceholder.jpg" />
      </Grid.Col>
      <Grid.Col span={8}>
        <Group gap={8}>
          <Title order={5}>{t('FeatureList.Name')}</Title>
          <Group gap={12}>
            <Title order={6}>{t('FeatureList.Description')}</Title>
            <Group gap={8}>
              <Button>{t('Button.Open')}</Button>
              <Button variant="outline">{t('Button.StartIdv')}</Button>
            </Group>
          </Group>
        </Group>
      </Grid.Col>
    </Grid>
  );
}
