// pages/index.js

import Layout from '../components/MyLayout.js';
import Link from 'next/link';

const PostLink = props => {
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>;
};

export default function Index() {
  return (
    <Layout>
      <p>Hello Next.js</p>
    </Layout>
  );
}
