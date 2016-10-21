import React, { PropTypes } from 'react'
import { EditorPreview } from './MarkdownPreviewer.css'

const Editor = props =>
  <textarea
    onChange={props.onUpdateContent}
    className={EditorPreview}
    value={props.content}
    autoFocus >
  </textarea>

Editor.propTypes = {
  content: PropTypes.string.isRequired,
  onUpdateContent: PropTypes.func.isRequired
}

export default Editor

