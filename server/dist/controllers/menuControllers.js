// import {Request,Response} from 'express';
// import prisma from '../config/db.js';
export {};
// // ✅ Create Menu Item
// export const createMenuItem = async (req: Request, res: Response): Promise<any> => {
//   try {
//     const { item_name, description, price } = req.body;
//     const newItem = await prisma.menuItem.create({
//       data: { item_name, description, price }
//     });
//    return res.status(201).json({ message: "Menu item created", item: newItem });
//   } catch (error) {
//     console.error("Menu item creation error:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };
// // ✅ Get All Menu Item
// export const getAllMenuItems = async (req: Request, res: Response): Promise<any> => {
//   try {
//     const menuItems = await prisma.menuItem.findMany();
//     if (!menuItems || menuItems.length === 0) {
//       return res.status(404).json({ message: "No menu items found" });
//     }
//     return res.status(200).json(menuItems);
//   } catch (error) {
//     console.error("Error fetching menu items:", error);
//     return res.status(500).json({ error: "Internal server error" });
//   }
// }
// // ✅ Get Menu Item by ID
// export const getMenuItemById = async (req: Request, res: Response): Promise<any> => {
//   try {
//     const { id } = req.params;
//     const menuItem = await prisma.menuItem.findUnique({
//       where: { id: Number(id) }
//     });
//     if (!menuItem) {
//       return res.status(404).json({ message: "Menu item not found" });
//     }
//     return res.status(200).json(menuItem);
//   } catch (error) {
//     console.error("Error fetching menu item:", error);
//     return res.status(500).json({ error: "Internal server error" });
//   }
// }
// // ✅ Update Menu Item by ID
// export const updateMenuItemById = async (req: Request, res: Response): Promise<any> => {
//   try {
//     const { id } = req.params;
//     const { item_name, description, price } = req.body;
//     const updatedItem = await prisma.menuItem.update({
//       where: { id: Number(id) },
//       data: { item_name, description, price }
//     });
//     return res.status(200).json({ message: "Menu item updated", item: updatedItem });
//   } catch (error) {
//     console.error("Error updating menu item:", error);
//     return res.status(500).json({ error: "Internal server error" });
//   }
// }
// // ✅ Delete Menu Item by ID
// export const deleteMenuItemById = async (req: Request, res: Response): Promise<any> => {
//   try {
//     const { id } = req.params;
//     const deletedItem = await prisma.menuItem.delete({
//       where: { id: Number(id) }
//     });
//     if (!deletedItem) {
//       return res.status(404).json({ message: "Menu item not found" });
//     }
//     return res.status(200).json({success:true, message: "Menu item deleted Successfully" });
//   } catch (error) {
//     console.error("Error deleting menu item:", error);
//     return res.status(500).json({ error: "Internal server error" });
//   }
// }
// // ✅ Delete All Menu Items
// export const deleteAllMenuItems = async (req: Request, res: Response): Promise<any> => {
//   try {
//     await prisma.menuItem.deleteMany();
//     return res.status(200).json({ message: "All menu items deleted" });
//   } catch (error) {
//     console.error("Error deleting all menu items:", error);
//     return res.status(500).json({ error: "Internal server error" });
//   }
// }
