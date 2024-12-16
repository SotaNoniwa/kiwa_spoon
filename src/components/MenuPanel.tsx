interface IProps {
  title: string;
  link: string;
  imageSrc: string;
}

const MenuPanel = ({ title, link, imageSrc }: IProps) => {
  return (
    <>
      <>
        <a href={link}>
          <div className="dish bg-gray-50 shadow-lg overflow-hidden border-4 border-yellow-400">
            <div className="flex items-center justify-center h-96">
              <img src={imageSrc} alt={title} className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
            </div>
          </div>
        </a>
      </>
    </>
  );
};

export default MenuPanel;
