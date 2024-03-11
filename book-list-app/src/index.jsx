
import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import books from './books'




function Booklist(){

    return <> <h2 className='web-t'>Book List Selling📘</h2>
    <div className='books'>
        {books.map((book, index)=>{
            return <Book {...book} key={book.id} number={index}/>
        })}
    </div>
</>
}

function Book(props){
    const{image, title, author, number} = props;
    return (
        
        <section className='book'>
            <img src={image} />
            <h2>{title}</h2>
            <p>{author}</p>
            <button onClick={()=>alert('Thank you for choosing a Book📘')}>Buy</button>
            <span className='number'>{`# ${number + 1}`}</span>
       
        </section> 
        )
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Booklist />)