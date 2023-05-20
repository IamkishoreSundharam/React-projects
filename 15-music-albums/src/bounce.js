

const BounceLoader=({loader})=>{ 

    return(
        <div className="container" >
        {loader && <div className="ball"></div>}
    </div>
    )
}
export default BounceLoader;