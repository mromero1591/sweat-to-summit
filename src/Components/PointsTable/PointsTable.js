import React, { useState } from "react";
import UseTopic from "../useTopic/useTopic";

export default function PointsTable(props) {
  const [topic, setTopic] = useState("water");
  var dispalyUsers = props.users.map(user => {
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
  );
}
