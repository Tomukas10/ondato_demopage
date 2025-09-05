import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Grid, Group, Image, Modal, Title } from '@mantine/core';

import { useDisclosure } from '@mantine/hooks';
import { useOndatoSdk, VerificationResult } from '@/DemoPage/sdk';

const sdkID = '6267fcf5-fe32-4235-bc77-9e0d5ee326f0';

interface ProductItemProps {
  isActive: boolean;
}

export function ProductItem({ isActive }: ProductItemProps): JSX.Element {
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

  const handleRunSdk = useCallback(() => {
    if (isActive) {
      runSdk();
    }
  }, [isActive, runSdk]);

  const handleOpenLink = () => {
    if (isActive) {
      window.open(
        'https://ondato.atlassian.net/wiki/spaces/PUB/pages/3016392748/Web+SDK+integration',
        '_blank'
      );
    }
  };

  return (
    <>
      <Modal opened={successOpened} onClose={closeSuccess} title="Verification Successful">
        <Title order={4}>
          Your verification {verificationResult?.id} was completed successfully!
        </Title>
      </Modal>

      <Modal opened={failureOpened} onClose={closeFailure} title="Verification Failed">
        <Title order={4}>
          Your verification {verificationResult?.id} failed. Please try again.
        </Title>
      </Modal>

      <Modal opened={closedOpened} onClose={closeClosed} title="Verification Closed">
        <Title order={4}>
          You closed the verification {verificationResult?.id} before completing it.
        </Title>
      </Modal>

      <Grid columns={12}>
        <Grid.Col span={2}>
          <Image h={90} w={90} radius="md" src="src/assets/ProductPlaceholder.jpg" />
        </Grid.Col>
        <Grid.Col span={10}>
          <Group gap={8}>
            <Title order={5}>{t('Product.Name')}</Title>
            <Group gap={12}>
              <Title order={6}>{t('Product.Description')}</Title>
              <Group gap={8}>
                <Button onClick={handleRunSdk}>{t('Button.OnAge')}</Button>
                <Button onClick={handleOpenLink} variant="default">
                  {t('Button.StartIdv')}
                </Button>
              </Group>
            </Group>
          </Group>
        </Grid.Col>
      </Grid>
    </>
  );
}
