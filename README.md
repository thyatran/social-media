# Social Media App

A full-stack social media platform developed using the MERN stack, providing features such as user authentication, profile management, CRUD operations for posts, comments, and image uploads.

## Demo

You can view the live demo of the app here: Link

## Design

You can view the Figma design here: Link

## Completed Features

- **User Authentication:** Signup, Login, and Logout functionality using JWT (JSON Web Tokens).

- **Profile Management:** Users can create, update and display profiles with a full name, bio, and profile picture.

- **Post Management:** Users can create and read posts, including text and image uploads.

- **Responsive UI:** A modern and responsive design using React.js, Tailwind CSS, and Material-UI.

- **Cloud Storage:** Integrated with Cloudinary for efficient image storage.

## Features In Progress

- **Post Management:** Users can update and delete posts, including text and image uploads.

- **CRUD Operations:** Manage posts and comments with full CRUD functionality.

- **Follow/Unfollow:** Users can follow and unfollow other users to see their posts on the feed.

- **Like/Unlike:** Users can like and unlike others' posts.

## Technology Used

- **Frontend:** React.js, Tailwind CSS, Material-UI

- **Backend:** Node.js, Express.hs, JWT (JSON Web Tokens), RESTful API, Bcrypt.js, Multer (file upload)

- **Database:** MongoDB, Mongoose

- **File Storage:** Cloudinary

- **Authentication:** JWT for secure session handling

- **Deployment:** Render (for hosting and CI/CD pipelines)

## Installation

### 1. Clone the repository

```bash
  git clone
  cd social-media
```

### 2. Install dependencies for backend and frontend

**Backend:**

```bash
  cd backend
  npm install
```

**Frontend:**

```bash
  cd frontend
  npm install
```

### 3. Set up environment variables

Create a `.env` file in the `backend` directory and add the following variables:

```bash
  PORT=5000
  MONGO_URI=<Your MongoDB URI>
  CLOUDINARY_URL=<Your Cloudinary URL>
  JWT_SECRET=<Your JWT Secret>
```

### 4. Run the app

**Backend:**

```bash
  cd backend
  npm start
```

**Frontend:**

```bash
  cd frontend
  npm start
```

Visit `http://localhost:3000` to view the app.

## Usage

- **Signup/Login:** Users can create an account or login using their username and password.

- **Profile:** After logging in, users can edit their profile, including updating their username, bio, and profile picture.

- **Post:** Users can create text posts and upload images to share with others.

- **Follow/Unfollow:** Users can follow other users to see their posts on the feed.

- **Like/Comment:** Users can like and comment on posts.

## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

## Acknowledgements

- Cloudinary for file storage
