import React from "react";
import moment from "moment";

const Article = (props) => {
  const { title, snippet, date, length } = props;
  return (
    <section className="post">
      <h2>{title}</h2>
      <div className="post-info">
        <span>{moment(date).format("dddd Do, YYYY")}</span>
        <span>{length} min read</span>
      </div>
      <p>{snippet}</p>
    </section>
  );
};

export default Article;
