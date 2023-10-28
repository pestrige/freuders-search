import { useEffect, useRef } from "react";

import { useAppDispatch } from "src/shared/hooks";
import { getSubjects } from "src/entities/expert";
import { initializeExperts } from "src/pages/ExpertsSearch/model/services/initializeExperts.ts";
import { useSearchParams } from "react-router-dom";

export const useInitialFilters = () => {
  const isFirst = useRef(true);
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (!isFirst.current) {
      return;
    }

    isFirst.current = false;
    dispatch(initializeExperts(searchParams));
    dispatch(getSubjects());
  }, [searchParams, dispatch]);
};
