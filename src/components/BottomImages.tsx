interface Props {
    image : string
}

export default function BottomImages({image}: Props) {
  return (
    <div>
      <img src={image} alt="" width="100%" />
    </div>
  )
}
