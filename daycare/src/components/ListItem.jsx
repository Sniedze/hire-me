import React, { useState } from "react";
import { Button } from "reactstrap";
import { credentials } from "../config";
import { checkinChild, checkoutChild } from "../helpers/utils";

const ListItem = ({ child, index }) => {
  const { firstName, middleName, lastName } = child.name;
  const { childId, image, checkedIn, pickupTime } = child;
  const { accessToken } = credentials;

  const [pickup, setPickup] = useState("");
  const [isCheckedIn, setCheckedIn] = useState(checkedIn);

  const handleCheckin = (event) => {
    event.preventDefault();
    checkinChild(childId, accessToken, pickup, isCheckedIn, setCheckedIn);
  };
  const handleCheckout = (event) => {
    event.preventDefault();
    checkoutChild(childId, accessToken, isCheckedIn, setCheckedIn);
  };

  return (
    <tr>
      <th scope="row">{index}</th>
      <td>
        <img src={image.small} alt={firstName} />
      </td>
      <td>
        {firstName} {middleName} {lastName}
      </td>
      <td>
        {isCheckedIn && pickupTime ? (
          pickupTime.slice(11, 16)
        ) : (
          <input
            id={`pickup ${index}`}
            placeholder="Enter hh:mm"
            onChange={(event) => setPickup(event.target.value)}
            required
          />
        )}
      </td>
      <td>
        <Button
          type="submit"
          onClick={isCheckedIn ? handleCheckout : handleCheckin}
          color={isCheckedIn ? "secondary" : "success"}
        >
          {isCheckedIn ? "Check out" : "Check in"}
        </Button>
      </td>
    </tr>
  );
};

export default ListItem;
