import { LINKS } from '@/config/links'

export const SectionButtons = () => {
  return (
    <section className="w-full space-y-4">
      {LINKS.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex h-12 w-full items-center justify-center whitespace-nowrap rounded-md bg-primary/5 px-4 text-sm font-medium backdrop-blur-sm transition-all duration-300 will-change-transform hover:scale-105 hover:bg-primary/10"
        >
          <link.icon className="mr-2 h-5 w-5" />
          {link.name}
        </a>
      ))}
    </section>
  )
}
