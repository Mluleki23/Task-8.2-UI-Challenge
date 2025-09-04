interface Props {
  image: string;
  title: string;
  subtitle: string;
}

export default function Fruits({ image, title, subtitle } : Props) {
  return (
    <div
      className="Fruits"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100%",
      }}
    >
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
