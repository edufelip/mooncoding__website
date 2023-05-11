'use client'

import { useState, type FC } from 'react'
import Button from '@/ui/Button'
import { signOut } from 'next-auth/react'
import { handleErrors } from '@/lib/utils'

const SignOutButton: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const signOutUser = async (): Promise<void> => {
    setIsLoading(true)

    try {
      await signOut()
    } catch (error) {
      // toast({
      //   title: 'Error signing out',
      //   message: 'Please try again later',
      //   type: 'error'
      // })
    }
    setIsLoading(false)
  }

  const clickEvent = handleErrors(async () => {
    await signOutUser()
  })

  return <Button onClick={clickEvent} isLoading={isLoading}>
    Sign in
  </Button>
}

export default SignOutButton
