'use client';
import styles from './section-container.module.scss';
import LeftSection from '../LeftSection/left-section.component';
import RightSection from '../RightSection/right-section.component';


export default function SectionContainer(): JSX.Element{
    return (
        <div className={`${styles.mainContainer} flex h-dvh`}>
            <LeftSection />
            <RightSection />
        </div>
    )
}