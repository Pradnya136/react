import { useRouteError } from "react-router-dom";
import error_img_ from "../../images/error_img_.png"

const Error = ()=>{
    const err = useRouteError()
    console.log(err)
    return (
        <div  >
            <div className="wrapper-err-img">
                <h2>Page not found</h2>
            </div>
            <div className="wrapper-err-img">
                <h4>Sorry, we couldn't find what you are looking for. Please check the URL and try again.</h4>
            </div>
            <div className="wrapper-err-img">
                <h3>{err.status}-</h3>
                <h3>{err.statusText}</h3>
            </div>
            
                

            <div className="error_img">
                <img src={error_img_}></img>
            </div>
            
        </div>
    )
}

export default Error;





   