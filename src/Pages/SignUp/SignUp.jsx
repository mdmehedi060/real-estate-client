import { Link } from "react-router-dom";


const SignUp = () => {
    return (
        <div className="p-3 max-w-lg mx-auto">
           <h3 className="text-3xl text-center font-semibold my-7">SignUp </h3>
           <form className="flex flex-col gap-4">
            <input type="text" placeholder="UserName" className="border p-3 rounded-lg" id="username" />
            <input type="email" placeholder="email" className="border p-3 rounded-lg" id="email" />
            <input type="password" placeholder="password" className="border p-3 rounded-lg" id="password" />
            <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-80">Signup</button>
            </form> 
            <div className="flex gap-2 mt-5">
                <p>Have an Account?</p>
                <Link to={"/signin"}>
                    <span className="text-blue-700">Signin</span>
                </Link>
            </div>
        </div>
    );
};

export default SignUp;