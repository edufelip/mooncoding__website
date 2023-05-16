'use client'

import { useState, type FC } from 'react'
import Button from '@/ui/Button'
import { signIn } from 'next-auth/react'
import { handleErrors } from '@/lib/utils'
import { toast } from '@/ui/Toast'

const SignInButton: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const signInWithGoogle = async (): Promise<void> => {
    setIsLoading(true)

    try {
      await signIn('google')
    } catch (error) {
      toast({
        title: 'Error signing in',
        message: 'Please try again later',
        type: 'error'
      })
    }
  }

  const clickEvent = handleErrors(async () => {
    await signInWithGoogle()
  })

  return <Button onClick={clickEvent} isLoading={isLoading}>
    Sign in
  </Button>
}

export default SignInButton
