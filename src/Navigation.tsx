import React from "react";
import { motion } from "framer-motion";

function Navigation() {
  const [hoveredNavItem, setHoveredNavItem] = React.useState<string | null>(
    null,
  );
  const id = React.useId();

  return (
    <nav onMouseLeave={() => setHoveredNavItem(null)}>
      <ul>
        {LINKS.map(({ slug, label, href }, index) => {
          const red = index === 0 ? 255 : 0;
          const green = index === 1 ? 255 : 0;
          const blue = index === 2 ? 255 : 0;

          return (
            <li key={slug} style={{ zIndex: hoveredNavItem === slug ? 1 : 2 }}>
              {hoveredNavItem === slug && (
                <motion.div
                  layoutId={id}
                  style={{
                    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
                  }}
                  className="hovered-backdrop"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 20,
                    damping: 40,
                  }}
                  animate={{
                    borderRadius: 32,
                  }}
                />
              )}

              <a href={href} onMouseEnter={() => setHoveredNavItem(slug)}>
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

const LINKS = [
  {
    slug: "home",
    label: "Home",
    href: "/",
  },
  {
    slug: "usage",
    label: "Usage",
    href: "/usage",
  },
  {
    slug: "integrations",
    label: "Integrations",
    href: "/integrations",
  },
];

export default Navigation;
