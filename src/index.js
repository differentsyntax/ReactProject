import React, { Component } from "react"
import { render } from "react-dom"

const bookList = [
  {"title":"The Ugly Truth", "author":"Minisha Augustine", "pages": 250},
  {"title":"The Ugly Truth 2", "author":"Minisha Augustine", "pages": 250},
  {"title":"The Ugly Truth 3", "author":"Minisha Augustine", "pages": 250}
]

const Book = ({ title, author, pages, freeBookmark }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p> By: {author}</p>
      <p> Pages: {pages}</p>
      <p> Free Bookmark Today?: {freeBookmark} ? "Yes" : "No"} </p>
    </div>
  )
}

// notice two different ways of component defining syntax below

const Hiring = () => 
<div>
  <p> The library is hiring. Go to www.library.com/jobs for more.</p> 
</div>

const NotHiring = () => 
<div>
  <p> The library is not hiring anymore. Check back later at www.library.com/jobs for more.</p> 
</div>

class Library extends Component {
  
  state = { 
    open: false,
    freeBookmark: true,
    hiring: true
   }
  
  toggle = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }

  // Common Component Life Cycle Functions, in-built

  componentDidMount(){
    console.log("The component mounted successfully")
  }

  componentDidUpdate(){
    console.log("The component just updated")
  }

  render(){
    var style = {
      backgroundColor: 'Orange'
    }
    const {books} = this.props // const books = this.props.books
    return (
      <div>
        {this.state.hiring ? <Hiring /> : <NotHiring />}
        <h1 style = {style} >The library is {this.state.open ? "open" : "closed" }</h1>
    <button onClick = {this.toggle}>{this.state.open ? "Shut Down" : "Open Library"}</button>
        {books.map(
          (book,i) => <Book key = {i} // unique identifier key for mapping
                            title = {book.title} 
                            author = {book.author} 
                            pages = {book.pages}>
                            freeBookmark = {this.state.freeBookmark}
                      </Book>
        )}
      </div>
    )
  }
}

render(
  <Library books = {bookList} />, 
  document.getElementById("root")
  )
