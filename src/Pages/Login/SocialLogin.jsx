import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SocialLogin = () => {
    const {user1,googleLogin,githubLogin} = useContext(AuthContext);
    const navigate = useNavigate()  ;
  

    const handleSocialLogin = (media) =>{
         media()
         .then(res => {
            toast.success("Social User logged in successfully");
            navigate('/');
         })
             .catch(error => {
            toast.error(error.message)
        })
    }

    return (
        <>
            <div className="divider">continue with</div>
            <div className="flex justify-around">
                <button onClick={() => handleSocialLogin(googleLogin)}
                 className="btn btn-neutral btn-sm">Google</button>

                 <button onClick={() => handleSocialLogin(githubLogin)}
                 className="btn btn-neutral btn-sm">Github</button>
            </div>
        </>
    );
};

export default SocialLogin;