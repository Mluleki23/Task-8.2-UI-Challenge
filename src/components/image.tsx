interface Props {
  image: string;
}
export default function Image({ image }: Props) {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100%",
      }}
    ></div>
  );
}
