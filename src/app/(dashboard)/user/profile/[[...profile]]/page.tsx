import Header from '@/components/Header'
import { UserProfile, useUser } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import React from 'react'

function UserProfilePage() {
  const DebugMetadata = () => {
    const { user } = useUser();
    console.log("Public Metadata:", user?.publicMetadata);
  
    return <div>Check Console</div>;
  };
  return (
    <>
    <Header title="Profile" subtitle='View your profile' />
    <UserProfile path='/user/profile'
    routing='path'
    appearance={{
        baseTheme: dark,
    }}/>
    </>
    )
}

export default UserProfilePage