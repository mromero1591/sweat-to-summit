import React, { useState, useEffect, useContext } from "react";
import { Droplet, Activity, Coffee, Sunset } from "react-feather";
import { auth } from "../../firebase";

import TrackerCard from "../TrackerCard/TrackerCard";
import UserCard from "../UserCard/UserCard";
import mark from "../../assets/mark.png";
import DayTable from "../DayTable/DayTable";
import { UserContext } from "../../userContext";

export default function Dashboard(props) {
  const user = useContext(UserContext);
  console.log(user["currentUser"]);
  let days = [
    {
      date: "May 22nd",
      totalPoints: 100,
      water: 25,
      excersize: 25,
      points: [25, 25, 0, 25],
      sleep: 0,
      nutrition: 50
    },
    {
      date: "May 19th",
      totalPoints: 100,
      points: [25, 25, 0, 25],
      water: 25,
      excersize: 25,
      sleep: 0,
      nutrition: 25
    }
  ];

  return (
    <section className="container">
      <div className="container about-me">
        <h2 className="title">About Me</h2>
        <div className="container ui two column grid">
          <div className="column">
            <UserCard
              profilePic={user ? user.photoURL : mark}
              user={{ name: "Mark" }}
              center={false}
            />
          </div>
          <div className="column">
            <DayTable days={days} />
          </div>
        </div>
      </div>
      <div className="ui hidden divider" />
      <div>
        <h2 className="title">Track</h2>
        <div className="container ui stackable four column padded grid">
          <TrackerCard
            icon={<Droplet color="#1792e4" size={64} />}
            type="Water"
          />
          <TrackerCard
            icon={<Activity color="#1792e4" size={64} />}
            type="Workout"
          />
          <TrackerCard
            icon={<Sunset color="#1792e4" size={64} />}
            type="Sleep"
          />
          <TrackerCard
            icon={<Coffee color="#1792e4" size={64} />}
            type="Nutrition"
          />
        </div>
      </div>
    </section>
  );
}
