import { FaRegClock } from "react-icons/fa";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
const FoodCard = ({ food ,handleCookie}) => {
  return (
    <div className="space-y-4 rounded-lg  p-6 shadow-lg w-[350px] bg-white">
      <img
        alt="card navigate ui"
        className="w-[350px] h-[275px] object-cover  rounded-lg "
        src={food.img}
      />
      <div className="grid gap-2">
        <h1 className="text-lg font-semibold ">{food.name}</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {food.description}
        </p>
      </div>
      <hr />
      <div className="">
        <p className=" text-lg font-semibold">Ingredients: {food.ingredients.length}</p>
        {food.ingredients.map((f) => (
          <>
            <li key={f}>{f}</li>
          </>
        ))}
      </div>
      <hr />
      <div className="flex gap-5">
        <div className="flex gap-3  items-center">
          <FaRegClock /> {food.time} <p>minutes</p>
        </div>
        <div className="flex gap-3 items-center">
          <MdOutlineLocalFireDepartment />
          {food.Calories} minutes
        </div>
      </div>
      <button onClick={(e)=>handleCookie(food)} className="px-4 py-2 bg-[#6f31fa] text-white rounded-md"> want to cook</button>
    </div>
  );
};

export default FoodCard;
