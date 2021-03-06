import * as React from "react";
import ReactDOM from 'react-dom';

import { Admin, Resource } from 'react-admin';
import { UserList } from './users.js';
import { Route } from 'react-router-dom';

import { CommentList, CommentCreate, CommentEdit } from './comments.js';
import { AlbumList } from './albums.js';
import { PhotoList } from './photos.js';
import { TodoList } from './todos.js';
import { BookList } from "./books.js";
import profile from './profile';
import MyLayout from './MyLayout';





import { PostList, PostEdit, PostCreate } from "./posts.js";
import jsonServerProvider from 'ra-data-json-server';




import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';
import CommentIcon from '@mui/icons-material/Comment';
import CollectionsIcon from '@mui/icons-material/Collections';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import ListAltIcon from '@mui/icons-material/ListAlt';
import BookIcon from '@mui/icons-material/Book';
import { createTheme, Box, Typography } from '@mui/material';



import Dashboard from "./Dashboard.js";
import authProvider from "./authProvider.js";



//import { CommentList, CommentEdit, CommentCreate, CommentIcon } from './comments';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');


const App = () => (
        <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}
        customRoutes={[
            <Route
                key="my-profile"
                path="/my-profile"
                component={profile.edit}
            />
        ]}
        appLayout={MyLayout} 
        >
             <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
             <Resource name="users" list={UserList} icon={UserIcon} />
             <Resource name="comments" list={CommentList} icon={CommentIcon} create={CommentCreate} edit={CommentEdit}/>
             <Resource name="albums" list={AlbumList} icon={CollectionsIcon}/>
             <Resource name="photos" list={PhotoList} icon={PhotoCameraIcon}/>
             <Resource name="todos" list={TodoList} icon={ListAltIcon}/>
             <Resource name="books" list={BookList} icon={BookIcon}/>
             <Resource name="profile"/>
        </Admin>
    );
export default App;

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
