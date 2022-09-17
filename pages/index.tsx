import { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/content");
  }, []);

  return <></>;
};

export default Home;
