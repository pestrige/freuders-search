import { ReactElement, memo, useCallback } from "react";

import {
  getExperts,
  useExpertsList,
  useIsExpertsEmpty,
  useIsExpertsLoading,
  useIsExpertsMore,
} from "src/entities/expert";
import { useAppDispatch } from "src/shared/hooks";
import { Button } from "src/shared/ui";

import { ButtonWrap, List } from "./ExpertsList.styled.ts";
import { ExpertsCard } from "./ExpertsCard.tsx";
import { ExpertsEmptyList } from "./ExpertsEmptyList.tsx";

export const ExpertsList = memo(function ExpertsList(): ReactElement {
  const dispatch = useAppDispatch();
  const experts = useExpertsList();
  const isLoading = useIsExpertsLoading();
  const isMoreShow = useIsExpertsMore();
  const isEmpty = useIsExpertsEmpty();

  const handleShowMoreClick = useCallback(() => {
    dispatch(getExperts(true));
  }, [dispatch]);

  if (isEmpty) {
    return <ExpertsEmptyList />;
  }

  // TODO: add virtualized list
  return (
    <section>
      <List>
        {experts.map((expert) => {
          return <ExpertsCard key={expert.userId} expert={expert} />;
        })}
      </List>

      {isMoreShow && (
        <ButtonWrap>
          <Button loading={isLoading} big={true} fullWidth={false} onClick={handleShowMoreClick}>
            Показать еще
          </Button>
        </ButtonWrap>
      )}
    </section>
  );
});
