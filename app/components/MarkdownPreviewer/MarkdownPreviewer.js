import React from 'react'
import { previewer } from './MarkdownPreviewer.css'
import Editor from './Editor'
import Preview from './Preview'
import marked from 'marked'

const MarkdownPreviewer = React.createClass({
  getInitialState () {
    return {
      content: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*'
    }
  },
  handleUpdateContent (e) {
    this.setState({
      content: e.target.value
    })
  },
  render () {
    return (
      <div className={previewer}>
        <Editor onUpdateContent={this.handleUpdateContent} content={this.state.content} />
        <Preview content={marked(this.state.content)} />
      </div>
    )
  }
})

export default MarkdownPreviewer
