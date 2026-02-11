const EMAILJS_SERVICE_ID = "EMAILJS_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "EMAILJS_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "EMAILJS_PUBLIC_KEY";
const EMAILJS_AUTOREPLY_TEMPLATE_ID = "EMAILJS_AUTOREPLY_TEMPLATE_ID";

const sendEmailJS = async ({ templateId, params }) => {
  const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      service_id: EMAILJS_SERVICE_ID,
      template_id: templateId,
      user_id: EMAILJS_PUBLIC_KEY,
      template_params: params,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "EmailJS request failed");
  }

  return response.text();
};

window.MailService = {
  sendApplication: async (payload) => {
    const baseParams = {
      to_email: "artistscafe@hallpassinternational.com",
      subject: `Artist Cafe Application — ${payload.artistName || "New"}`,
      application_json: JSON.stringify(payload, null, 2),
      reply_to: payload.email,
      artist_name: payload.artistName,
    };

    await sendEmailJS({ templateId: EMAILJS_TEMPLATE_ID, params: baseParams });

    if (
      EMAILJS_AUTOREPLY_TEMPLATE_ID &&
      EMAILJS_AUTOREPLY_TEMPLATE_ID !== "EMAILJS_AUTOREPLY_TEMPLATE_ID"
    ) {
      await sendEmailJS({
        templateId: EMAILJS_AUTOREPLY_TEMPLATE_ID,
        params: {
          to_email: payload.email,
          artist_name: payload.artistName,
        },
      });
    }
  },
};
