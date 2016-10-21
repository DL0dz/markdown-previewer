import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import MarkdownPreviewer from '../components/MarkdownPreviewer/MarkdownPreviewer'

export default (
  <Router history={browserHistory}>
    <Route path='/' component={MarkdownPreviewer} />
  </Router>
)
