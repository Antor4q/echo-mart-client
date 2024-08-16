import { useEffect, useState } from "react";


const Home = () => {

    const [products,setProducts] = useState([])
    const [price,setPrice] = useState(9500)
    const [title,setTitle] = useState("")
    console.log(price)
    console.log(title)

    useEffect(()=>{
        fetch("/products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

   
    return (
        <div>
            <div className="w-1/3 mx-auto">
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
                <div className="w-1/5">
                    <p className="font-medium my-2">Price range</p>
                    <p>500 - {price}</p>
                    <input type="range" min={500} max={9500} value={price} onChange={(e)=>setPrice(e.target.value)}  className="range range-xs" />
                    <div className="my-3">
                    <p className="font-semibold">Product categories</p>
                    <div className="ml-2">
                    <p>All</p>
                    <p>Tws</p>
                    <p>Smartwatch</p>
                    <p>Mouse</p>
                    <p>Headphone</p>
                    <p>Speaker</p>
                    </div>
                  </div>
                    <div className="my-3">
                    <p className="font-semibold">Brands</p>
                    <div className="ml-2">
                    <p>All</p>
                    <p>Hoco</p>
                    <p>A4Tech</p>
                    <p>Colmi</p>
                    <p>Imiki</p>
                    <p>Remax</p>
                    
                    </div>
                </div>
                <button className="px-4 py-1  bg-[#FF6F3C] rounded-full hover:bg-[#FC2E01] text-white">Filter</button>
                </div>
                <div className="w-4/5 ml-6">
                    <select className="select my-2 w-full max-w-xs">
                    <option disabled selected>Sort by</option>
                    <option>Low to high price</option>
                    <option>High to low price</option>
                    <option>Date added (New first)</option>
                
                    </select>
                    <div className="grid lg:grid-cols-3 grid-cols-2 gap-8">
                        {
                            products?.map(product => <>
                              <div className="card hover:shadow-lg border bg-base-100 ">
                                <figure className="px-6 pt-6">
                                    <img
                                    src={product?.productImage}
                                    alt="Shoes"
                                    className="rounded-xl h-[150px]" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="text-xl font-semibold">{product?.productName}</h2>
                                    <p>{product?.description}</p>
                                     <div className="flex justify-between">
                                     <p>ট{product?.price}</p>
                                     <p>{product?.ratings} ratings</p>
                                     </div>
                                    <div className="card-actions">
                                    <button className="btn bg-[#FF6F3C] hover:bg-[#FC2E01] text-white">Add to cart</button>
                                    </div>
                                </div>
                                </div>
                            </>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;