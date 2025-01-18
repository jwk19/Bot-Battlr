Bot Battlr 🤖⚔️
===============

Welcome to **Bot Battlr**, the one and only spot in the known universe where you can custom build your own Bot Army! This React application allows you to browse through a list of robots, view their details, and enlist them into your army.

Table of Contents
-----------------

-   [Project Overview](#project-overview)
-   [Features](#features)
-   [Setup Instructions](#setup-instructions)
-   [Usage](#usage)
-   [Project Structure](#project-structure)
-   [Advanced Features](#advanced-features)
-   [Contributing](#contributing)
-   [License](#license)

Project Overview
----------------

**Bot Battlr** is a web application built with React, where users can view a collection of bots, add them to their army, and manage their army. The app utilizes a local JSON server for data management.

Features
--------

-   **View All Bots**: Display a collection of bots fetched from a local JSON server.
-   **Add to Army**: Enlist bots into your personal army.
-   **View Your Bots**: See all bots that have been added to your army via a dedicated "Your Bots" tab.
-   **Release Bots**: Remove bots from your army without deleting them from the database.
-   **Discharge Bots**: Permanently remove bots from both your army and the database.

Setup Instructions
------------------

### Prerequisites

-   Node.js and npm installed on your local machine.
-   Git for version control.

### Installation

1.  **Clone the repository**:

    bash

    Copy code

    `git clone https://github.com/jwk19/Bot-Battlr
    cd bot-battlr`

2.  **Install dependencies**:

    bash

    Copy code

    `npm install`

3.  **Set up the JSON server**:

    -   Create a `db.json` file in the project directory with the following content:

        json

        Copy code

        `{
          "bots": [
            {
              "id": 101,
              "name": "wHz-93",
              "health": 94,
              "damage": 20,
              "armor": 63,
              "bot_class": "Support",
              "catchphrase": "1010010101001101100011000111101",
              "avatar_url": "https://robohash.org/nostrumrepellendustenetur.png?size=300x300&set=set1"
            },
            ...
          ]
        }`

    -   Start the server:

        bash

        Copy code

        `json-server --watch db.json --port 8001`

4.  **Start the React development server**:

    bash

    Copy code

    `npm start`

5.  **Open your browser**:

    -   Navigate to `http://localhost:5173` to view the application.

Usage
-----

### Navigating the Application

-   **Home Page**: View the full list of bots. Each bot card displays basic information like the bot's name, class, and stats. Click "Add to Army" to enlist a bot.
-   **Your Bots**: Access this view by clicking the "Your Bots" tab in the navbar. Here, you can see all the bots you've enlisted. Use the "Release" button to remove a bot from your army or the "Discharge" button to delete the bot permanently.

Project Structure
-----------------



-   **Navbar.jsx**: The navigation bar at the top of the app.
-   **BotCollection.jsx**: The main collection of bots displayed on the homepage.
-   **BotCard.jsx**: The component representing individual bot cards.
-   **YourBotArmy.jsx**: Displays the bots that have been added to the user's army.
-   **App.js**: The main component managing state and rendering the application.


Contributing
------------

Contributions are welcome! Please follow these steps to contribute:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Commit your changes (`git commit -m 'Add some feature'`).
4.  Push to the branch (`git push origin feature/your-feature-name`).
5.  Open a Pull Request.

License
-------

This project is licensed under the MIT License. See the LICENSE file for details.