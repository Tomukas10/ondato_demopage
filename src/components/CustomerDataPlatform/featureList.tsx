import { Button, Grid, Group, Image, Title } from '@mantine/core';

export function FeatureItem(): JSX.Element {
  return (
    <Grid columns={12}>
      <Grid.Col span={4}>
        <Image h={90} w={90} radius="md" src="src/assets/bg-placeholder.jpg" />
      </Grid.Col>
      <Grid.Col span={8}>
        <Group gap={8}>
          <Title order={5}>Feature name #1</Title>
          <Group gap={12}>
            <Title order={6}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Title>
            <Group gap={8}>
              <Button>Open</Button>
              <Button variant="outline">Start Idv</Button>
            </Group>
          </Group>
        </Group>
      </Grid.Col>
    </Grid>
  );
}
