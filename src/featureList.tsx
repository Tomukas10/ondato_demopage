
import { Container, Button, Text,} from '@mantine/core';
import { Image } from '@mantine/core';

const sdkID = '6267fcf5-fe32-4235-bc77-9e0d5ee326f0';

import {
  SdkLanguage,
  load,
  SdkMode,
  version,
} from "@ondato-public/idv-sdk";

import type {
  SdkLoadResult,
  SdkOnSuccessResult,
  SdkOnFailureResult,
  SdkOnCloseResult,
} from "@ondato-public/idv-sdk";






const featureItem = () => {
  return(
    <Container h={116} w={607} style={{ padding: '0', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
      <Image src="src/bg-placeholder.jpg" h={90} w={90} style={{marginTop:'5px', borderRadius: '8px' }} />
      
      <Container h={116} w={501} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '12px', padding: '0'}}>
        
        <Container w={501} h={72} style={{ display: 'flex', flexDirection: 'column', padding: 0 }}>
          <Text style={{ fontSize: '16px', fontWeight: '600', padding:'0', margin:'0' }}>Product name #1</Text>
          <Text style={{ fontSize: '12px', fontWeight: '400', lineHeight: '16px'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
        </Container>
        
        <Container h={32} w={222} style={{gap: '8px',  display: 'flex', alignSelf: 'flex-start', margin:'0', padding:'0'}}>
          <Button h={32} w={69} style={{ backgroundColor: '#d1f6ac', color: 'black', fontSize: '12px', fontWeight: 400 }}>
            Open 
          </Button>
          <Button h={32} w={125} onClick={() => window.open('https://ondato.atlassian.net/wiki/spaces/PUB/pages/3016392748/Web+SDK+integration', '_blank')} variant="default" style={{ fontSize: '12px', fontWeight: 400, gap: '6px' }}>
            Documentation 
          </Button>
        </Container>

      </Container>
    </Container>
  );
};

export default featureItem;