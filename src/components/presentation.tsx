type PresentationProps = {
  name: string
  description: string
}

export const Presentation = ({ name, description }: PresentationProps) => {
  return (
    <div className="space-y-0.5 text-center">
      <h1 className="scroll-m-20 text-xl font-semibold tracking-tight">
        {name}
      </h1>

      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  )
}
