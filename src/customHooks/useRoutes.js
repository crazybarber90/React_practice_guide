import React from 'react'
import { useRoutes } from 'react-router-dom'
import Counter from '../components/Counter'
import { BookRoutes } from '../components/routers/BookRoutes'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import FormNameEmail from '../components/FormNameEmail'
import InputFilter from '../components/InputFilter'
import NotFoundPage from '../components/NotFoundPage'

const useRoutesHook = () => {
  // OVO SE RADI U APP.JS -----------------------------

  let element = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      index: true,
      element: <NotFoundPage />,
    },
  ])

  // OVO SE RADI U APP.JS -----------------------------

  // SA CHILDREN
  //   let element = useRoutes([
  //     {
  //       path: '/',
  //       element: <Navbar />,
  //       children: [
  //         {
  //           index: true,
  //           element: <Home />,
  //         },
  //         {
  //           path: 'counter',
  //           element: <Counter />,
  //         },
  //         {
  //           path: 'form',
  //           element: <FormNameEmail />,
  //         },
  //         {
  //           path: 'input-filter',
  //           element: <InputFilter />,
  //         },
  //         {
  //           path: 'books/*',
  //           element: <BookRoutes />,
  //         },
  //       ],
  //     },
  //   ])
}

export default useRoutesHook
