import React,{Fragment,useEffect} from 'react'
import Loader from "../layout/Loader/Loader";
import MetaData from "../layout/MetaData.js";
import ProductCard from './ProductCard.js';
import {CgMouse} from "react-icons/cg";
import "./Home.css";
import {clearErrors,getProduct} from "../../actions/productAction";
import {useSelector,useDispatch} from "react-redux";
import {useAlert} from "react-alert";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
 
  const {loading,error,products} = useSelector((state)=>state.products);

  useEffect(() => {
  if(error){
    alert.error(error);
    dispatch(clearErrors());
  }
  dispatch(getProduct())
  }, [dispatch,error,alert]);  


  return (
    <div>
      <Fragment>
        {loading?(
            <Loader/>
        ):(
            <Fragment>
                <MetaData title="ECOMMERCE"/>
                <div className="banner">
                    <p>WELCOME TO ECOMMERCE</p>
                    <h1>FIND AMAZING PRODUCTS BELOW</h1>
                    <a href="#container">
                        <button>
                            Scroll<CgMouse/>
                        </button>
                    </a>
                </div>
                <h2 className="homeHeading">Featured Products</h2>
                <div className="container" id="container">
                    {products && products.map((product)=>(
                    <ProductCard key={product._id} product={product}/>
                    ))}
                </div>
            </Fragment>
        )}
      </Fragment>
    </div>
  )
}

export default Home
