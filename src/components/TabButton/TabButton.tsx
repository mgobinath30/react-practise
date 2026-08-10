import React from "react";

// type TabButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
//   children: React.ReactNode;
//   isActiveTag?: boolean;
// };

export default function TabButton({
  children,
  isActiveTag,
  ...props
}: {
  children: React.ReactNode;
  isActiveTag?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const mergedClassName = isActiveTag ? "active" : "";

  return (
    <li>
      <button {...props} className={mergedClassName}>
        {children}
      </button>
    </li>
  );
}
