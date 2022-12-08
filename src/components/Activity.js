import React from "react";
import './components.css';


export default function Activity({activity}) {
  // returns a li element with p tags for each activity

  // Props:
  // - activity: Object - activity object

  return (
    <li className="activity-item">
      <p>
        <b>{activity.user.name}</b> {activity.action} <b> {activity.subject.name}</b> to
        <b> {activity.object.name}</b> - {activity.created_at}
      </p>
    </li>
  );
}
