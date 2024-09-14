import midPhoto from "../svgs/middle.svg";
import rightPhoto from "../svgs/right.svg";
import leftPhoto from "../svgs/left.svg";

// JEITO PORCO DE FAZER AS FOTOS MAS FOI O QUE DEU, MUDAR DEPOIS 

function galery() {
  return (
    <div className="w-full flex items-center justify-around">
        <div>
            <img src={leftPhoto} alt="" />
        </div>
        <div>
            <img src={midPhoto} alt="" />
        </div>
        <div>
            <img src={rightPhoto} alt="" />
        </div>
    </div>
  );
}

export default galery;
