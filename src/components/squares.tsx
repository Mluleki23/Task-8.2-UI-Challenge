interface Props {
  title: string;
  subtitle: string;
  link: string;
  underlyingcolour: string;
}
export default function Squares({
  title,
  subtitle,
  link,
  underlyingcolour,
}: Props) {
  return (
    <div className="Squares">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <a className={underlyingcolour}>{link}</a>
    </div>
  );
}
