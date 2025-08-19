import { useCallback } from 'react';
import { modals } from '@mantine/modals';
import {
  load,
  SdkLanguage,
  SdkMode,
} from '@ondato-public/idv-sdk';

export function useOndatoSdk(
  onAgeSetupId: string,
  language: string = '',
  onSuccessOpen: () => void,
  onFailureOpen: () => void,
  onClosedOpen: () => void
) {

  const runSdk = useCallback(async () => {
    try {
      const onAge = load({ mode: SdkMode.Sandbox });
      onAge;

      await onAge.onAge.begin({
        onAgeSetupId: onAgeSetupId.trim(),
        language: language.trim() as SdkLanguage,
        onSuccess: (result) => {
          modals.open({
            title: 'Verification Successful',
            children: (
              <p>Your verification {result.id} was successful</p>
            ),
          });
        },
        onFailure: (result) => {
          modals.open({
            title: 'Verification Failed',
            children: (
              <p>Your verification {result.id} was unsuccessful</p>
            ),
          });
        },
        onClose: (result) => {
          modals.open({
            title: 'Verification Closed',
            children: (
              <p>Your verification {result.id} was closed</p>
            ),
          });
        },
        openModal: () => {},
      });
    } catch (error) {
      console.error('Ondato SDK error', error);
    }
  }, [onAgeSetupId, language]);

  return { runSdk };
}