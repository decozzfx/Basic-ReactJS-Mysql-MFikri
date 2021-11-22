// materi props -> untuk mengirimkan component anak ke component induk
// materi json server (simulation) in db.json file
// materi fetch data

// import
import { useEffect, useState } from "react"
import { Link } from "react-router-dom" // untuk mengaktikan endpoint


const ProductsList= () => { // isi properti dengan nama props yang di set di app.js
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchData()
    }, []) // [] membuat effect menjadi unmount atau useeffect jalan ketika element/page di reload

    const fetchData = async () => {
        const response = await fetch('http://localhost:8080/products') // alamat akses db
        const data = await response.json()
        setProducts(data)
    }

    const deleteProduct = async (id) => {
        await fetch(`http://localhost:8080/products/${id}`, {
            method : 'DELETE',
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        fetchData()
    }

    return(
        <div>
            <Link to='/add' className='button is-primary is-small '>Add New</Link>
            <table className='table is-striped is-fullwidth'>
                <thead>
                    <tr>
                        <th>No id</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (  // arrow function menggunakn kurung biasa agar dapat menjalankan sintax jsx di dalamnya
                    <tr key={product.id}>
                        <td>{ index + 1 } </td>
                        <td>{ product.title }</td>
                        <td>{ product.price }</td>
                        <td>
                            <Link to={`/edit/${product.id}`} className='button is-small is-info is-outlined is-rounded' >Edit</Link>
                            <button onClick={() => deleteProduct(product.id)} className='button is-small is-danger is-outlined is-rounded' >Delete</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>

            {/* <ul>
                {products.map((product) => ( // mendapatkan data products 
                    <li key={ product.id }> { product.title } - { product.price } {/* memetakan data product*/}
                    {/* <button className='button is-danger' onClick={ () => deleteProduct(product.id) }>Delete</button> */}
                    {/* </li> */}
                {/* ))} */}
            {/* </ul>  */}
        </div>
    )
}

export default ProductsList