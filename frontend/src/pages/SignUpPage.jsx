import React from 'react'
import { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore';
import { MessageSquare, User } from "lucide-react";
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
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* lrft side of the form */}
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
                <span className='label-text font-medium'>full name</span>
              </label>
              <div className='relative'>
                <div className='absolute inset-y-4-0 left-0 pl-3 flex items-center pointer-events-none'>
                  {/* we are importing this user icon */}
                  <User className='size-5 text-base-content/40' />
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
          </form>
        </div>
      </div >
    </div >
  )
};

export default SignUpPage
