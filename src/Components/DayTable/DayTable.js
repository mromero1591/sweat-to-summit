import React, { useState, useEffect } from "react";
import UseTopic from "../useTopic/useTopic";

export default function PointsTable(props) {
  const [topic, setTopic] = useState("water");
  const [topics, setTopics] = useState([
    "water",
    "excersize",
    "nutrition",
    "sleep"
  ]);
  var windowWidth = useWindowWidth();

  var dispalydays = props.days.map(day => {
    return (
      <tr key={day.date}>
        <td>
          <h4 className="ui image header">
            {/* <img src={mark} className="ui mini rounded image" /> */}
            {day.date}
          </h4>
        </td>
        <td>{day.totalPoints}</td>
        {windowWidth <= 768 && <td>{day[topic]}</td>}
        {windowWidth > 768 &&
          day.points.map((point, index) => {
            return <td key={index}>{point}</td>;
          })}
      </tr>
    );
  });
  return (
    <table className="ui very basic collapsing celled table unstackable">
      <thead>
        <tr>
          <th className="four wide">days</th>
          <th className="four wide">Total Points</th>
          {windowWidth <= 768 && (
            <th className="four wide">
              <UseTopic topics={topics} setTopic={setTopic} />
            </th>
          )}
          {windowWidth > 768 &&
            topics.map(topic => {
              return <th key={topic}>{topic}</th>;
            })}
        </tr>
      </thead>
      <tbody>{dispalydays}</tbody>
    </table>
  );
}

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return width;
}
