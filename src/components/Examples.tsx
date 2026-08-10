import { EXAMPLES } from "../data";
import TabButton from "./TabButton/TabButton";
import React from "react";
import Section from "./Section";

type Examples = {
  title: string;
  description: string;
  code: string;
};

const tags: string[] = Object.keys(EXAMPLES);

export default function Example({
  ButtonContainer = "menu",
}: {
  ButtonContainer?: React.ElementType;
}) {
  const [selectedTag, setSelectedTag] = React.useState<Examples | null>(null);

  const handleTagContent = (tag: string) => {
    setSelectedTag(EXAMPLES[tag as keyof typeof EXAMPLES]);
  };

  let tabContent: React.ReactNode =
    "Please select a tag to see the example code.";
  if (selectedTag) {
    tabContent = (
      <div>
        <h3>{selectedTag.title}</h3>
        <p>{selectedTag.description}</p>
        <pre>
          <code>{selectedTag.code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="Examples">
      <ButtonContainer>
        {tags.map((tag: string, index: number) => (
          <TabButton
            isActiveTag={selectedTag?.title.toLowerCase() === tag.toLowerCase()}
            key={index}
            onClick={() => handleTagContent(tag)}
          >
            {tag}
          </TabButton>
        ))}
      </ButtonContainer>

      <div className="tab-section">
        <div className="tab-content">{tabContent}</div>
      </div>
    </Section>
  );
}
