import { useContext } from "react"
import { AuthContext } from "../Hook/AuthProvider"
import { Navigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";

function PrivateRoute({children}) {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex justify-center">
        <Button className="text-4xl text-black" variant="text" size="lg" loading={true}>
          Loading
        </Button>
      </div>
    );
  }
  if (user) {
    return children;
    }
  return <Navigate to='/login'/>
}

export default PrivateRoute