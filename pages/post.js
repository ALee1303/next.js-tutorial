import { withRouter } from 'next/router';
import Layout from '../components/MyLayout.js';

const Page = withRouter(props => (
  <Layout>
    <h1>{props.router.query.id}</h1>
    <p>This is the blog post content.</p>
  </Layout>
));

export default Page;
