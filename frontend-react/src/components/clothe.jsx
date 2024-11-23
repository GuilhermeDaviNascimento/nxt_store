import { Link } from "react-router-dom";

export default function Components({ name, price, image, link }) {
  return (
    <Link to={link}>
      {/* <img src={image} className="w-64 h-96 object-cover" /> */}
      <img src={image} alt='camisa' className="w-64 aspect-[2/3] object-cover" />
      <div>
        <h2 className="text-xl">{name}</h2>
        <p>{price} R$</p>
      </div>
    </Link>
  );
}
