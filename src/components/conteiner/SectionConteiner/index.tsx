import './sectionConteiner.css'

interface SectionConteinerProps {
    sectionId?: string,
    title: React.ReactNode,
    children: React.ReactNode,
    blockClass?: string,
    className?: string,
}

const SectionConteiner: React.FC<SectionConteinerProps> = (
    {
        sectionId,
        title,
        children,
        blockClass = 'section-format',
        className,
    }) => {
    return (
        <section
            id={sectionId}
            className={[blockClass, className].filter(Boolean).join(' ')}
        >
            <header className={`${blockClass}__header`}>{title}</header>
            <div className={`${blockClass}__body`}>{children}</div>
        </section>
    )
}

export default SectionConteiner
