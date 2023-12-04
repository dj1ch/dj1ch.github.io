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

        // Send data to Discord using a webhook
        const discordWebhookURL = 'https://discord.com/api/webhooks/1164589281772310588/--yzEwJ8ydf0WYENe9sQ-mgBr3q8do5a4ddUKXNPo7rjUUzsrvqo61c9CJlA24erP9N2';
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
