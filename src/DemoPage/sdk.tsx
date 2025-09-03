import { useCallback } from 'react';
import { load, SdkLanguage, SdkMode } from '@ondato-public/idv-sdk';

export interface VerificationResult {
  id: string;
}

export function useOndatoSdk(
  onAgeSetupId: string,
  language: string = '',
  onSuccessOpen: (result: VerificationResult) => void,
  onFailureOpen: (result: VerificationResult) => void,
  onClosedOpen: (result: VerificationResult) => void
) {
  const runSdk = useCallback(async () => {
    try {
      const onAge = load({ mode: SdkMode.Sandbox });

      await onAge.onAge.begin({
        onAgeSetupId: onAgeSetupId.trim(),
        language: language.trim() as SdkLanguage,
        onSuccess: (result: VerificationResult) => {
          onSuccessOpen(result);
        },
        onFailure: (result: VerificationResult) => {
          onFailureOpen(result);
        },
        onClose: (result: VerificationResult) => {
          onClosedOpen(result);
        },
        openModal: () => {},
      });
    } catch (error) {
      console.error('Ondato SDK error', error);
      onFailureOpen({ id: 'error' });
    }
  }, [onAgeSetupId, language, onSuccessOpen, onFailureOpen, onClosedOpen]);

  return { runSdk };
}
