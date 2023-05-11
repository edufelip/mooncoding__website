import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn (...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

export function handleErrors<A extends any[]> (p: (...args: A) => Promise<void>): (...args: A) => void {
  return (...args: A) => {
    try {
      p(...args).catch(err => { console.log('Error thrown asynchronously', err) })
    } catch (err) {
      console.log('Error thrown synchronously', err)
    }
  }
}
