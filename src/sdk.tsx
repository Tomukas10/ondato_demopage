import { useState, useCallback } from "react";
import {
  SdkLanguage,
  load,
  SdkMode,
} from "@ondato-public/idv-sdk";

import type {
  SdkLoadResult,
  SdkOnSuccessResult,
  SdkOnFailureResult,
  SdkOnCloseResult,
} from "@ondato-public/idv-sdk";

export function useOndatoSdk(onAgeSetupId: string, language: string = "") {
  const [sdkOnAge, setSdkOnAge] = useState<SdkLoadResult | null>(null);

  const runSdk = useCallback(async () => {
    try {
      const onAge = load({ mode: SdkMode.Sandbox });
      setSdkOnAge(onAge);

      await onAge.onAge.begin({
        onAgeSetupId: onAgeSetupId.trim(),
        language: language.trim() as SdkLanguage,
        onSuccess: (props: SdkOnSuccessResult) => {
          console.log("onSuccess", props);
          alert("SDK verification success!");
        },
        onFailure: (props: SdkOnFailureResult) => {
          console.error("onFailure", props);
          alert("SDK verification failed!");
        },
        onClose: (props: SdkOnCloseResult) => {
          console.log("onClose", props);
        },
      });
    } catch (error) {
      console.error("Ondato SDK error", error);
    }
  }, [onAgeSetupId, language]);

  return { runSdk };
}