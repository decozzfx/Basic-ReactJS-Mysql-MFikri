import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {    
    //state for form
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const navigate = useNavigate()  // untuk menredirect ke Homepage

    const saveProduct = async (e) => { // e = event
        e.preventDefault() // agar ketika submit page tidak reload
        const product = { title, price }
        console.info(product)
        await fetch('http://localhost:8080/products',{ // mengepush data , db connection address
        method : 'POST',                    // metode req post
        body : JSON.stringify(product),     // data yg dikirimkan dari body dengan jenis data json
        headers : {                         // tipe konten 
            'Content-Type' : 'application/json'
        }
        }) 
        navigate('/') // arah redirect
    }

    return (
        <div>
            <form onSubmit={saveProduct}>
            <div className='field'>
                <label className='label'>Title</label>
                <div className='control'>
                    <input className='input' onChange={(e) => setTitle(e.target.value)} value={title} type='text' placeholder='Title' />
                </div>
            </div>
            <div className='field'>
                <label className='label'>Price</label>
                <div className='control'>
                    <input className='input' onChange={(e) => setPrice(e.target.value)} value={price} type='text' placeholder='Price' />
                </div>
            </div>
            <div className='field'>
                <div className='control'>
                    <button className='button is-primary'>Save</button>
                </div>
            </div>
            {/* <p>{ title } - { price }</p> test for onchange */} 
            </form>
        </div>
    )
}

export default AddProduct