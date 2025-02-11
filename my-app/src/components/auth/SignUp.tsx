'use client';

import React, { useActionState } from 'react'
import Form from 'next/form'
const initialState = {
message :'',

}
type SignUpProps = {
    action: (prevState:any,formData:FormData) => Promise<{message:string} | undefined>
}

const SignUp = ({action}:SignUpProps) => {

    const [state,formAction,isPending] = useActionState(action,initialState) 
  return (
    <Form
      action={formAction}
      className="max-w-md mx-auto my-16 p-8 bg-white rounded-lg shadow-md"
    >
      <h1 className="text-2xl font-bold text-center mb-2">
        Join The Deal Revolution
      </h1>
      <p className="text-center text-sm text-rose-600 font-semibold mb-2">
        🔥 LIMITED TIME OFFER 🔥
      </p>
      <p className="text-center text-sm text-gray-600 mb-6">
        Sign up now and get 90% OFF your first order!
      </p>

      <div className='space-y-6'>
        
      </div>
    </Form>
  );
}

export default SignUp