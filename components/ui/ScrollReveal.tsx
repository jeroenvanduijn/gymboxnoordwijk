"use client";

import { motion, useInView, UseInViewOptions } from "framer-motion";
import { useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    width?: "fit-content" | "100%";
    delay?: number;
    duration?: number;
    threshold?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    distance?: number;
}

export default function ScrollReveal({
    children,
    className,
    width = "fit-content",
    delay = 0,
    duration = 0.5,
    threshold = 0.1,
    direction = "up",
    distance = 50,
}: ScrollRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: threshold });

    const getInitial = () => {
        switch (direction) {
            case "up":
                return { opacity: 0, y: distance };
            case "down":
                return { opacity: 0, y: -distance };
            case "left":
                return { opacity: 0, x: distance };
            case "right":
                return { opacity: 0, x: -distance };
            case "none":
            default:
                return { opacity: 0 };
        }
    };

    const getAnimate = () => {
        switch (direction) {
            case "up":
            case "down":
                return { opacity: 1, y: 0 };
            case "left":
            case "right":
                return { opacity: 1, x: 0 };
            case "none":
            default:
                return { opacity: 1 };
        }
    };

    return (
        <div ref={ref} style={{ width, overflow: "hidden" }} className={className}>
            <motion.div
                variants={{
                    hidden: getInitial(),
                    visible: getAnimate(),
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration, delay, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>
    );
}
