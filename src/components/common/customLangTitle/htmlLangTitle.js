import Head from "next/head";

/**
 * @param {{title:String}} props
 * @returns
 */
const HtmlLangTitle = ({ title, description }) => {
  return (
    <Head>
      <meta key="description" name="description" content={description} />
      <title>{title}</title>
    </Head>
  );
};

export default HtmlLangTitle;
