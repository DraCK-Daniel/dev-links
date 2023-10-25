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
          className="text-foreground/50 hover:text-foreground transition-all duration-300 hover:scale-125"
        >
          <social.icon className="h-6 w-6" />
        </a>
      ))}
    </section>
  )
}
