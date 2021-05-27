import Link from "next/link";

const FirstPost = () => {
  return (
    <>
      <h1>Primer post del blog!</h1>
      <h2>
        <Link href="/">
          <a>Back to home!</a>
        </Link>
      </h2>
    </>
  );
};

export default FirstPost;
