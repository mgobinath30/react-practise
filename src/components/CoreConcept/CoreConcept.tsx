import "./CoreConcept.css";

type Concepts = {
  image: any;
  title: string;
  description: string;
};

export default function CoreConcept({ image, title, description }: Concepts) {
  return (
    <div className="core-concept">
      <img src="./assets/1.jpeg" alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
