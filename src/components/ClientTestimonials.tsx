interface Props {
  image: string;
  subtitle: string;
  name: string;
  workname: string;
}

export default function ClientTestimonials({
  
  image,
  subtitle,
  name,
  workname,
}: Props) {
  return (
    <div className="testimonials">
      <div className="profile-container">
        <img src={image} alt="" width="100%" />
      </div>

      
      <p>{subtitle}</p>
      <p className="names">{name}</p>
      <p>{workname}</p>
    </div>
  );
}
