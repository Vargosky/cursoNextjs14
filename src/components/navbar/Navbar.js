
import Link from 'next/link'
import Links from '@/components/links/Links';




export const Navbar = () => {
  return (
    <nav className='flex bg-blue-900 bg-opacity-90 p-2 rounded'>
      <div className='flex flex-1'><Link className='mx-2' href={'/'}> HOME </Link></div>

    <Links/>

    </nav>
  )
}
