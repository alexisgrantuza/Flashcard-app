"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-sm text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-white transition-colors"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ y: -20, opacity: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.7rem)] left-1/2 transform -translate-x-1/2">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-white dark:bg-zinc-900 backdrop-blur-sm rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-xl"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative w-full h-16 flex items-center border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-black/80 backdrop-blur-sm"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
  icon,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
  icon?: React.ReactNode;
}) => {
  return (
    <Link href={href} className="flex space-x-2 group">
      <div className="relative flex-shrink-0 w-[140px] h-[70px] rounded-md overflow-hidden shadow-md transition-transform group-hover:scale-105">
        <img src={src} alt={title} className="object-cover w-full h-full" />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
          {title}
        </h4>
        <p className="text-neutral-500 text-xs max-w-[10rem] dark:text-neutral-400">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, icon, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="flex items-start p-3 rounded-lg text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors"
    >
      {icon && <span className="inline-flex">{icon}</span>}
      <div className="flex flex-col">{children}</div>
    </Link>
  );
};
