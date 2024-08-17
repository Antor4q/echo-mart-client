import {  useState } from "react";
import { Link } from "react-router-dom";




const SignUp = () => {

    const [error,setError] = useState("")
   
    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        // signUp(email, password)
        // .then(result => {
        //     console.log(result)
        // })
        // .then(error=>console.log(error.message))
    }
    return (
        <div className="flex  min-h-screen  items-center justify-center">
        <div className="flex flex-row-reverse  w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
            <div className="hidden bg-cover lg:block lg:w-1/2" style={{backgroundImage: "url(https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80)"}}></div>

            <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                <div className="flex justify-center mx-auto">
                    <p className="text-2xl font-semibold">SignIn</p>
                </div>

               

                <form onSubmit={handleSignUp}>
               
                <div className="mt-4">
                    <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" >Name</label>
                    <input id="LoggingEmailAddress" required className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="text" name="name" />
                </div>
                <div className="mt-4">
                    <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" >Email</label>
                    <input id="LoggingEmailAddress" required className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="email" name="email" />
                </div>
                

                <div className="mt-4">
                    <div className="flex justify-between">
                        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" >Password</label>
                       
                    </div>
                    <input id="loggingPassword" required className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="password" name="password" />
                
                </div>
               

                <div className="mt-6">
                    <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#FF6F3C] rounded-lg hover:bg-[#FC2E01]  focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                        SignUp
                    </button>
                 
                </div>
                </form>

                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

                    <p  className="text-xs text-gray-500 uppercase dark:text-gray-400 ">or sign up with</p>

                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                   
                </div>
                <button className="btn my-2 w-full">Google</button>
                <p className="text-center">Already have an account? <Link className="text-[#FF6F3C]" to="/signIn">SignIn</Link></p>
            </div>
        </div>
       </div>
    );
};

export default SignUp;