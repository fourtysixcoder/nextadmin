import { User, Plantation, Palmtree } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

export const fetchPlantations = async () => {
  try {
    connectToDB();
    const plantations = await Plantation.find();
    return plantations;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

export const fetchPalmtrees = async (q, page) => {
  const regex = new RegExp(q, "i");
  try {
    connectToDB();
    const palmtrees = await Palmtree.find({
      palmtrees: { $regex: regex },
    }).count();
    const palmtrees = await Palmtree.find({ taggingID: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return palmtrees;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};
