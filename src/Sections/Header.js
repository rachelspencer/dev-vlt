import headerlogo from "../images/headerlogo.jpg"

function Header() {
    return (
        <div style={{display:"flex", justifyContent:"center", margin:"25px"}}>
            <img src={headerlogo} style={{width:"130px"}}alt="Dev Vault logo"/>
        </div>
    )
};

export default Header;