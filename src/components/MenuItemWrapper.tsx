import BaseLayout from "../layouts/BaseLayout.astro";
import MenuItem from "../components/MenuItem";

const MenuItemWrapper = ({ menuType }: { menuType: string }) => {
  const allItems = Object.values(
    import.meta.glob("../pages/menuItems/*.md", { eager: true })
  );

  const filteredItems = allItems.filter(
    (item: any) => item.frontmatter.menuType === menuType
  );

  return (
    <>
      <section className="py-16 px-8 md:px-16 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">メニュー</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredItems.map((item: any) => (
              <MenuItem
                name={item.frontmatter.name}
                description={item.frontmatter.description}
                price={item.frontmatter.price}
                allergies={item.frontmatter.allergies}
                image={item.frontmatter.image}
                url={item.frontmatter.url}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MenuItemWrapper;
