export const Alert = ({ children , type="success"}) => {
    return (
        <div 
            style={{
            backgroundColor: type === "success" ? "green" : "red", 
            color:"#fff", 
            padding:"10px",
            borderRadius:"5px",
            marginBottom:"20px"   
         }}
         >
            {children}
        </div>
    )
}
