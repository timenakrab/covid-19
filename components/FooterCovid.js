import React, { memo } from 'react';
import getConfig from 'next/config';
// import PropTypes from 'prop-types';
import { FacebookShareButton, FacebookIcon, LineShareButton, LineIcon } from 'react-share';

const { publicRuntimeConfig } = getConfig();

const FooterCovid = () => {
  return (
    <div className="footer-covid text-center">
      <span>
        Develop by{' '}
        <a
          className="link-page-facebook"
          href="https://www.facebook.com/Streetboytime"
          target="_blank"
          rel="noopener noreferrer"
        >
          Streetboy
        </a>{' '}
      </span>
      <span className="share-line">
        <LineShareButton style={{ marginLeft: 5 }} url={publicRuntimeConfig.BASE_URL}>
          <LineIcon size={32} round />
        </LineShareButton>
      </span>
      <span className="share-facebook">
        <FacebookShareButton style={{ marginLeft: 5 }} url={publicRuntimeConfig.BASE_URL}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </span>
      <a
        className="link-api"
        href="https://github.com/mathdroid/covid-19-api"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="./icon/api.svg" width={32} height={32} alt="api by mathdroid" />
      </a>
    </div>
  );
};

FooterCovid.propTypes = {};

export default memo(FooterCovid);
