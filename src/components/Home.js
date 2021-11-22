import ProductList from './ProductsList' // component 
import {useState} from 'react' // untuk merubah nilai variable // menjalankan method/function setiap kali buka elemen/halaman di render

const Home = () => {
     // variable and data
  const title = useState('Welcome to my React JS app')  // Dinamic Values, useState mereturn array
  // const [age, setAge] = useState(20)

  // const [products, setProducts] = useState([  // men fetch data dengan looping lists, // useState terdapat data jenis array object
  //     { id: 1, title: 'Product 1', price: '111'},
  //     { id: 2, title: 'Product 2', price: '222'},
  //     { id: 3, title: 'Product 3', price: '333'},
  //     { id: 4, title: 'Product 4', price: '444'},
  //     { id: 5, title: 'Product 5', price: '555'}
  // ])
  // const clickMe = (name) => {       // function for click events
  //   console.info(`hello ${name}`)
  // }

  // function
    // const changeTitle = () =>{ 
    //   setTitle('Title has changed') // setTitle -> sebuah const yang menggantikan value jika function dieksekusi
    //   setAge(26)
    // }

    // const deleteProduct = (productId) => {  // method untuk menghapus data yg ditampilkan , bukan yang ada di state
    //   const deletedProducts = products.filter(product => product.id !== productId) // memfilter data yang id nya tidak sama dengan id yg di delete
    //   setProducts(deletedProducts)
    // }

    // const [name , setName] = useState ('Fikri')

    // useEffect(()=> {
    //   console.info('useEffect Running')
    // }, [name]) // empty array untuk membuat useEffect bekerja saat page permata dirender/direload // useEffect akan running lagi jika setName untuk name aktif

    return (
        <div>
        <h1>{title}</h1>
        <ProductList /> {/* <props> = <state> */}
        {/* <ProductList products = {products} deleteProduct = {deleteProduct}/> <props> = <state> */}

        {/* <h3>Age : {age}</h3> */}

        {/* <button onClick={() => clickMe('dcz')}>Click ME</button>  */}

        {/* <button onClick={ changeTitle }>Change Title</button> button akan mengeksekusi function/method jika diclick */}
        
        {/* <br></br> */}

        {/* <button onClick={ () => setName('Joko')} >Change Name</button> tombol untuk dependention useEffect */}
        
        {/* <p>{ name }</p> */}
          {/* <ul>
            {products.map((product) => (  // menentukan data apa -> mengambil isi data ke product 
              <li key={ product.id }>{ product.title } - { product.price }</li> // memetakan perdata
            ))}
          </ul> */}
        </div>        
    )
}

export default Home