import { type HTMLAttributes, forwardRef } from 'react'
import { type VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/app/lib/utils'

const paragraphVariants = cva(
  'max-w-prose text-slate-700 dark:text-slate-300 mb-2 text-center',
  {
    variants: {
      size: {
        default: 'text-base sm:text-lg',
        sm: 'text-sm, sm:text-base'
      }
    },
    defaultVariants: {
      size: 'default'
    }
  }
)

interface PragraphProps extends HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof paragraphVariants> { }

const Paragraph = forwardRef<HTMLParagraphElement, PragraphProps>(({
  className, size, children, ...props
}, ref) => {
  return <p
    ref={ref}
    {...props}
    className={cn(paragraphVariants({ size, className }))}>
    {children}
  </p>
})

Paragraph.displayName = 'Paragraph'

export default Paragraph
