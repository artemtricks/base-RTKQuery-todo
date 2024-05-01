import { Layout } from "antd";
import React from "react";
import Tasks from "../components/Tasks";

const Home = () => {
  const arr = [
    { id: 1, title: "hello title", description: "hello description" },
    { id: 2, title: "hello title", description: "hello description" },
    { id: 3, title: "hello title", description: "hello description" },
  ];

  return (
    <Layout style={{ height: "100vh", padding: 20, marginTop: 20 }}>
      <Tasks tasks={arr} />
    </Layout>
  );
};

export default Home;
