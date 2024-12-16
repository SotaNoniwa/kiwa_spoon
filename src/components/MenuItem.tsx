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
    <a
      href={url}
      className="block bg-white shadow-lg overflow-hidden transition transform hover:scale-105 hover:shadow-xl"
    >
      <div className="flex items-center justify-center h-48 bg-gray-200">
        <img
          src={image.src}
          alt={image.alt}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-sm text-gray-600 mb-4">
          {description.slice(0, 50)}...
        </p>
        <p className="text-gray-900 font-semibold">
          &yen;{formatCurrency(price)}
        </p>
        {allergies.length > 0 && (
          <p className="text-sm text-gray-500">
            <strong>Allergies:</strong> {allergies.join(", ")}
          </p>
        )}
      </div>
    </a>
  );
};

export default MenuItem;
