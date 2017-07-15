import React from 'react';
import Head from 'next/head';

const textColor = '#333';

class Header extends React.Component {

  render() {
    return (
      <div>
        <Head>
          <title>Don't Die</title>
        </Head>
        <style jsx global>{`
          body {
            background: white;
            color: ${textColor};
            margin: 1em;
            text-transform: lowercase;
            font: normal .9em/1.2 Georgia, serif;
          }
        `}</style>
      </div>
    );
  }
}

export default Header;
