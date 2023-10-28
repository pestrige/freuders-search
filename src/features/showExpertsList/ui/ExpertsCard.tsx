import { ReactElement, memo, useCallback } from "react";

import { Expert } from "src/entities/expert";
import { getRoute } from "src/shared/config";
import { Rating } from "src/shared/ui";
import { NoPhotoMale, NoPhotoFemale, NoPhoto } from "src/shared/assets";

import {
  Age,
  AvatarWrap,
  Card,
  CardInner,
  CardLink,
  Image,
  MoreSubject,
  Name,
  NameWrap,
  Online,
  Subject,
  SubjectsWrap,
} from "./ExpertsCard.styled.ts";

interface Props {
  expert: Expert;
}

export const ExpertsCard = memo(function ExpertsCard({ expert }: Props): ReactElement {
  const {
    userId,
    photoUrl,
    rating,
    name,
    age,
    onlineStatus,
    defaultSubjectName,
    subjectsCount,
    sex,
  } = expert;

  const renderAvatar = useCallback(() => {
    if (photoUrl) {
      return <Image src={photoUrl} width={368} height={368} />;
    }

    switch (sex) {
      case 1:
        return <NoPhotoMale width="100%" height="100%" />;
      case 2:
        return <NoPhotoFemale width="100%" height="100%" />;
      default:
        return <NoPhoto width="100%" height="100%" />;
    }
  }, [photoUrl, sex]);

  return (
    <Card>
      <CardLink to={getRoute.expert(userId)}>
        <CardInner>
          <AvatarWrap>{renderAvatar()}</AvatarWrap>
          <Rating rating={rating} />
        </CardInner>

        <NameWrap>
          <Name>{`${name},\u00A0`}</Name>
          <Age>{age}</Age>
          {!!onlineStatus && <Online />}
        </NameWrap>

        <SubjectsWrap>
          <Subject>{defaultSubjectName}</Subject>
          {subjectsCount > 1 && <MoreSubject>{`\u00A0 и ище ${subjectsCount} темы`}</MoreSubject>}
        </SubjectsWrap>
      </CardLink>
    </Card>
  );
});
