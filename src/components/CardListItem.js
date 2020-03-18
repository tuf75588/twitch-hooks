/** @jsx jsx */
import {css, jsx} from '@emotion/core';

// this component will handle mapping individual user data

const headingStyle = css`
  font-weight: 300;
  color: #f2f2f2;
  text-align: center;
`;

const imageStyles = css`
  max-width: 85%;
  max-height: 85%;
  object-fit: cover;
  border-radius: 5px;
`;

const miniFlexbox = css`
  padding: 0;
  margin: 0;
  font-size: 1rem;
`;

// just some ui
function ListCardItem({img, name, id, isLive, status}) {
  console.log(status);
  return (
    <div>
      <section css={miniFlexbox}>
        <h3 css={headingStyle}>{name}</h3>
        <span
          aria-label="emoji"
          alt="online or not"
          css={css`
            color: tomato;
            padding-left: 10px;
          `}
        >
          {status.online && 'Live!'}
        </span>
      </section>
      <div>
        <img css={imageStyles} src={img} alt={`Avatar for ${name}`} />
      </div>
    </div>
  );
}

export default ListCardItem;
