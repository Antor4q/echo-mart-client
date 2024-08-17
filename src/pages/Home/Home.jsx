import {  useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import useProducts from "../../hooks/useProducts";



const Home = () => {

    const [products,setProducts] = useState([])
    const [price,setPrice] = useState(13500)
    const [title,setTitle] = useState("")
    const axiosPublic = useAxios()
    const [sortProd,setSortProd] = useState("")
   
    const [perPageProducts,setPerPageProducts] = useState(10);
   
    const totalProducts = useProducts() || 0
   
    const pages = Math.ceil(totalProducts / perPageProducts)
    const page = [...Array(pages).keys()]
    const [currentPage,setCurrentPage] = useState(1)

    const [category,setCategory] = useState("")
    const [brand,setBrand] = useState("")

    const [p,setP] = useState(13500)
    const [cat,setCat] = useState("")
    const [br,setBr] = useState("")
   
    const handleFilter = () =>{
       
      
      setP(price)
      setCat(category)
      setBr(brand)
      
    }
   

    useEffect(()=>{
    
      axiosPublic.get("/products",{params:{title,currentPage,perPageProducts,sortProd,p,cat,br}})
      .then(data => {
         setProducts(data?.data)
      })
    },[axiosPublic,title,currentPage,perPageProducts,sortProd,p,cat,br])

 
    const handlePrev = () => {
        if(currentPage > 1){
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNext = () => {
        if(currentPage < page.length){
            setCurrentPage( currentPage + 1)
        }
    }
   
    return (
        <div>
            <div className="md:w-1/3 md:mx-auto">
            <label className="input input-bordered flex items-center gap-2">
            <input type="text" onChange={(e)=>{setTitle(e.target.value)}} className="grow" placeholder="Search by name" />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd" />
            </svg>
            </label>
            
            </div>
            <div className="mt-10 flex lg:flex-row flex-col">
                <div className="lg:w-1/5 md:w-2/5">
                    <p className="font-medium my-2">Price range</p>
                    <p>500 - {price}</p>
                    <input type="range" min={500} max={13500} value={price} onChange={(e)=>setPrice(e.target.value)}  className="range range-xs" />
                    <div className="my-3">
                    <p className="font-semibold">Product categories</p>
                        <div className="ml-2 ">
                        <select onChange={(e)=>setCategory(e.target.value)}   className="select select-bordered my-2 w-full max-w-xs">
                        <option disabled selected>All</option>
                        <option value="Tws">Tws</option>
                        <option value="Smartwatch">Smartwatch</option>
                        <option value="Mouse">Mouse</option>
                        <option value="Headphone">Headphone</option>
                        <option value="Speaker">Speaker</option>
                        
                        </select>
                        </div>
                  </div>
                    <div className="my-3">
                    <p className="font-semibold">Brands</p>
                    <div className="ml-2">
                   
                        <select onChange={(e)=>setBrand(e.target.value)}  className="select select-bordered my-2 w-full max-w-xs">
                        <option disabled selected>All</option>
                        <option value="Hoco">Hoco</option>
                        <option value="A4Tech">A4Tech</option>
                        <option value="Colmi">Colmi</option>
                        <option value="Imiki">Imiki</option>
                        <option value="Remax">Remax</option>
                        
                        </select>
                    
                    </div>
                </div>
                <button onClick={handleFilter} className="px-4 py-1  bg-[#FF6F3C] rounded-full hover:bg-[#FC2E01] text-white">Filter</button>
                </div>
                <div className="w-4/5 ml-6">
                    <select name="sort" id="sort" onChange={(e)=>setSortProd(e.target.value)} className="select my-2 w-full max-w-xs">
                    <option disabled selected>Sort by</option>
                    <option value="lowToHigh">Low to high price</option>
                    <option value="highToLow">High to low price</option>
                    <option value="dateAdded">Date added (New first)</option>
                
                    </select>
                    <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-8 gap-1">
                        {
                            products?.map(product => <>
                              <div className="card w-full hover:shadow-lg border bg-base-100 ">
                                <figure className="lg:px-6  lg:pt-6">
                                    <img
                                    src={product?.productImage}
                                    alt="Shoes"
                                    className="rounded-xl h-[150px]" />
                                </figure>
                                <div className="md:card-body p-1">
                                    <h2 className="lg:text-xl text-base font-medium lg:font-semibold">{product?.productName}</h2>
                                    <p className="hidden md:flex">{product?.description}</p>
                                     <div className="flex lg:flex-row flex-col lg:justify-between">
                                     <p>BDT {product?.price}</p>
                                     <p>{product?.ratings} ratings</p>
                                     </div>
                                     <p>{product?.productCreationDate}</p>
                                    <div className="card-actions py-1 items-center lg:items-start">
                                    <button className="btn btn-sm lg:btn-md    bg-[#FF6F3C] hover:bg-[#FC2E01] text-white">Add to cart</button>
                                    </div>
                                </div>
                                </div>
                            </>)
                        }
                    </div>
                    <div className="flex lg:w-3/4 mb-20 gap-4 lg:justify-end justify-center mt-10">
                   
                   <button onClick={()=>handlePrev()} className="btn btn-sm lg:btn-md btn-outline">Previous</button>
                    {
                       page?.map((item,index) => <>
                        <button 
                        onClick={()=>setCurrentPage( item + 1)}
                        className={`btn btn-sm lg:btn-md btn-outline  ${currentPage === item+1 && 'bg-[#FF6F3C] border-none text-white'}`} key={index}>{item + 1}</button>
                       </>)
                    }
                    <button onClick={()=>handleNext()} className="btn btn-sm lg:btn-md btn-outline">Next</button>
               </div>
                </div>
            </div>
        </div>
    );
};

export default Home;