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
  return (
    <Tabs.Panel value="IdentityVerification" w={1042} h={734} p={24}>
      <Flex direction='column' gap={8}>
        <Group gap={4} maw={670}>
          <Title order={4}>Identity verification solutions</Title>
          <Title order={6}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Title>
        </Group>
        <Title order={4} mb='md'>
          Solutions
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
            <Container style={{ backgroundColor: '#F9FAFC', borderRadius: '8px' }}>
              <Title order={5} p={16}>
                After identification is finished the client data can be found in Ondato OS(Customer
                data platorm)
              </Title>
            </Container>
            <Group gap={8} ml='xs'>
              <Title order={3}>Whitelabeling</Title>
              <Container
                w={315}
                h={132}
                m={0}
                style={{ backgroundColor: '#F9FAFC', borderRadius: '8px' }}></Container>
              <Title order={6}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua:
              </Title>
              <Flex direction='column' gap={8}>
                <List>
                  <ListItem>Logo</ListItem>
                  <ListItem>Typography</ListItem>
                  <ListItem>UI elements</ListItem>
                  <ListItem>Illustrations</ListItem>
                </List>

                <Button size="xs" variant="default">
                  More information
                </Button>
              </Flex>
            </Group>

            <Flex direction='column' gap={8} ml='xs'>
              <Title order={4}>Examples</Title>
              <Group>
                <Button size="xs" variant="secondary">
                  Light mode
                </Button>
                <Button size="xs" variant="secondary">
                  Dark mode
                </Button>
              </Group>
            </Flex>
          </Group>
        </Grid.Col>
      </Grid>
    </Tabs.Panel>
  );
}
