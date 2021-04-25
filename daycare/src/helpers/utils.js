const axios = require("axios");

export const getAllChildren = async (credentials, setChildrenData) => {
  const { accessToken, groupId, institutionId } = credentials;

  try {
    const response = await axios.get(
      `https://tryfamly.co/api/daycare/tablet/group?accessToken=${accessToken}&groupId=${groupId}&institutionId=${institutionId}`
    );
    await setChildrenData(response.data.children);
    return response.data.children;
  } catch (error) {
    console.log(error);
  }
};

export const checkinChild = async (
  childId,
  accessToken,
  pickup,
  isCheckedIn,
  setCheckedIn
) => {
  const data = {
    accessToken,
    pickupTime: pickup,
  };
  try {
    const response = await axios.post(
      `https://tryfamly.co/api/v2/children/${childId}/checkins`,
      data
    );
    console.log(response);
    if (response.status === 200) setCheckedIn(!isCheckedIn);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const checkoutChild = async (
  childId,
  accessToken,
  isCheckedIn,
  setCheckedIn
) => {
  const data = {
    accessToken,
  };
  try {
    const response = await axios.post(
      `https://tryfamly.co/api/v2/children/${childId}/checkout`,
      data
    );
    console.log(response);
    if (response.status === 200) setCheckedIn(!isCheckedIn);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
