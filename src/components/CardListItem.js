/** @jsx jsx */
import {css, jsx} from '@emotion/core';

// this component will handle mapping individual user data

const headingStyle = css`
  font-weight: 300;
  color: #f2f2f2;
  margin-bottom: 10px;
`;

const imageStyles = css`
  max-width: 85%;
  max-height: 85%;
  object-fit: cover;
  border-radius: 5px;
`;

function ListCardItem({img, name, id}) {
  return (
    <div>
      <h2 css={headingStyle}>{name}</h2>
      <div>
        <img css={imageStyles} src={img} alt={`Avatar for ${name}`} />
      </div>
    </div>
  );
}

export default ListCardItem;
