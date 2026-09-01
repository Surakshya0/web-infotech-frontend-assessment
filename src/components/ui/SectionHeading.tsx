/**
 * SectionHeading
 * Reusable section title block. Deliberately minimal —
 * eyebrow/title/description styling will be added later.
 */
interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div>
      {eyebrow && <span>{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}
