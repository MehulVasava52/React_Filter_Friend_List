//Note: Always put json in create-react app in public folder to host the data.
export const fetchFriends = async () => {
  try {
    let resp = await fetch("/FriendData.json");
    return await resp.json();
  } catch (e) {
    console.error("couldn't fetch data", e);
  }
};
