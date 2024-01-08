'use client'

import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function ProfilePage() {

  const { data: session } =  useSession()

  useEffect(() => {
    console.log('Client side');
    
  }, [])
  return (
    <div>
      <h1>Profile Page</h1>
      <hr />

      <div className="flex flex-col">
        <span>Name: { session?.user?.name ?? 'No name' }</span>
        <span>Email: { session?.user?.email ?? 'No email' }</span>
        <span>Image: { session?.user?.image ?? 'No image' }</span>
        <span>ID: { session?.user?.id ?? 'No uuid'  }</span>
        <span>Role: { session?.user?.roles?.join(', ') ?? ['No role'] }</span>
      </div>
    </div>
  );
}