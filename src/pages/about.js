import * as React from 'react';
import Layout from '../components/layout';

const AboutPage = () => {
  return (
    <Layout pageTitle="About Rasmus">
      <p>Hi there! This is just an introduction to me...</p>
    </Layout>
  );
};

export const Head = () => <title>About Rasmus</title>;

export default AboutPage;