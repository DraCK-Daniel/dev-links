import Image from 'next/image'

export const BackgroundImage = () => {
  return (
    <div className="absolute inset-0 -z-10 h-auto w-auto">
      <Image
        src="/glow-homepage.webp"
        alt="Background gradient Home Page"
        fill
        sizes="100%"
        className="object-cover"
      />
    </div>
  )
}
