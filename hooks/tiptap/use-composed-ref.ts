"use client";

import { useCallback, useRef } from "react";

// basically Exclude<React.ClassAttributes<T>["ref"], string>
type UserRef<T> = ((instance: T | null) => void) | React.RefObject<T | null> | null | undefined;

const setRefValue = <T>(
  ref: React.RefObject<T | null> | { current: T | null },
  value: T | null
) => {
  (ref as { current: T | null }).current = value;
};

const updateRef = <T>(ref: NonNullable<UserRef<T>>, value: T | null) => {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref && typeof ref === "object" && "current" in ref) {
    setRefValue(ref, value);
  }
};

export const useComposedRef = <T extends HTMLElement>(
  libRef: React.RefObject<T | null>,
  userRef: UserRef<T>
) => {
  const prevUserRef = useRef<UserRef<T>>(null);

  return useCallback(
    (instance: T | null) => {
      if (libRef && "current" in libRef) {
        setRefValue(libRef, instance);
      }

      if (prevUserRef.current) {
        updateRef(prevUserRef.current, null);
      }

      prevUserRef.current = userRef;

      if (userRef) {
        updateRef(userRef, instance);
      }
    },
    [libRef, userRef]
  );
};

export default useComposedRef;
