import React, { useState } from "react";
import { Button, FormGroup, Label, Input } from "reactstrap";
import { credentials } from "../config";
import { checkinChild, checkoutChild } from "../helpers/utils";

const ListItem = ({ child, index }) => {
  const { firstName, middleName, lastName } = child.name;
  let { childId, image, checkedIn, pickupTime } = child;
  const { accessToken } = credentials;

  //Checkout endpoint does not delete the pickupTime, that`s why I have to set it to emty string.
  if (checkedIn === false) pickupTime = "";

  const [pickup, setPickup] = useState("");
  const [message, setMessage] = useState("");
  const [isCheckedIn, setCheckedIn] = useState(checkedIn);

  const handleCheckin = (event) => {
    event.preventDefault();
    checkinChild(
      childId,
      accessToken,
      pickup,
      isCheckedIn,
      setCheckedIn,
      setMessage,
      setPickup
    );
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
        ) : isCheckedIn && pickup ? (
          pickup
        ) : (
          <FormGroup>
            <Label for={`pickup ${index}`}>Enter pickup time</Label>
            <Input
              type="time"
              name="pickup"
              id={`pickup ${index}`}
              placeholder="with a placeholder"
              onChange={(event) => setPickup(event.target.value)}
              required
            />
            {message && !isCheckedIn && <h6>{message}</h6>}
          </FormGroup>
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
