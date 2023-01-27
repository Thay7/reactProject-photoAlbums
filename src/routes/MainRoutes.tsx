import { useRoutes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Albums } from '../pages/Albums'
import { Photos } from '../pages/Photos'
import { PhotoSingle } from '../pages/PhotoSingle'
import { NotFound } from '../pages/NotFound'

export const MainRoutes = () => {
    return useRoutes([
        {path: '/', element: <Home/>},
        {path: '/albums/', element: <Albums/>},
        {path: '/albums/:id', element: <Photos/> },
        {path: '/photos/:id', element: <PhotoSingle/> },
    ])
}

// https://jsonplaceholder.typicode.com/albums
// https://jsonplaceholder.typicode.com/albums/1
// https://jsonplaceholder.typicode.com/albums/1/photos
// https://jsonplaceholder.typicode.com/photos/1