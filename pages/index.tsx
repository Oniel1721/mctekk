import Head from 'next/head'
import Image from 'next/image'
import { useUserList } from '../hooks/'

export default function HomePage() {
  const userList = useUserList()
  
  return (
    <>
      <Head>
        <title>Users</title>
        <meta name="description" content="A list of all users" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ul>
          {
            userList.map((user)=>{
              return <li key={user.email}>{user.firstname}</li>
            })
          }
        </ul>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  )
}
