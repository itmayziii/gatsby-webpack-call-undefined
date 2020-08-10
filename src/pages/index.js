import React from 'react'
import { Link } from 'gatsby'
import loadable from '@loadable/component'

const modules = [
  'module-one',
  'module-two'
]

const IndexPage = () => {
  const loadableModules = modules.map(module => loadable(() => import(`../modules/${module}`)))

  return (
    <>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      {loadableModules.map((Module, i) => <Module key={i} fallback={<h1>Loading...</h1>} />)}
      <Link to='/page-2/'>Go to page 2</Link> <br/>
    </>
  )
}

export default IndexPage
