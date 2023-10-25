import { cn } from '@/lib/utils'
import Image from 'next/image'

type BackGroundImageProps = {
  src: string
  className?: string
}

export const BackgroundImage = ({ src, className }: BackGroundImageProps) => {
  return (
    <div className={cn('absolute inset-0 -z-10 h-auto w-auto', className)}>
      <Image
        src={src}
        alt="Background gradient Home Page"
        fill
        sizes="100%"
        className="object-cover"
      />
    </div>
  )
}
