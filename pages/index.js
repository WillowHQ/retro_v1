import { useEffect, useState } from 'react'
import Head from 'next/head'
import { auth } from '../components/Firebase'
import { useRouter } from 'next/router'
import SignIn from '../components/SignIn.js'

export default function Home() {
  const router = useRouter()
  //TODO how to only redirect once I've signed in. Prob just need to check if user is null 
  const [user, setUser] = useState()
  useEffect(() =>{
    auth.onAuthStateChanged((user)=> {
      router.push('/AdminDashboard')
      console.log({user})
      setUser(user)
    })
    
  })
  return (
    <div className="container">
      <Head>
        <title>Retroboard 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SignIn/>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

      
    </div>
  )
}
