import React from "react";
import UserCard from "../UserCard/UserCard";
import mark from "../../assets/mark.png";
import PointsTable from "../PointsTable/PointsTable";

export default function Leaderboard() {
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
  return (
    <div className="container ui stackable two column padded grid">
      <div className="column">
        <h2 className="title">Current Leader</h2>
        <UserCard user={users[0]} profilePic={mark} center={true} />
      </div>

      <div className="column container">
        <h2 className="title">Leader Board</h2>
        <PointsTable users={users} />
      </div>
    </div>
  );
}
