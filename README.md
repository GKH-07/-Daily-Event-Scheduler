<h1 align="center">🗓️ Daily Event Scheduler - Backend</h1>
<h3 align="center">A backend service for managing and scheduling daily events, built with Node.js, Express, MongoDB, and JWT-based authentication.</h3>
<p align="center">
    <img src="https://img.shields.io/badge/Node.js-16-green?logo=node.js&style=for-the-badge"/>
    <img src="https://img.shields.io/badge/Express-4.x-blue?logo=express&style=for-the-badge"/>
    <img src="https://img.shields.io/badge/MongoDB-5.x-green?logo=mongodb&style=for-the-badge"/>
    <img src="https://img.shields.io/badge/Mongoose-6.x-red?logo=mongodb&style=for-the-badge"/>
    <img src="https://img.shields.io/badge/JWT-Authentication-yellow?logo=jsonwebtokens&style=for-the-badge"/>
</p>

<h2>🚀 Features</h2>
<ul>
    <li>🔐 <strong>JWT Authentication</strong>: Secure authentication using JSON Web Tokens for user login and registration.</li>
    <li>🗓️ <strong>Event Scheduling</strong>: Users can create, manage, and schedule events by providing event details like start time, end time, and date.</li>
    <li>❌ <strong>Event Overlap Prevention</strong>: The system checks for conflicting event times to ensure no overlapping events are allowed.</li>
    <li>📅 <strong>Retrieve Events</strong>: Retrieve all scheduled events for a specific day, sorted by start time.</li>
    <li>🌐 <strong>CORS Enabled</strong>: Allows cross-origin requests from the frontend for secure communication.</li>
</ul>

<h2>🛠 Technologies Used</h2>
<p align="left">
    <a href="https://nodejs.org/" target="_blank" rel="noreferrer">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" width="40" height="40"/>
    </a> 
    <strong>Node.js</strong>
    <br><br>
    <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="Express.js" width="40" height="40"/>
    </a> 
    <strong>Express.js</strong>
    <br><br>
    <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" width="40" height="40"/>
    </a> 
    <strong>MongoDB</strong>
    <br><br>
    <a href="https://mongoosejs.com/" target="_blank" rel="noreferrer">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" alt="Mongoose" width="40" height="40"/>
    </a> 
    <strong>Mongoose</strong>
    <br><br>
    <a href="https://jwt.io/" target="_blank" rel="noreferrer">
        <img src="https://cdn.worldvectorlogo.com/logos/jwt-3.svg" alt="JWT" width="40" height="40"/>
    </a> 
    <strong>JWT Authentication</strong>
</p>

<h2>📦 Getting Started</h2>
<p>Follow these steps to set up the project locally.</p>

<h3>Prerequisites</h3>
<ul>
    <li>Node.js (v12+)</li>
    <li>MongoDB (Installed locally or hosted on a cloud service)</li>
    <li>npm (Node Package Manager)</li>
</ul>

<h3>Installation</h3>
<ol>
    <li><strong>Clone the repository:</strong></li>
    <pre>
        <code>
git clone https://github.com/GKH-07/-Daily-Event-Scheduler
cd daily-event-scheduler-backend
        </code>
    </pre>
    <li><strong>Install the dependencies:</strong></li>
    <pre>
        <code>npm install</code>
    </pre>
    <li><strong>Set up environment variables:</strong></li>
    <p>Create a <code>.env</code> file in the root directory of your project:</p>
    <pre>
        <code>
MONGODB_URI=mongodb://localhost:27017/daily-event-scheduler
PORT=8000
TOKEN_SECRET=your_jwt_secret
        </code>
    </pre>
    <li><strong>Start the application:</strong></li>
    <pre>
        <code>npm start</code>
    </pre>
</ol>

<p>The server should now be running at <a href="http://localhost:8000" target="_blank">http://localhost:8000</a>.</p>

<h2>🌐 API Endpoints</h2>
<ul>
    <li><code>POST /api/auth/register</code>: Register a new user by providing <code>name</code>, <code>email</code>, and <code>password</code>.</li>
    <li><code>POST /api/auth/login</code>: Log in an existing user and receive a JWT token.</li>
    <li><code>POST /api/events/add</code>: Add a new event. Requires JWT token in the request header.</li>
    <li><code>GET /api/events/:date</code>: Retrieve all events for a specific date. Requires JWT token.</li>
</ul>

<h2>🔍 Sample Request</h2>
<h3>Register User</h3>
<pre>
    <code>
POST /api/auth/register
Content-Type: application/json

{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "yourpassword"
}
    </code>
</pre>

<h3>Add Event</h3>
<pre>
    <code>
POST /api/events/add
Content-Type: application/json
Authorization: Bearer your_jwt_token

{
    "name": "Team Meeting",
    "start_time": "14:00",
    "end_time": "15:00",
    "date": "2024-10-28"
}
    </code>
</pre>

<h2>🛠 Tools & Technologies</h2>
<ul>
    <li><strong>Node.js</strong>: JavaScript runtime for building the backend.</li>
    <li><strong>Express.js</strong>: A lightweight web framework for Node.js.</li>
    <li><strong>MongoDB</strong>: NoSQL database for storing user and event data.</li>
    <li><strong>Mongoose</strong>: Object Data Modeling (ODM) library for MongoDB and Node.js.</li>
    <li><strong>JWT</strong>: Token-based authentication system for secure API access.</li>
</ul>

<h2>📜 License</h2>
<p>This project is licensed under the MIT License - see the <a href="LICENSE" target="_blank">LICENSE</a> file for details.</p>

<a class="link" href="https://github.com/your-repo-url" target="_blank">Visit the GitHub Repository</a>
