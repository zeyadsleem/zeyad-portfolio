import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Zeyad Sleem | Dev</title>
        <html lang={lang} />
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="Full, Stack, Fullstack, Web, Front, End, FrontEnd, Software, Developer, Engineer, Programmer, React, Javascript, Node, Portfolio"
        />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta property="og:title" content="Zeyad Sleem | Dev" />
        <meta property="og:description" content="Full Stack Software Mobile and Web Developer" />
        <meta property="og:url" content="https://" />
      </Helmet>
      <App />
    </>
  );
};
