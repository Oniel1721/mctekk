import Head from 'next/head'
import { UserItem } from '../components/'
import { useSignout, useUserList } from '../hooks/'

export default function HomePage() {
  const userList = useUserList()
  const { onSignout } = useSignout()
  return (
    <>
      <Head>
        <title>Users</title>
        <meta name="description" content="A list of all users" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='user-main'>
        <ul className='user-list'>
          <h3 className='user-list-title'>
            Users 
          </h3>
          
          {
            userList.map((user)=>{
              return <UserItem key={user.email} user={user} /> 
            })
          }
        </ul>
      </main>
      <button onClick={onSignout} className='signout-btn'>
        Sign Out
      </button>
    </>
  )
}
