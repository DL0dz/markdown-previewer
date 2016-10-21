import React, { PropTypes } from 'react'
import { EditorPreview } from './MarkdownPreviewer.css'

function createMarkup (htmlString) {
  return {
    __html: htmlString
  }
}

const Preview = props =>
  <div
    className={EditorPreview}
    dangerouslySetInnerHTML={createMarkup(props.content)} >
  </div>

Preview.proptypes = {
  content: PropTypes.string.isRequired
}

export default Preview
