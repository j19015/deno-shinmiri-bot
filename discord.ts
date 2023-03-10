import axios from "npm:axios@1.2.0";

const discord = async (
  webhookUrl: string,
  text: string,
  username: string,
  avatar_url: string,
) => {
  const res = await axios.post(
    webhookUrl,
    {
      content: text,
      username: username,
      avatar_url: avatar_url,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  console.log(res.statusText);
};

export default discord;
