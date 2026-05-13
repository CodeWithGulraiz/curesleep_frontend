import React, { useEffect, useState } from "react";
import { apiUrl } from "../../utils/apiBase";

export default function SuccessPage() {
  const [session, setSession] = useState(null);
  const params = new URLSearchParams(window.location.search);
  const sessionId = params.get("session_id");

  useEffect(() => {
    if (!sessionId) return;
    fetch(apiUrl(`/api/v1/stripe/checkout-session?sessionId=${sessionId}`))
      .then(res => res.json())
      .then(setSession)
      .catch(console.error);
  }, [sessionId]);

  return (
    <div>
      <h1>Payment Successful!</h1>
      {session ? (
        <>
          <p>Amount Paid: {session.amount_total / 100} {session.currency.toUpperCase()}</p>
          <p>Email: {session.customer_details?.email}</p>
        </>
      ) : (
        <p>Loading session...</p>
      )}
    </div>
  );
}
