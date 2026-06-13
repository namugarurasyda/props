// import "../../src/Alert.css"

// export const Alert = ({ children , type="success"}) => {
//     return (
//         <div 
//             style={{
//             backgroundColor: type === "success" ? "green" : "red", 
//             color:"#fff", 
//             // padding:"10px",
//             // borderRadius:"5px",
//             marginBottom:"20px"   
//          }}
//          >
//             {children}
//         </div>
//     )
// }


// import "../../src/Alert.css"
import "./../Alert.css"

export const Alert = ({ children , type="success"}) => {
    return (
        <div 
            className={`alert ${type}`} // you call a literal  name
         >
            {children}
        </div>
    )
}
