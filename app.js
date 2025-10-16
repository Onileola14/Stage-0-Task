const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());

app.get('/me', async (req, res) => {
    try {
        // random cat fact
        const catResponse = await axios.get('https://catfact.ninja/fact', { timeout: 5000 });
        const catFact = catResponse.data.fact;

        // Build the response
        const response = {
            status: 'success',
            user: {
                email: 'onileola14@gmail.com',
                name: 'Salami Tunde Onileola',
                stack: 'Node.js/Express'
            },
            timestamp: new Date().toISOString(),
            fact: catFact
        };

        res.status(200).json(response);
    } catch (error) {
        console.error('Error fetching cat fact:', error.message);

        // Handle API failure gracefully
        res.status(200).json({
            status: 'success',
            user: {
                email: 'onileola14@gmail.com',
                name: 'Salami Tunde Onileola',
                stack: 'Node.js/Express'
            },
            timestamp: new Date().toISOString(),
            fact: 'Could not fetch cat fact at the moment. Try again later.'
        });
    }
});

const PORT = process.env.PORT || 3000;
const start = async () => {

    try {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();