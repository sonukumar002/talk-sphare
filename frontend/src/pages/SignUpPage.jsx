// import React from 'react'
import { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore';
import { Eye, EyeOff, Lock, MessageSquare, User, Loader2, Mail } from "lucide-react";
import { Link } from 'react-router-dom';
import AuthImagePattern from "../components/AuthImagePattern";
const SignUpPage = () => {
  // this is for the password section where there will be two things the password section and the show password thing 
  const [showPassword, setShowPassword] = useState(false);
  // this is the form which will be used for the form fill up and will be used further for the data collection
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const { signup, isSigningUp } = useAuthStore();

  const validdataForm = () => { };
  const handleSubmit = (e) => {
    e.preventDefault();
    // await signup(formData);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* left side of the form */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* this is for the logo */}
          <div className="text-center mb-8">
            <div className='flex flex-col items-center gap-2 group'>
              <div className='size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
                <MessageSquare className="size-6 text-primary" />

              </div>
              <h1 className='text-2xl font-bold mt-2'>create account</h1>
              <p className='text-base-content/60'>get started with free account</p >
            </div>

          </div>
          {/* form */}
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text font-medium'>Full Name</span>
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  {/* we are importing this user icon */}
                  <User className='size-5 text-gray-500' />
                </div>
                <input
                  type='text'
                  className={'input input-bordered w-full pl-10'}
                  placeholder='sonu kumar'
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>
            </div>

            <div className='form-control'>
              <label className='label'>
                <span className='label-text font-medium'>Email</span>
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <Mail className="size-5 text-gray-500" />
                  {/* we are importing this user icon */}
                  {/* <User className='size-5 text-base-content/40' /> */}

                </div>
                <input
                  type='text'
                  className={'input input-bordered w-full pl-10'}
                  placeholder='xyz@gmail.com'
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>
            <div className='form-control'>
              <label className="label">
                <span className='label-text font-medium'>password</span>
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <Lock className="size-5 text-gray-500" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className={`input input-bordered w-full pl-10`}
                  placeholder='**************'
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type='button'
                  className='absolute inset-y-0 right-0 pr-3 flex items-center'
                  onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <EyeOff className="size-5 text-base-content/40" />
                  ) : (<Eye className="size-5 text-base-content/40" />
                  )}
                </button>
              </div>
            </div>
            <button type='submit' className='btn btn-primary w-full' disabled={isSigningUp}>
              {isSigningUp ? (<>
                <Loader2 className="size-5 animate-spin" />
                loading...
              </>
              ) : ("create account")}

            </button>
          </form>
          <div className='text-center'>
            <p className='text-base-content/60'>
              Already have an account?("")
              <Link to="/login" className='link link-primary'>Sign in
              </Link>
            </p>
          </div>
        </div>
      </div >
      {/* the right side */}
      <AuthImagePattern
      title="join this community"
      subtitle="connect with friends share moments and stay in touch with your loved ones"

      />
    </div >
  )
};

export default SignUpPage;
