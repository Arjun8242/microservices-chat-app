# Full-Stack Chat Application 💬

<div align="center">

![NodeJS](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)
![RabbitMQ](https://img.shields.io/badge/RabbitMQ-FF6600?logo=rabbitmq&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?logo=cloudinary&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Socket.IO](https://img.shields.io/badge/Socket.IO-000000?logo=socket.io&logoColor=white)

</div>

This is a full-stack chat application built with a microservices architecture for the backend and Next.js for the frontend. It features real-time chat, user authentication, email verification, and file sharing capabilities.
[I have attached screenshots in the public folder, not able to deploy on AWS because credit card declined ;) ......]

## Features ✨

- **User Authentication:** Secure user registration, login, and session management. 🔐
- **Email Verification:** Account verification via email. 📧
- **Real-time Chat:** Instant messaging with WebSocket support. ⚡
- **Private and Group Chats:** Create and manage one-on-one and group conversations. 👥
- **File Sharing:** Upload and share images and other files within chats (powered by Cloudinary). 📤
- **User Profiles:** View and manage user profiles. 👤
- **Responsive UI:** Modern and responsive user interface built with Next.js and custom UI components. 📱

## Technologies Used 🛠️

### Frontend 🚀

- **Next.js:** React framework for building server-side rendered and static web applications. ⚛️
- **React:** JavaScript library for building user interfaces.
- **TypeScript:** Superset of JavaScript that adds static typing.
- **Tailwind CSS (Implied):** Utility-first CSS framework for rapid UI development. 🎨
- **Socket.IO Client:** For real-time communication with the chat service. 🌐

### Backend ⚙️

- **Node.js:** JavaScript runtime environment. 🟢
- **TypeScript:** Superset of JavaScript that adds static typing.
- **Express.js (Implied):** Web application framework for Node.js.
- **MongoDB:** NoSQL database for data storage (via Mongoose ORM, likely). 🍃
- **Socket.IO:** Library for real-time web applications. 🌐
- **RabbitMQ:** Message broker for inter-service communication (e.g., email queue). 🐇
- **Cloudinary:** Cloud-based image and video management service for file uploads. ☁️
- **JWT (JSON Web Tokens):** For secure authentication. 🔑

### Project Structure 📂

The project is organized into `backend` and `frontend` directories.

```
.
├── backend/
│   ├── chat/           # Chat microservice (real-time messaging, file sharing)
│   ├── mail/           # Email microservice (consumer for email queue)
│   ├── user/           # User authentication microservice (registration, login, profiles)
│   └── ...             # Other backend configurations and shared files
├── frontend/
│   ├── public/         # Static assets
│   ├── src/            # Frontend source code
│   │   ├── app/        # Next.js pages and routes
│   │   ├── components/ # Reusable React components
│   │   ├── context/    # React context providers
│   │   ├── lib/        # Utility functions
│   │   └── ui/         # Custom UI components
│   └── ...             # Other frontend configurations
└── README.md           # This file
```

## Getting Started 🏁

To get a local copy up and running, follow these simple steps.

### Prerequisites ✅

- Node.js (v18 or higher)
- npm or yarn
- MongoDB instance (local or cloud-hosted)
- RabbitMQ instance (local or cloud-hosted)
- Cloudinary account
- Email service (e.g., Gmail, SendGrid) for sending verification emails

### Installation 📦

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Arjun8242/microservices-chat-app.git
    cd microservices-chatt-app
    ```

2.  **Backend Setup:**
    Navigate to each microservice directory (`backend/chat`, `backend/mail`, `backend/user`) and install dependencies:
    ```bash
    cd backend/chat
    npm install
    cd ../mail
    npm install
    cd ../user
    npm install
    ```
    Create `.env` files in each microservice directory based on the provided examples (if any) and configure your environment variables (MongoDB URI, RabbitMQ URL, Cloudinary credentials, JWT secret, email service credentials, etc.).

3.  **Frontend Setup:**
    ```bash
    cd frontend
    npm install
    ```
    Create a `.env.local` file in the `frontend` directory and configure your environment variables (e.g., API endpoint URLs, WebSocket URL).

### Running the Application ▶️

1.  **Start Backend Services:**
    In separate terminal windows, navigate to each backend microservice directory and start the development server:
    ```bash
    # Terminal 1 for User Service
    cd backend/user
    npm run dev

    # Terminal 2 for Chat Service
    cd backend/chat
    npm run dev

    # Terminal 3 for Mail Service
    cd backend/mail
    npm run dev
    ```

2.  **Start Frontend Application:**
    In another terminal window, navigate to the `frontend` directory and start the Next.js development server:
    ```bash
    cd frontend
    npm run dev
    ```

The frontend application should now be running at `http://localhost:3000` (or another port if configured).

## Contributing 🤝

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License 📄

Distributed under the MIT License. See `LICENSE` for more information.

## Contact 📧

Your Name - arjunjaiswal4242@gmail.com
Project Link: https://github.com/Arjun8242/microservices-chat-app
