interface Props {
  image: string;
}

export default function BottomImages({ image }: Props) {
  return (
    <div className="bottom-img">
      <img src={image} alt="" width="100%" />
    </div>
  );
}
