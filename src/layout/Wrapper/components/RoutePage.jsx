import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from '../../../config/routes'

export const RoutePage = () => {
  const routeConfig = routes()
  return (
    <main className='routes'>
      <Routes>
        {routeConfig.map(route => (
          <Route key={route.id} path={route.path} element={route.element} />
        ))}
      </Routes>
    </main>
  )
}