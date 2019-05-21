import React, { useState } from "react";
import UseTopic from "../useTopic/useTopic";

export default function Leaderboard() {
  const [topic, setTopic] = useState("water");

  let users = [
    {
      name: "Mark",
      totalPoints: 100,
      water: 25,
      excersize: 25,
      sleep: 0,
      nutrition: 50
    },
    {
      name: "Jolene",
      totalPoints: 200,
      water: 25,
      excersize: 25,
      sleep: 100,
      nutrition: 50
    },
    {
      name: "Harry",
      totalPoints: 100,
      water: 25,
      excersize: 25,
      sleep: 0,
      nutrition: 50
    },
    {
      name: "Dean",
      totalPoints: 200,
      water: 25,
      excersize: 25,
      sleep: 100,
      nutrition: 50
    }
  ];

  var dispalyUsers = users.map(user => {
    return (
      <tr key={user.name}>
        <td>
          <h4 className="ui image header">
            {/* <img src={mark} className="ui mini rounded image" /> */}
            {user.name}
          </h4>
        </td>
        <td>{user.totalPoints}</td>
        <td>{user[topic]}</td>
      </tr>
    );
  });

  return (
    <div className="container">
      <table className="ui very basic collapsing celled table unstackable">
        <thead>
          <tr>
            <th className="four wide">User</th>
            <th className="four wide">Total Points</th>
            <th className="four wide">
              <UseTopic
                topics={["water", "excersize", "nutrition", "sleep"]}
                setTopic={setTopic}
              />
            </th>
          </tr>
        </thead>
        <tbody>{dispalyUsers}</tbody>
      </table>
    </div>
  );
}
