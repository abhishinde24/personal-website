interface SectionHeaderProps {
  title: string
}

function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <>
      <div className="heading">{title}</div>
      <hr />
    </>
  )
}

export default SectionHeader
