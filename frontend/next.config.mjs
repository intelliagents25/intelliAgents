/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        CHAT_BOX: "chat_content",
        INITIAL_EVENTS_JSON: "initial_events_json",
        RECOMMENDED_OH: "recommended_oh_json",
        FILE_INFO: "file_info",
      },
      compiler: {
        styledComponents: true
      }

};

export default nextConfig;
