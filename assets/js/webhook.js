document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const messageText = document.getElementById('message').value;

        // Construct the message with bold labels
        const content = `**Name:** ${name}\n**Email:** ${email}\n\n**Message:**\n${messageText}`;

        // Log the message to the console (for testing)
        console.log('Content:', content);

        // Send data to Discord using a webhook
        const discordWebhookURL = 'YOUR_DISCORD_WEBHOOK_URL';
        fetch(discordWebhookURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content: content }),
        })
        .then(response => response.json())
        .then(data => console.log('Response from Discord:', data))
        .catch(error => console.error('Error sending message to Discord:', error));
    });
});
