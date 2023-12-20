import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const AboutPage = () => {
  return (
    <Layout pageTitle="About Rasmus">
      <p>Hi there! This is just an introduction to me...</p>
    </Layout>
  );
};

export const Head = () => <Seo title="About Rasmus" />;

export default AboutPage;