
import Clothe from "./clothe";

export default function Components({ gender, clothes }) {
  return (
    <div>
      <h1 className="text-orange-500 text-3xl mb-5">
        {gender}
      </h1>
      <div id="men mt-5">
        <div className="flex overflow-x-auto space-x-6">
          {clothes.map((clothe) => (
            <Clothe name={clothe.name} price={clothe.price} />
          ))}
        </div>
      </div>
    </div>
  );
}
