import LargeHeading from '@/components/ui/LargeHeading'
import Paragraph from '@/components/ui/Paragraph'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MoonConding',
  description: 'A plataform to learn software development'
}

export default function Home (): JSX.Element {
  return (
    <div className='relative h-screen flex items-center justify-center overflow-x-hidden'>
      <LargeHeading>
      </LargeHeading>
    </div>
  )
}
