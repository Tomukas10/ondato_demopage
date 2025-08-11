import { memo, ReactElement, useCallback, useState } from "react";

import {
  AvailableLanguages,
  load,
  SdkMode,
  version,
} from "../../../build/index";

import type {
  SdkLoadResult,
  SdkOnSuccessResult,
  SdkOnFailureResult,
  SdkOnCloseResult,
} from "../../../build/index";

export const AppNew = memo((): ReactElement => {
  const [onAgeSetupId, setOnAgeSetupId] = useState("");

  const [language, setLanguage] = useState("");

  const [sdkOnAge, setSdkOnAge] = useState<SdkLoadResult | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const loadHandlerOnage = useCallback(() => {
    try {
      const onAge = load({
        mode: SdkMode.Sandbox,
      });
      console.log("onAge", onAge);
      setSdkOnAge(onAge);
      setIsLoaded(true);
    } catch (error) {
      console.warn("OnageSdkLoadFailure", error);
      alert(`OnageSdkLoadFailure, ${error}`);
    }
  }, []);

  const beginHandlerOnAge = useCallback(async () => {
    try {
      if (sdkOnAge?.onAge.begin) {
        console.log("sdkOnAge.onAge", sdkOnAge.onAge);
        await sdkOnAge.onAge.begin({
          onAgeSetupId: onAgeSetupId.trim(),

          language: language.trim() as AvailableLanguages,
          onSuccess: (props: SdkOnSuccessResult) => {
            console.log("onSuccess", { props });
            alert(`onSuccess, OnAge: ${props}`);
          },
          onFailure: (props: SdkOnFailureResult) => {
            console.log("onFailure", props);
            alert(`onFailure, OnAge: ${props}, reason: ${props}}`);
          },
          onClose: (props: SdkOnCloseResult) => {
            console.log("onClose ", props.id);
          },
        });
      }
    } catch (error) {
      console.warn("OnAgeSdkBeginFailure", error);
      alert(`OnAgeSdkBeginFailure, ${error}`);
    }
  }, [sdkOnAge?.onAge, onAgeSetupId, language]);

  const versionHandler = useCallback(() => {
    alert(version());
  }, []);

  const endHandlerOnAge = useCallback(() => {
    sdkOnAge?.onAge.end();
  }, [sdkOnAge]);

  return (
    <>
      <button type="button" disabled={isLoaded} onClick={loadHandlerOnage}>
        Load OnAge
      </button>
      <button type="button" onClick={versionHandler}>
        SDK version
      </button>
      <button type="button" disabled={!isLoaded} onClick={beginHandlerOnAge}>
        Begin On age
      </button>
      <button
        type="button"
        className="end-action"
        onClick={endHandlerOnAge}
        disabled={!isLoaded}>
        X
      </button>
      <button
        type="button"
        className="end-action"
        onClick={endHandlerOnAge}
        disabled={!isLoaded}>
        X
      </button>
      <div className="input-group">
        <input
          type="text"
          placeholder="OnAge setup Id"
          value={onAgeSetupId}
          onChange={(event) => setOnAgeSetupId(event.target.value)}
        />
        <input
          type="text"
          className="short-input"
          placeholder="en-GB (optional)"
          value={language}
          onChange={(event) => setLanguage(event.target.value)}
        />
      </div>
    </>
  );
});
