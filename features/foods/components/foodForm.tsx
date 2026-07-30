// import { UpdateFoodFormData } from "../schemas/UpdateFood.schema";

// interface FoodFormProps{

//     defaultValues?:{
//         name:string;
//         recipe:string;
//         categoryId:string;
//     }

//     loading:boolean;

//     onSubmit:(data:UpdateFoodFormData)=>void;
// }

// export default function FoodForm({
//     defaultValues,
//     loading,
//     onSubmit,
// }: FoodFormProps) {
//     return (
//         <div className="">
//             {isEditingMode == "Edit" && (
//                 <div
//                     className="absolute flex items-center justify-center inset-0
//                                             z-40 bg-black/50">
//                     <div className="bg-emerald-50 rounded-lg w-96 z-50
//                                                         border border-gray-400 shadow-md
//                                                         py-8 px-10">
//                         <form
//                             onSubmit={handleSubmit(onSubmit)}
//                             className="flex flex-col gap-4 items-center">
//                             <span className="text-xl">ویرایش غذا</span>

//                             <TextField style={{ width: "100%" }} size="small"
//                                 placeholder="نام غذا :"
//                                 variant="outlined"
//                                 {...register("name")}
//                                 error={!!parsedError?.fieldErrors?.Name}
//                                 helperText={!!parsedError?.fieldErrors?.Name?.[0]}
//                             />

//                             <TextareaAutosize
//                                 style={{ width: "100%" }}
//                                 placeholder="طرز تهیه: "
//                                 {...register("recipe")}
//                             />

//                             {errors.name && (
//                                 <p className="text-red-400">{errors.name.message}</p>
//                             )}

//                             <SelectCategory
//                                 onSelect={handleSlection}
//                             />

//                             <div className="text-red-400">{categoryIdError}</div>

//                             <div className="flex items-center gap-2 w-full">
//                                 <button
//                                     type="submit"
//                                     disabled={isSubmitting || updateFoodIsPending}
//                                     className="bg-blue-400 text-white px-4 py-1.5
//                                                                     rounded-lg transition-all duration-200 hover:scale-105
//                                                                     shadow-md hover:shadow-xl"
//                                 >

//                                     {isSubmitting || updateFoodIsPending ? "در حال ارسال..." : "ثبت"}
//                                 </button>

//                                 <button
//                                     onClick={() => {
//                                         setIsEditingMode("close"),
//                                             reset(),
//                                             setCategoryIdError("")
//                                     }}
//                                     className="bg-red-500 text-white px-3 py-1.5 rounded-lg
//                                                                             transition-all duration-200 hover:scale-105
//                                                                             shadow-md hover:shadow-xl"
//                                 >انصراف
//                                 </button>
//                             </div>

//                             {updateFoodIsError && (
//                                 <p className="text-red-500 text-center">
//                                     {(updateFoodError as Error).message}
//                                 </p>
//                             )}

//                             {parsedError?.message && (
//                                 <p className="text-red-500 text-center">
//                                     {parsedError.message}
//                                 </p>
//                             )}
//                         </form>
//                     </div>
//                 </div>
//             )}
//             {isEditingMode == "Create" && (
//                 <div>
//                     <div
//                         className="fixed flex items-center justify-center inset-0
//                                             z-40 bg-black/50">
//                         <div className="bg-emerald-50 rounded-lg w-96 z-50 border 
//                         border-gray-400 shadow-md py-8 px-10">
//                             <form
//                                 onSubmit={handleSubmit(onCreateSubmit)}
//                                 className="flex flex-col gap-4 items-center">
//                                 <span className="text-xl">افزودن غذا</span>

//                                 <TextField style={{ width: "100%" }} size="small"
//                                     placeholder="نام غذا :"
//                                     variant="outlined"
//                                     {...register("name")}
//                                     error={!!parsedError?.fieldErrors?.Name}
//                                     helperText={!!parsedError?.fieldErrors?.Name?.[0]}
//                                 />

//                                 {errors.name && (
//                                     <p className="text-red-400">{errors.name.message}</p>
//                                 )}

//                                 <SelectCategory
//                                     onSelect={handleSlection}
//                                 />

//                                 <div className="text-red-400">{categoryIdError}</div>

//                                 <div className="flex items-center gap-2 w-full">
//                                     <button
//                                         type="submit"
//                                         disabled={isSubmitting || createFoodIsPendig}
//                                         className="bg-blue-400 text-white px-4 py-1.5
//                                                                     rounded-lg transition-all duration-200 hover:scale-105
//                                                                     shadow-md hover:shadow-xl"
//                                     >

//                                         {isSubmitting || createFoodIsPendig ? "در حال ارسال..." : "ثبت"}
//                                     </button>

//                                     <button
//                                         onClick={() => {
//                                             setIsEditingMode("close"),
//                                                 reset(),
//                                                 setCategoryIdError("")
//                                         }}
//                                         className="bg-red-500 text-white px-3 
//                                         py-1.5 rounded-lg transition-all duration-200 
//                                         hover:scale-105 shadow-md hover:shadow-xl"
//                                     >انصراف
//                                     </button>
//                                 </div>

//                                 {createFoodIsError && (
//                                     <p className="text-red-500 text-center">
//                                         {(createFoodError as Error).message}
//                                     </p>
//                                 )}

//                                 {parsedError?.message && (
//                                     <p className="text-red-500 text-center">
//                                         {parsedError.message}
//                                     </p>
//                                 )}
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     )
// }