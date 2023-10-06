import React from "react";
import { FloatingInbox } from "./FloatingInbox-hooks-pwa";

const InboxPage = () => {
  return <FloatingInbox env={process.env.REACT_APP_XMTP_ENV} />;
};

export default InboxPage;
