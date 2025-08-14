import { useCallback } from 'react';
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
        onSuccess: () => {
          onSuccessOpen();
        },
        onFailure: (prop) => {
          console.log("helllo", prop)
          onFailureOpen();
        },
        onClose: () => {
          onClosedOpen();
        },
      });
    } catch (error) {
      console.error('Ondato SDK error', error);
    }
  }, [onAgeSetupId, language]);

  return { runSdk };
}
