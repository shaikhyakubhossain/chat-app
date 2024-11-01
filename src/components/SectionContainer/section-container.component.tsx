"use client";
import React, { useEffect, useRef } from "react";
import styles from "./section-container.module.scss";
import LeftSection from "../LeftSection/left-section.component";
import RightSection from "../RightSection/right-section.component";
import TopLoading from "../TopLoading/top-loading.component";
import UserAuth from "../UserAuth/user-auth.component";

import type { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

export default function SectionContainer(): JSX.Element {
  const isOpen = useSelector(
    (state: RootState) => state.mainMobileWindow.isOpen
  );
  const token = useSelector((state: RootState) => state.authDetail.token);

  const sectionContainerRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    handleSectionSizeToggle();
    window.addEventListener("resize", handleSectionSizeToggle);

    return () => {
      window.removeEventListener("resize", handleSectionSizeToggle);
    };
  }, [isOpen]);

  const handleSectionSizeToggle = () => {
    if (
      sectionContainerRef.current?.children[0] &&
      sectionContainerRef.current?.children[1]
    ) {
      if (window.innerWidth < 890) {
        if (isOpen) {
          (
            sectionContainerRef.current?.children[0] as HTMLDivElement
          ).style.display = "none";
          (
            sectionContainerRef.current?.children[1] as HTMLDivElement
          ).style.display = "flex";
          (
            sectionContainerRef.current?.children[1] as HTMLDivElement
          ).style.width = "100%";
        } else {
          (
            sectionContainerRef.current?.children[0] as HTMLDivElement
          ).style.display = "block";
          (
            sectionContainerRef.current?.children[1] as HTMLDivElement
          ).style.display = "none";
          (
            sectionContainerRef.current?.children[0] as HTMLDivElement
          ).style.width = "100%";
        }
      } else {
        (
          sectionContainerRef.current?.children[0] as HTMLDivElement
        ).style.display = "block";
        (
          sectionContainerRef.current?.children[1] as HTMLDivElement
        ).style.display = "flex";

        if (isOpen) {
          // (
          //   sectionContainerRef.current?.children[0] as HTMLDivElement
          // ).style.width = "180px";
          // (
          //   sectionContainerRef.current?.children[1] as HTMLDivElement
          // ).style.width = "calc(100% - 180px)";
        } else {
          (
            sectionContainerRef.current?.children[0] as HTMLDivElement
          ).style.width = "320px";
          (
            sectionContainerRef.current?.children[0] as HTMLDivElement
          ).style.width = "320px";
          (
            sectionContainerRef.current?.children[1] as HTMLDivElement
          ).style.width = "calc(100% - 320px)";
        }
      }
    }
  };

  return (
    <div className={`${styles.mainContainer} `}>
      <TopLoading />
        <div ref={sectionContainerRef} className="flex h-dvh">
      {
          token ?
          <>
          <LeftSection />
          <RightSection />
          </>
          :
          <UserAuth />
        }
        </div>
    </div>
  );
}
