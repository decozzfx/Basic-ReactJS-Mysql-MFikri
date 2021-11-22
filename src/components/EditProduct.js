import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

const EditProduct = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()  // id yang diambil dari params route

    useEffect(() => {
        getProductById()
    }, [])

    const getProductById = async () => { // mengambil data berdasarkan id dari API
        const response = await fetch(`http://localhost:8080/products/${id}`)  //tentukan lokasi end point database yang akan diakses
        const data = await response.json()        // ambil data berdasarkan idnya
        setTitle(data.title)
        setPrice(data.price )
    }    

    const updateProduct = async (e) => {  // e is event
        e.preventDefault()         // untuk mencegah page reload ketika submit dieksekusi
        const product = { title , price} // ambil data yang telah di set dari event
        await fetch(`http://localhost:8080/products/${id}`,{ //tentukan lokasi end point database yang akan diakses
            method : 'PUT',                  // metode yg diambil Post
            body : JSON.stringify(product), // data yang diambil ke body adalah json
            headers : {
                'Content-type' : 'application/json'
            }
        })
        navigate('/')
    }
    
    return (
        <dev>
            <form onSubmit={updateProduct}>
                <div className='field'>
                    <label className='label'>Title</label>
                    <div className='control'>
                        <input className='input' type='text' onChange={(e) => setTitle(e.target.value)} value={title} placeholder='Title' />
                    </div>
                </div>
                <div className='field'>
                    <label className='label'>Price</label>
                    <div className='control'>
                        <input className='input' type='text' onChange={(e) => setPrice(e.target.value)} value={price} placeholder='Price' />
                    </div>
                </div>
                <div className='field'>
                    <div className='control'>
                        <button className='button is-primary'>Update</button>
                    </div>
                </div>
            </form>
        </dev>
    )
}

export default EditProduct
