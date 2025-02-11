import { getCurrentSession } from '@/actions/auth';
import { redirect } from 'next/navigation';
import React from 'react'

const SignUpPage = async () => {
    const {user} =  await getCurrentSession();
    if(user){
        return redirect("/")
    }
  return (
    <div>page</div>
  )
}

export default SignUpPage;