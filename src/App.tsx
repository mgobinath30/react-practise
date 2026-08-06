import Header from "./components/Header/Header";
import TabButton from "./components/TabButton/TabButton";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import React from "react";
import "./App.css";

type Concepts = {
  image: string;
  title: string;
  description: string;
};

type Examples = {
  title: string;
  description: string;
  code: string;
};

const tags: string[] = Object.keys(EXAMPLES);
/* 
When you write EXAMPLES[tag as keyof typeof EXAMPLES], you are saying three things to TypeScript:
typeof EXAMPLES \(\rightarrow \) "Look at the EXAMPLES object.
"keyof \(\rightarrow \) "Get a list of all the exact names inside it."
as \(\rightarrow \) "Trust me, my tag variable matches one of those names perfectly."
*/
export function App() {
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
    <>
      <Header />
      <div className="core-section">
        {CORE_CONCEPTS.map((item: Concepts) => (
          <CoreConcept key={item.title} {...item} />
        ))}
      </div>
      <h2>Examples</h2>
      <menu>
        {tags.map((tag: string, index: number) => (
          <TabButton
            isActiveTag={selectedTag?.title.toLowerCase() === tag.toLowerCase()}
            onSelect={() => handleTagContent(tag)}
            key={index}
          >
            {tag}
          </TabButton>
        ))}
      </menu>

      <div className="tab-section">
        <div className="tab-content">{tabContent}</div>
      </div>
    </>
  );
}
``;
