import { formatCurrency } from "../scripts/formatCurrency";

interface IProps {
  name: string;
  description: string;
  price: number;
  allergies: string[];
  image: { src: string; alt: string };
  url: string;
}

const MenuItem = ({
  name,
  description,
  price,
  allergies,
  image,
  url,
}: IProps) => {
  return (
    <>
      <a href={url}>
        <div className="dish bg-gray-50 shadow-lg rounded-lg overflow-hidden">
          <div className="flex items-center justify-center h-96">
            <img src={image.src} alt={image.alt} className="object-cover" />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            {/* <p className="text-gray-700">{description.slice(0, 20)}...</p> */}
            {/* <p className="text-gray-600">&yen;{formatCurrency(price)}</p> */}
          </div>
        </div>
      </a>
    </>
  );
};

export default MenuItem;
