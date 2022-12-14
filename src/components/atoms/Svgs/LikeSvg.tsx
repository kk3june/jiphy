import { css } from '@emotion/react';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LikeSvg = ({ size }: any) => {
  return (
    <FontAwesomeIcon
      css={css`
        display: inline-block;
      `}
      icon={faHeart}
      size={size}
    />
  );
};

export default LikeSvg;
