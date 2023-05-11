import { type HTMLAttributes, forwardRef } from 'react'
import { type VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const headingVariants = cva(
  'text-black dark:text-white text-center lg:text-left font-extrabold leading-tight tracking-tighter',
  {
    variants: {
      size: {
        default: 'text-4x1 md:text-5x1 lg:text-6x1',
        lg: 'text-5x1 md:text-6x1 lg:text-7x1',
        sm: 'text-2x1 md:text-3x1 lg:text-4x1'
      }
    },
    defaultVariants: {
      size: 'default'
    }
  }
)

interface LargeHeadingProps extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> { }

const LargeHeading = forwardRef<HTMLParagraphElement, LargeHeadingProps>(({
  className, size, children, ...props
}, ref) => {
  return <h1
    ref={ref}
    {...props}
    className={cn(headingVariants({ size, className }))}>
    {children}
  </h1>
})

LargeHeading.displayName = 'Paragraph'

export default LargeHeading
