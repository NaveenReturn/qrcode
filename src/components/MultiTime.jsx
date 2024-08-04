import PropsTypes from "prop-types"

export const MultiTime = (props) => {
  return (
    <div>
        <p>This value is :{props.value}</p>
    </div>
  )
}
MultiTime.propTypes = {
    value:PropsTypes.oneOfType([PropsTypes.string,PropsTypes.number,PropsTypes.bool]).isRequired,
}