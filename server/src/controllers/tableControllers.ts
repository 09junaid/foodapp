// import { Request, Response } from "express";
// import prisma from "../config/db.js";
// // import { Prisma } from "@prisma/client";

// // ✅ Create Table
// export const createTable = async (
//   req: Request,
//   res: Response
// ): Promise<any> => {
//   try {
//     const { table_number, seating_capacity } = req.body;
//     const existingTable = await prisma.table.findUnique({
//       where: { table_number },
//     });
//     if (existingTable) {
//       return res.status(409).json({ message: "Table already exists" });
//     }
//     const table = await prisma.table.create({
//       data: {
//         table_number,
//         seating_capacity,
//       },
//     });
//     return res
//       .status(201)
//       .json({ message: "Table created successfully", table });
//   } catch (error) {
//     console.error("Error creating table:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// // ✅ Get All Tables

// export const getAllTables = async (
//   req: Request,
//   res: Response
// ): Promise<any> => {
//   try {
//     const getTable=await prisma.table.findMany();
//     if(!getTable||getTable.length===0){
//       return res.status(404).json({ message: "No table founds" });
//     }
//     return res.status(200).json(getTable);
//   } catch (error) {
//     console.error("Error creating table:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// // ✅ Get tables by id
// export const getTableById=async(req:Request,res:Response):Promise<any> =>{
//   try {
//     const {id}=req.params;
//     const getById=await prisma.table.findUnique({
//      where:{id:Number(id)}
//     })
//     if(!getById){
//       return res.status(404).json({ message: "No table founds" });
//     }
//     return res.status(200).json(getById);
    
//   } catch (error) {
//     console.error("Error creating table:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// }
// // ✅ Update Table
// export const updateTable=async(req:Request,res:Response):Promise<any> =>{
//   try {
//     const {id}=req.params;
//     const { table_number, seating_capacity } = req.body;
//     const updateById=await prisma.table.update({
//       where:{id:Number(id)},
//       data:{table_number, seating_capacity }
//     })
//     return res.status(200).json({success:true,message:"New Table Update",table:updateById})
    
//   } catch (error) {
//     console.error("Error updataing table:", error);
//     res.status(500).json({ message: "Internal server error" });
    
//   }
// }



// // ✅ Delete Table
// export const deleteTable=async(req:Request,res:Response):Promise<any> =>{
//   try {
//     const {id}=req.params;
//     const deleteItem=await prisma.table.delete({
//       where:{id:Number(id)}
//     })
//     if(!deleteItem){
//       return res.status(404).json({error:"tables not found"})
//     }
//     return res.status(200).json({message:"table deleted successfully"})
    
//   } catch (error) {
//     console.error("Error deleting table:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// }