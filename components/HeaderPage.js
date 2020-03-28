import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import getConfig from 'next/config';

const Constant = require('../constant/constantWebsite');

const { publicRuntimeConfig } = getConfig();
const { seoTitle } = Constant;
const description = `${seoTitle}`;
const urlWebsite = '/';
const thumnailWebsite = `${publicRuntimeConfig.BASE_URL}/Logo-Streetboy.jpg`;

const PageHeadTagCustom = ({
  title,
  desc = description,
  url = urlWebsite,
  thumnail = thumnailWebsite,
  keywords,
}) => (
  <Head>
    <meta charSet="UTF-8" />
    <link rel="canonical" href={publicRuntimeConfig.BASE_URL + url} />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    <title>{title} | Streetboy</title>
    <link rel="icon" href={`${publicRuntimeConfig.BASE_URL}/Logo-Streetboy.jpg`} />
    {/* <link rel="manifest" href={`${publicRuntimeConfig.BASE_URL}/manifest.json`} /> */}
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.1/css/all.min.css"
    />
    <meta name="description" content={desc} />
    <meta name="keywords" content={keywords || title} />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href={`${publicRuntimeConfig.BASE_URL}/Logo-Streetboy.jpg`}
    />
    <meta property="fb:app_id" content="1876421945732975" />
    <meta property="og:locale" content="th_TH" />
    <meta property="og:locale:alternate" content="en_EN" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={`${title} | Streetboy`} />
    <meta property="og:description" content={desc} />
    <meta property="og:url" content={publicRuntimeConfig.BASE_URL + url} />
    <meta property="og:site_name" content="Streetboy" />
    <meta property="og:image" content={thumnail} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="628" />
    <link href="https://fonts.googleapis.com/css?family=Kanit&display=swap" rel="stylesheet" />
  </Head>
);

PageHeadTagCustom.defaultProps = {
  thumnail: '',
  keywords: '',
};

PageHeadTagCustom.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  thumnail: PropTypes.string,
  keywords: PropTypes.string,
};

export default PageHeadTagCustom;
