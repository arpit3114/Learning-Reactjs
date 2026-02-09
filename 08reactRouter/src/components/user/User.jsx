import { useParams } from "react-router-dom"

function User() {

const {userId} = useParams()

  return (
    <div className="text-white bg-gray-700 flex justify-center p-20 text-4xl">User : {userId}</div>
  )
}

export default User