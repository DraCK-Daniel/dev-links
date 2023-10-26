import { SOCIALS } from '@/constants/socials'

export const SectionSocials = () => {
  return (
    <section className="flex w-full items-center justify-center gap-8">
      {SOCIALS.map((social) => (
        <a
          key={social.href}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          aria-label="Social link"
          className="text-foreground/50 transition-all duration-300 hover:scale-125 hover:text-foreground"
        >
          <social.icon className="h-6 w-6" />
        </a>
      ))}
    </section>
  )
}
