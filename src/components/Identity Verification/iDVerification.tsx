import {
  Button,
  Container,
  Grid,
  Group,
  List,
  ListItem,
  ScrollArea,
  SimpleGrid,
  Tabs,
  Text,
} from '@mantine/core';
import ProductItem from '../productList';

function idVerification(): JSX.Element {
  return (
    <Tabs.Panel value="idVerification" w={1042} h={734} style={{ padding: '12px 24px 12px 24px' }}>
      <Container w={677} p={0} m={0}>
        <Text style={{fontSize: '20px',
                    fontWeight: '600',
                    fontStyle: 'SemiBold',
                    fontFamily: 'Inter Variable',
                    letterSpacing: '0%',
                    lineHeight: '100%',}}>
          Identity verification solutions
        </Text>
        <Text style={{fontSize: '12px',
                    fontWeight: '400',
                    fontStyle: 'Regular',
                    fontFamily: 'Inter Variable',
                    letterSpacing: '0%',
                    lineHeight: '100%',}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
      </Container>

      <Grid w={994} h={616} columns={3}>
        <Grid.Col span={2}>
          <Text
            style={{
              fontSize: '18px',
              fontWeight: 600,
              fontFamily: 'Inter Variable, sans-serif',
              lineHeight: 1,
              marginTop: '12px',
              fontStyle: 'Semi Bold',
            }}
          >
            Solutions
          </Text>
          <ScrollArea h={616} w={655}>
            <SimpleGrid spacing="xs" verticalSpacing="md">
              <ProductItem isActive />
              <ProductItem isActive={false} />
              <ProductItem isActive={false} />
              <ProductItem isActive={false} />
              <ProductItem isActive={false} />
            </SimpleGrid>
          </ScrollArea>
        </Grid.Col>

        <Grid.Col span={1}>
          <Container h={563} w={315} p={0} style={{ borderRadius: '8px' }}>
            <Text
              style={{
                fontSize: '14px',
                fontWeight: 400,
                padding: '16px',
                backgroundColor: '#E6EBF0',
                borderRadius: '4px',
                marginTop: '33px',
                marginBottom: '32px',
              }}
            >
              After identification is finished the client data can be found in Ondato OS(Customer
              data platorm)
            </Text>

            <Text
              style={{
                fontSize: '18px',
                fontWeight: 600,
                fontFamily: 'Inter Variable, sans-serif',
                lineHeight: 1,
                marginBottom: '16px',
                marginTop: '0',
              }}
            >
              Whitelabeling
            </Text>

            <Container
              h={132}
              w={315}
              style={{ background: '#E6EBF0', marginBottom: '16px', borderRadius: '8px' }}
            />

            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua:
            </Text>

            <List>
              <ListItem>Logo</ListItem>
              <ListItem>Typography</ListItem>
              <ListItem>UI elements</ListItem>
              <ListItem>Illustrations</ListItem>
            </List>

            <Button size="xs" variant="default" style={{ marginBottom: '24px', marginTop: '12px' }}>
              More information
            </Button>

            <Text style={{ marginBottom: '8px' }}>Examples</Text>

            <Group>
              <Button size="xs" variant="outline" style={{ background: '#E6EBF0' }}>
                Light mode
              </Button>
              <Button size="xs" variant="outline" style={{ background: '#E6EBF0' }}>
                Dark mode
              </Button>
            </Group>
          </Container>
        </Grid.Col>
      </Grid>
    </Tabs.Panel>
  );
}

export default idVerification;
