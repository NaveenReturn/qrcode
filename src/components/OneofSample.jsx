import PropsTypes from "prop-types"

export const OneofSample = (props) => {

    const {color} = props;
  return (
    <div  style={{backgroundColor:color,padding:"10px"}}>
      <p>this one of paragrap content {color }</p>
    </div>
  )
}
OneofSample.propTypes = {
    color:PropsTypes.oneOf(["orange","red","blue"]).isRequired,
}