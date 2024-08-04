import PropTypess from 'prop-types';


export const Students = ({name,age}) => {
  return (
    <div>

        <table>
            <tbody>
                <tr>
                    <td>NAME</td>
                    <td>{name}</td>
                </tr>
                <tr>
                    <td>AGE</td>
                    <td>{age}</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
Students.defaultProps={
    name:"kannika",
    age:22
}
Students.propTypes = {
    name:PropTypess.string, 
    age:PropTypess.number
}