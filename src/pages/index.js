import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>This website is made with Gatsby.</p>
      <StaticImage
        alt="My alt text."
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
      <StaticImage
        alt="This is a local image"
        src="../images/rachel-coyne-unsplash.jpeg"
      />
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;