# Social Media App

A full-stack social media platform developed using the MERN stack, providing features such as user authentication, profile management, CRUD operations for posts, comments, and image uploads.

## Demo

You can view the live demo of the app here: [Link](https://social-media-eta-bay.vercel.app/)

## Design

You can view the Figma design here: [Link](https://www.figma.com/design/NhL1mHjOYN2aRhdeV4IcBI/mini-social-media?node-id=0-1&t=d8KCcAucEjEBCNIv-1)

## Completed Features

- **User Authentication:** Signup, Login, and Logout functionality using JWT (JSON Web Tokens).

- **Profile Management:** Users can create, update and display profiles with a full name, bio, and profile picture.

- **Post Management:** Users can create, read, edit, and delete posts, including text and image uploads.

- **Responsive UI:** A modern and responsive design using React.js, Tailwind CSS, and Material-UI.

- **Cloud Storage:** Integrated with Cloudinary for efficient image storage.

## Features In Progress

- **Replies:** Users can reply to posts. Users can edit and delete replies.

- **Follow/Unfollow:** Users can follow and unfollow other users to see their posts on the feed.

- **Like/Unlike:** Users can like and unlike others' posts.

## Technology Used

- **Frontend:** React.js, Tailwind CSS

- **Backend:** Node.js, Express.js, JWT (JSON Web Tokens), RESTful API, Bcrypt.js, Multer (file upload)

- **Database:** MongoDB, Mongoose

- **File Storage:** Cloudinary

- **Authentication:** JWT for secure session handling

- **Deployment:**
  - **backend** Render
  - **frontend**: Vercel

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
