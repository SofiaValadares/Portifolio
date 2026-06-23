import { useInView } from '../../../hooks/useInView'
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
    const { ref, inView } = useInView()

    return (
        <section
            ref={ref}
            id={sectionId}
            className={[
                blockClass,
                className,
                inView ? 'is-in-view' : '',
            ].filter(Boolean).join(' ')}
        >
            <header className={`${blockClass}__header`}>{title}</header>
            <div className={`${blockClass}__body`}>{children}</div>
        </section>
    )
}

export default SectionConteiner
