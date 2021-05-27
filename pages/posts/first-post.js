import Head from "next/head";
import Link from "next/link";
import Alert from "../../components/alert";
import Layout from "../../components/layout";

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Alert type="success">
        <h1>Primer post del blog!</h1>
        <h2>
          <Link href="/">
            <a>Back to home!</a>
          </Link>
        </h2>
      </Alert>
    </Layout>
  );
};

export default FirstPost;
