//catefory from "Tutorial" component
const Category = ({ category }) => {
  return (
    <div className="bg-yellow-400 flex items-center justify-center rounded-full my-3 py-1 px-3">
      <p className="text-white text-sm">
        {category}
        {category === "Education" && <span className="fas fa-book text-base pl-2"></span>}
        {category === "Entertainment" && <span className="fas fa-gamepad text-base pl-2"></span>}
        {category === "Home" && <span className="fas fa-home text-base pl-2"></span>}
      </p>
    </div>
  );
};

export default Category;