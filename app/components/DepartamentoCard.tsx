import BedIcon from "./icons/BedIcon";

interface DepartamentoCardProps {
  title: string;
  price: string;
  variant?: "compact" | "featured";
}

export default function DepartamentoCard({
  title,
  price,
  variant = "featured",
}: DepartamentoCardProps) {
  if (variant === "compact") {
    return (
      <article className="bg-[#ffffffcb] backdrop-opacity-50 p-1 lg:p-4 flex items-center gap-1 min-w-[150px]">
        <div aria-hidden="true">
          <BedIcon size={25} />
        </div>
        <div className="flex-1">
          <h3 className="text-lg lg:text-2xl text-hp-leon-dorado m-0 uppercase font-cities-typeface">
            {title}
          </h3>
          <p className="text-sm lg:text-base text-[#3A3A3A] m-0 font-montserrat">
            {price}
          </p>
        </div>
      </article>
    );
  }

  return (
    <article className="bg-[#ffffffcb] backdrop-opacity-50 p-1 lg:p-4 flex items-center gap-2 min-w-[150px] shadow-lg">
      <div className="text-2xl hidden lg:block" aria-hidden="true">
        <BedIcon size={40} />
      </div>
      <div className="text-2xl hidden md:block lg:hidden" aria-hidden="true">
        <BedIcon size={25} />
      </div>
      <div className="text-2xl block md:hidden" aria-hidden="true">
        <BedIcon size={15} />
      </div>
      <div className="flex-1">
        <h3 className="text-lg lg:text-2xl text-hp-leon-dorado m-0 uppercase font-cities-typeface">
          {title}
        </h3>
        <p className="text-sm lg:text-base text-[#3A3A3A] m-0 font-montserrat">
          {price}
        </p>
      </div>
    </article>
  );
}
