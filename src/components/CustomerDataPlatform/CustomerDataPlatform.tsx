import { Container, Button, Tabs, Text, Flex, Grid, ScrollArea, SimpleGrid, Image } from '@mantine/core';
import { theme, utilityClasses } from "../theme";
import featureItem from '@/featureList';

function customerDataPlatform(): JSX.Element {
    return(
        <Tabs.Panel value="customerDataPlatform" w={1042} h={734} style={{ padding: '12px 24px 12px 24px' }}>
          <Flex align="center">
            <Container w={677} h={58} p={0} m={0}>
              <Text style={utilityClasses.sectionTitle}>Ondao OS - Customer data platform</Text>
              <Text style={utilityClasses.bodyText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Text>
            </Container>
            
            <Button 
              w={222} 
              h={41} 
              style={{ marginLeft: '89px', marginTop: '28px',...utilityClasses.dataButton,

            }}
            >
              Check out identification data
            </Button>
          </Flex>

          <Grid w={994} h={616} columns={5} mt="md" p={0} style={{ rowGap: '40px', columnGap: '40px' }}>
            <Grid.Col span={3}>
              <Image 
                src="./src/d456eaab86213f569834005ce2e9ac77b473b657.png" 
                style={{ marginTop: '30px' }}
              />
            </Grid.Col>
            
            <Grid.Col span={2} style={{ borderRadius: '8px', padding: '24px' }}>
              <Text style={utilityClasses.sectionSubtitle}>Feature list</Text>
              
              <Grid w={371} h={582}>
                <Grid.Col span={3}>                          
                  <ScrollArea h={582} w={371} style={utilityClasses.contentCard}>
                    <SimpleGrid spacing="xs" verticalSpacing="md">
                      {featureItem()}
                      {featureItem()}
                      {featureItem()}
                      {featureItem()}
                      {featureItem()}
                    </SimpleGrid>
                  </ScrollArea>
                </Grid.Col>
              </Grid>
            </Grid.Col>               
          </Grid>
        </Tabs.Panel>
    );
};

export default customerDataPlatform;