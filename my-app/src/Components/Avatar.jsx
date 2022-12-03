import React from "react";
function Avatar(props){
    const[count,setCount]=React.useState(0);
const {src,name,rounded}=props;
const styles={
    borderRadius:"10px",
    width:"150px"
};
if(rounded){
    styles.borderRadius="50%";
}
return(
    <div style={{
        borderRadius:"10px",
        padding:"20px",
        border:"1px solid #cecece",
        margin:"10px"
    }}>
    <img src={src} alt="prof-pic"/>
    <h3>{name}</h3>
    <h2>Likes:{count}</h2>
    
    <button onClick={()=>setCount(count+1)}>LiKE</button>
  

    </div>
)
}
export default Avatar;