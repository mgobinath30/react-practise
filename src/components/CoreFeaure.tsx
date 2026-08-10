import React from "react";
import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept/CoreConcept";
import Section from "./Section";
type Concepts = {
  image: string;
  title: string;
  description: string;
};
export default function CoreFeature({
  children,
  ...props
}: { children?: React.ReactNode } & React.HTMLAttributes<HTMLElement>) {
  return (
    <Section title="Core Features" id="core-features" {...props}>
      {children}
      <div className="core-section">
        {CORE_CONCEPTS.map((item: Concepts) => (
          <CoreConcept key={item.title} {...item} />
        ))}
      </div>
    </Section>
  );
}
