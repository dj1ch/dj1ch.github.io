import { SECRET_WEBHOOK_URL } from "astro:env/server";

export async function POST({ request }) {
    console.log("Request received");

    console.log("Request Method:", request.method);
    console.log("Request URL:", request.url);

    const headers = request.headers;
    console.log("Request Headers:", [...headers]);

    try {
        const bodyText = await request.text();
        console.log("Body received (length):", bodyText.length);
        console.log("Body content:", bodyText);

        if (!bodyText) {
            return new Response("No data received in request", { status: 400 });
        }

        let parsedData;
        try {
            parsedData = JSON.parse(bodyText);
        } catch (parseError) {
            console.error("Error parsing JSON:", parseError);
            return new Response("Error parsing JSON", { status: 400 });
        }

        console.log("Parsed data:", parsedData);

        const { email, subject, message } = parsedData;
        if (!email || !subject || !message) {
            return new Response("Missing required fields", { status: 400 });
        }

        const content = `**Email:** ${email}\n**Subject:** ${subject}\n\n**Message:**\n${message}`;
        const response = await fetch(SECRET_WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content }),
        });

        if (!response.ok) {
            throw new Error('Webhook request failed');
        }

        return new Response("Message sent successfully!", { status: 200 });
    } catch (error) {
        console.error("Error processing the request:", error);
        return new Response("Error processing your request.", { status: 500 });
    }
}
