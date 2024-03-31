const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8080;

// Enable CORS
app.use(cors());

app.get('/geolocation', (req, res) => {
    const geolocationData = {
        latitude: 40.7128,
        longitude: -74.0060,
        city: 'New York',
        country: 'USA'
    };

    res.json(geolocationData);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
