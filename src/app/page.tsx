import { Presentation } from '@/components/presentation'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { LINKS } from '@/constants/links'
import { SOCIALS } from '@/constants/socials'

export default function Home() {
  return (
    <main className="w-full max-w-lg space-y-8 px-6">
      <section className="grid place-items-center space-y-4">
        <div className="grid h-28 w-28 place-items-center rounded-full border-2">
          <Avatar className="h-24 w-24">
            <AvatarImage src="https://avatars.githubusercontent.com/u/97995126?v=4" />
            <AvatarFallback>DR</AvatarFallback>
          </Avatar>
        </div>

        <Presentation
          name="Daniel Rodrigues"
          description="Hello! My name is Daniel and I am a Front End Developer."
        />
      </section>

      <section className="w-full space-y-4">
        {LINKS.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 w-full items-center justify-center whitespace-nowrap rounded-md bg-white/5 px-4 text-sm font-medium backdrop-blur-sm transition-colors duration-300 hover:bg-white/10"
          >
            <link.icon className="mr-2 h-5 w-5" />
            {link.name}
          </a>
        ))}
      </section>

      <section className="flex w-full items-center justify-center gap-8">
        {SOCIALS.map((social) => (
          <a
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className="text-muted hover:text-foreground transition-all duration-300 hover:scale-125"
          >
            <social.icon className="h-6 w-6" />
          </a>
        ))}
      </section>
    </main>
  )
}
