'use client';
import { useEffect, useRef } from 'react';
import styles from './section-container.module.scss';
import LeftSection from '../LeftSection/left-section.component';
import RightSection from '../RightSection/right-section.component';

import type { RootState } from '@/lib/store';
import { useSelector } from 'react-redux';


export default function SectionContainer(): JSX.Element{

    const isOpen = useSelector((state: RootState) => state.mainMobileWindow.isOpen);
    
    const sectionContainerRef = useRef<null | HTMLDivElement>(null)

    useEffect(() => {
        console.log("hiiiii", sectionContainerRef.current?.children[0]);

        handleSectionSizeToggle();
        window.addEventListener("resize", handleSectionSizeToggle);
        
        return () => {
            window.removeEventListener("resize", handleSectionSizeToggle);
        };
    }, [isOpen]);

    const handleSectionSizeToggle = () => {
        if(sectionContainerRef.current?.children[0] && sectionContainerRef.current?.children[1]){
            if(window.innerWidth < 890){
                if(isOpen){
                    (sectionContainerRef.current?.children[0] as HTMLDivElement).style.display = "none";
                    (sectionContainerRef.current?.children[1] as HTMLDivElement).style.display = "flex";
                    (sectionContainerRef.current?.children[1] as HTMLDivElement).style.width = "100%";

                }
                else{
                    (sectionContainerRef.current?.children[0] as HTMLDivElement).style.display = "block";
                    (sectionContainerRef.current?.children[1] as HTMLDivElement).style.display = "none";
                    (sectionContainerRef.current?.children[0] as HTMLDivElement).style.width = "100%";

                }
            }
            else{
                (sectionContainerRef.current?.children[0] as HTMLDivElement).style.display = "block";
                (sectionContainerRef.current?.children[1] as HTMLDivElement).style.display = "flex";
                
                if(isOpen){
                (sectionContainerRef.current?.children[0] as HTMLDivElement).style.width = "180px";
                (sectionContainerRef.current?.children[1] as HTMLDivElement).style.width = "calc(100% - 180px)";
                    
                }
                else{
                (sectionContainerRef.current?.children[0] as HTMLDivElement).style.width = "320px";
                (sectionContainerRef.current?.children[0] as HTMLDivElement).style.width = "320px";
                (sectionContainerRef.current?.children[1] as HTMLDivElement).style.width = "calc(100% - 320px)";
                }
                
            }
        }
    }

    return (
        <div className={`${styles.mainContainer} flex h-dvh`} ref={sectionContainerRef}>
            <LeftSection />
            <RightSection />
        </div>
    )
}