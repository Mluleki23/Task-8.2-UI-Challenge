interface Props {
  image: string;
}
export default function Image({ image }: Props) {
  return (
    <div
      className="image"
      style={{
        backgroundImage: `url(${image})`,
      }}
    ></div>
  );
}
