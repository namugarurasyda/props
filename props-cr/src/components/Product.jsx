// export const Product = (props) => {
//     return (
//         <div>
//             <h3>{props.title}</h3>
//             <p>Price: ${props.price}</p>
//             <p>In stock: {props.inStock ? "Yes" : "No"}</p>
//             <p>Categories: {props.categories.join(", ")}</p>
//         </div>
//     )
// }

// Destructuring props version
export const Product = ({ title="Iphone", price, inStock, categories }) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>Price: ${price}</p>
            <p>In stock: {inStock ? "Yes" : "No"}</p>
            <p>Categories: {categories.join(", ")}</p>
        </div>
    );
};

