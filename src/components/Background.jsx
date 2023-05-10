import Image from "next/image";
import pokeball1 from "../assets/pokeball.png";
import pokeball2 from "../assets/pokeball2.png";

export default function Background() {
  return (
    <div className="background">
      
      <Image src={pokeball1} alt="" className="pokeball pokeball-1" />
      <Image src={pokeball2} alt="" className="pokeball pokeball-2" />
      <Image src={pokeball1} alt="" className="pokeball pokeball-3" />
      <Image src={pokeball2} alt="" className="pokeball pokeball-4" />
      <Image src={pokeball1} alt="" className="pokeball pokeball-5" />
      <Image src={pokeball2} alt="" className="pokeball pokeball-6" />
    </div>
  );
}
