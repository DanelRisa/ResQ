
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import App from "./App";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Registration from "./components/Registration";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";

import Animals from './components/Animals';
import AnimalItem from './components/AnimalItem';
import Page404 from './components/Page404';
import { getAllAnimals, getOneAnimal } from './components/api';
import CreateForm from './components/CreateForm';
import EditForm from './components/EditForm';
import CreateCategories from './components/CreateCategories';

import BlogPage from './components/Blog.js';
import OnePost from "./components/OnePost.js";
import CreatePost from "./components/CreatePost.js";
import EditPost from "./components/EditPost.js";
import Layout from "./components/Layout.js"
import Layout2 from "./components/Layout2.js"
import 'bootstrap/dist/css/bootstrap.min.css';


import Sidebar from "./components/Sidebar.js";


const root = ReactDOM.createRoot(document.getElementById('root'));

const routes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/",
    element: <CreateForm />
  },
  {
    path: "/animal/add",
    element: <CreateForm />
  },
  {
    path: "/categories",
    element: <CreateCategories />
  },
  {
    path: "/categories/create",
    element: <CreateCategories />
  },
  {
    path: "/animals/category/:catId?",
    element: <Animals />
  },
  {
    path: "/animals/",
    element: <Animals />,
    loader: getAllAnimals,
    children: [
      {
        path: "/animals/:animalId",
        element: <AnimalItem />,
        loader: async ({ params }) => getOneAnimal(params.animalId)
      }
    ]
  },
  {
    path: "/animals/:animalId",
    element: <AnimalItem />
  },
  {
    path: "/animals/:animalId/edit",
    element: <EditForm />
  },
  {
    path: "/animal-item",
    element: <AnimalItem />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/registration",
    element: <Registration />
  },
  {
    path: "/user",
    element: <BoardUser />
  },
  {
    path: "/mod",
    element: <BoardModerator />
  },
  {
    path: "/admin",
    element: <BoardAdmin />
  },
  {
    path: "/blog",
    element: <BlogPage />
  },
  {
    path: "/posts/:postId",
    element: <OnePost />
  },
  {
    path: "/post/create",
    element: <CreatePost />
  },
  {
    path: "/posts/:postId/edit",
    element: <EditPost />
  },
  {
    path: "*",
    element: <Page404 />
  }
]
},

{
  element: <Layout2/>,
  children: [
    {
      path: "/profile",
      element: <Profile />
    }
  ]
}
]
);

root.render(
  <RouterProvider router={routes} />
);
//npx json-server -p 4000 -w ./data/db.json 