import axios from 'axios';
import dotenv from "dotenv";
dotenv.config();


const ZOOM_CLIENT_ID = process.env.ZOOM_CLIENT_ID;
const ZOOM_CLIENT_SECRET = process.env.ZOOM_CLIENT_SECRET;
const ZOOM_ACCOUNT_ID = process.env.ZOOM_ACCOUNT_ID;

// Get Zoom OAuth Access Token
export const getZoomAccessToken = async () => {
  try {
    const response = await axios.post(
      `https://zoom.us/oauth/token`,
      `grant_type=account_credentials&account_id=${ZOOM_ACCOUNT_ID}`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${ZOOM_CLIENT_ID}:${ZOOM_CLIENT_SECRET}`
          ).toString('base64')}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    return response.data.access_token;
  } catch (error) {
    console.error('Error getting Zoom access token:', error.response?.data);
    throw new Error('Failed to authenticate with Zoom');
  }
};

// module.exports = { getZoomAccessToken };
