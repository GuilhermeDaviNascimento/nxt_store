export default function components({shirt}) {
  return (
    <div>
      <div className="flex">
        <div className="w-1/2 p-4 flex flex-col">
          <img
            src={shirt.image}
            alt="camisa"
            className="w-full h-auto rounded"
          />
          <div className="flex flex-nowrap gap-2 mt-4 justify-between">
            <img
              src={shirt.image}
              alt="camisa"
              className="w-1/6 h-auto object-cover rounded"
            />
            <img
              src={shirt.image}
              alt="camisa"
              className="w-1/6 h-auto object-cover rounded"
            />
            <img
              src={shirt.image}
              alt="camisa"
              className="w-1/6 h-auto object-cover rounded"
            />
            <img
              src={shirt.image}
              alt="camisa"
              className="w-1/6 h-auto object-cover rounded"
            />
            <img
              src={shirt.image}
              alt="camisa"
              className="w-1/6 h-auto object-cover rounded"
            />
          </div>
        </div>
        <div className="w-1/2 p-4 gap-10 flex flex-col">
          <h1 className="text-6xl">{shirt.name}</h1>
          <p className="text-xl">{shirt.description}</p>
          <p className="text-4xl">{shirt.price} R$</p>
        </div>
      </div>
    </div>
  );
}
