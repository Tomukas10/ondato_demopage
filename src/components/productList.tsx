import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Container, Image, Modal, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useOndatoSdk, VerificationResult } from '@/sdk';

const sdkID = '6267fcf5-fe32-4235-bc77-9e0d5ee326f0';

const ProductItem = ({ isActive }: { isActive: boolean }) => {
  const { t } = useTranslation();
  const [successOpened, { open: openSuccess, close: closeSuccess }] = useDisclosure(false);
  const [failureOpened, { open: openFailure, close: closeFailure }] = useDisclosure(false);
  const [closedOpened, { open: openClosed, close: closeClosed }] = useDisclosure(false);

  const [verificationResult, setVerificationResult] = useState<VerificationResult | null>(null);

  const { runSdk } = useOndatoSdk(
    sdkID,
    'en-GB',
    (result: VerificationResult) => {
      setVerificationResult(result);
      openSuccess();
    },
    (result: VerificationResult) => {
      setVerificationResult(result);
      openFailure();
    },
    (result: VerificationResult) => {
      setVerificationResult(result);
      openClosed();
    }
  );

  const handleRunSdk = () => {
    if (!isActive) {
      return;
    }
    runSdk();
  };

  const handleOpenLink = () => {
    if (!isActive) {
      return;
    }
    window.open(
      'https://ondato.atlassian.net/wiki/spaces/PUB/pages/3016392748/Web+SDK+integration',
      '_blank'
    );
  };

  return (
    <>
      <Modal opened={successOpened} onClose={closeSuccess} title="Verification Successful">
        <Text>Your verification {verificationResult?.id} was completed successfully!</Text>
      </Modal>

      <Modal opened={failureOpened} onClose={closeFailure} title="Verification Failed">
        <Text>Your verification {verificationResult?.id} failed. Please try again.</Text>
      </Modal>

      <Modal opened={closedOpened} onClose={closeClosed} title="Verification Closed">
        <Text>You closed the verification {verificationResult?.id} before completing it.</Text>
      </Modal>

      <Container
        h={116}
        w={607}
        style={{ padding: '0', display: 'flex', gap: '16px', alignItems: 'flex-start' }}
      >
        <Image
          src="src/assets/bg-placeholder.jpg"
          h={90}
          w={90}
          style={{ marginTop: '5px', borderRadius: '8px' }}
        />

        <Container
          h={116}
          w={501}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '12px',
            padding: '0',
          }}
        >
          <Container
            w={501}
            h={72}
            style={{ display: 'flex', flexDirection: 'column', padding: 0 }}
          >
            <Text style={{ fontSize: '16px', fontWeight: '600', padding: '0', margin: '0' }}>
              Product name #1
            </Text>
            <Text style={{ fontSize: '12px', fontWeight: '400', lineHeight: '16px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Container>

          <Container
            h={32}
            w={222}
            style={{
              gap: '8px',
              display: 'flex',
              alignSelf: 'flex-start',
              margin: '0',
              padding: '0',
            }}
          >
            <Button
              h={32}
              w={89}
              onClick={handleRunSdk}
              style={{
                color: 'black',
                fontSize: '12px',
                fontWeight: 400,
                padding: '0',
              }}
            >
              {t('homepage.OnAgeButton')}
            </Button>
            <Button
              h={32}
              w={125}
              onClick={handleOpenLink}
              variant="default"
              style={{ fontSize: '12px', fontWeight: 400, gap: '6px' }}
            >
              Start Idv
            </Button>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default ProductItem;
