export default function Components({ name, price }) {
  return (
    <a href="">
      <div className="bg-slate-300 w-64 h-96"></div>
      <div>
        <h2 className="text-xl">{name}</h2>
        <p>{price} R$</p>
      </div>
    </a>
  );
}
