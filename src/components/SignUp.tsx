"use client";
import { SignUp, useUser } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { useSearchParams } from 'next/navigation';
import React from 'react'
const SignUpComponent = () => {
    const searchParams = useSearchParams();
    const { user } = useUser;
    const isCheckoutPage = searchParams.get("showSignUp") !== null;
    const courseId = searchParams.get("id");
  
    const signInUrl = isCheckoutPage
      ? `/checkout?step=1&id=${courseId}&showSignUp=false`
      : "/signin";
    const getRedirectUrl = () => {
      if (isCheckoutPage) {
        return `/checkout?step=2&id=${courseId}&showSignUp=false`;
      }
  
      const userType = user?.publicMetadata?.userType as string;
      if (userType === "Teacher") {
        return "/teacher/courses";
      }
      return "user/courses";
    };
  return (
    <SignUp appearance={
        {
            baseTheme: dark
        }
    }
    signInUrl={signInUrl}
      forceRedirectUrl={getRedirectUrl()}
      routing="hash"
      afterSignOutUrl="/"/>
)
}

export default SignUpComponent