import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { type FC } from 'react'
import { buttonVariants } from '@/ui/Button'
import SignInButton from '@/components/SignInButton'
import SignOutButton from '@/components/SignOutButton'
import ThemeToggle from '@/components/ThemeToggle'

/* @ts-expect-error Server Component */
const Navbar: FC = async () => {
  const session = await getServerSession()
  return <div className='fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between'>
    <div className='container max-w-7x1 mx-auto w-full flex justify-between items-center'>
      <Link href='/' className={buttonVariants({ variant: 'link' })}>
        Moon Coding
      </Link>
      <div className='md:hidden'>
        <ThemeToggle />
      </div>
      <div className='hidden md:flex gap-4'>
        <ThemeToggle />
        {(session != null)
          ? (
          <>
            <Link className={buttonVariants({ variant: 'ghost' })} href='/dashboard'>
              Dashboard
            </Link>
            <SignOutButton />
          </>)
          : (
            <SignInButton />
            )}
      </div>
    </div>
  </div>
}

export default Navbar
