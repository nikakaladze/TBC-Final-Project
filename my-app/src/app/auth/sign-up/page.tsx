import { getCurrentSession, loginUser, registerUser } from '@/actions/auth';
import SignUp from '@/components/auth/SignUp';
import { redirect } from 'next/navigation';
import React from 'react';
import zod from 'zod'

const signUpSchema = zod.object({
    email:zod.string().email(),
    password:zod.string().min(8),

})

const SignUpPage = async () => {
    const {user} =  await getCurrentSession();
    if(user){
        return redirect("/")
    }

    const action = async (prevState:any,formData:FormData) => {
        "use server";
        const parsed =  signUpSchema.safeParse(Object.fromEntries(formData));

        if(!parsed.success){
            return{
                message:"Invalid Form Data"
            }
        }
        const {email,password} = parsed.data;
        const {user,error} = await registerUser(email,password);
        if(error){
            return{message:error}
        }else if(user){
            await  loginUser(email,password),

            await redirect("/"),
            
        }


        
    }
  return <SignUp />
}

export default SignUpPage;