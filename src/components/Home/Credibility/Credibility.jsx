import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from "framer-motion";
import { useRef } from "react";
import logos from "../../../assets/index";
const wrap = (min, max, v) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function ParallaxText() {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 300,
    });
    const skewVelocity = useSpring(scrollVelocity, {
        stiffness: 100,
        damping: 30,
    });

    const skewVelocityFactor = useTransform(
        skewVelocity,
        [-1000, 1000],
        [-30, 30]
    );

    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false,
    });
    const x = useTransform(baseX, (v) => `${wrap(10, 25, v)}%`);
    const directionFactor = useRef(1);

    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * -5 * (delta / 1000);
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }
        if (velocityFactor.get() !== 0) {
            moveBy += directionFactor.current * moveBy * velocityFactor.get();
            baseX.set(baseX.get() + moveBy);
        }
    });

    return (
        <div className="">
            <h1 className="text-3xl font-bold text-center font-plus-jakarta-sans">From Small Business to Enterprises, Everyone Loves Us</h1>
        <motion.div className=" scroller" style={{ x }}>
            <motion.span className="flex space-y-2 overflow-hidden" style={{ skew: skewVelocityFactor }}>
                {logos.map((logo) => (
                    <img
                        key={logo.id}
                        src={logo}
                        alt={logo}
                        className="w-1/2 md:w-1/3 lg:w-1/3 "
                    />
                ))}
            </motion.span>
        </motion.div>
        </div>
    );
}
