import PropsTypes from "prop-types";
export const ArraySample = (props) => {

    const {items} = props;
  return (
    <div>

        {items.map((items)=>(
            <li key={items.id} >{items.name}</li>
        ))}
    </div>
  )
}

ArraySample.propTypes = {
    items:PropsTypes.arrayOf(
         PropsTypes.shape({
             id:PropsTypes.number.isRequired
         })
    )
}

// ArraySample.propTypes = {
//     items:PropsTypes.arrayOf(
//         PropsTypes.shape({
//             id:PropsTypes.number.isRequired
//         })
//     ).isRequired
// }