import React, { useEffect, useState } from "react";
import FeedComponent from "../components/FeedComponent";
import { feedsData } from "../util/FeedsData";

const Feeds = () => {
  const [dataFeeds, setDataFeeds] = useState([]);

  useEffect(() => {
    const fetchFeeds = () => {
      setDataFeeds(() => feedsData);
    };

    fetchFeeds();
  }, []);
  const data =
    dataFeeds.length > 0 ? (
      dataFeeds.map(({ id, title, body }) => (
        <FeedComponent id={id} title={title} body={body} key={id} />
      ))
    ) : (
      <div>
        <p>nothing was found</p>
      </div>
    );
  return (
    <main
      className="container p2 w-100 d-flex"
      style={{
        height: "90vh",
        flexDirection: "column",
      }}
    >
      {data}
    </main>
  );
};

export default Feeds;
