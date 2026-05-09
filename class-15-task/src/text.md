  <div className='allproducts'>
      {productData.map(function(elem,idx){
          return <a className='product' key={idx} href="">
            <div>
              <img src={elem.image} alt="" />
              <h2>{elem.title}</h2>
            </div>
          </a>
      })}
    </div>


    const[productData,setProductData] = useState([])

  const getData = async()=>{
    const response = await axios.get('https://fakestoreapi.com/products')
    setProductData(response.data)
  }

  useEffect(function(){
    getData()
  },[])