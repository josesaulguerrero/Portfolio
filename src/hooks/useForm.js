import { useState } from "react";

export const useForm = (formFields) => {
   const [data, setData] = useState(formFields);

   const updateForm = (key, value) => {
      setData({
         ...data,
         [key]: value,
      });
   };

   const resetForm = () => {
      setData(formFields);
   };

   return {
      data,
      updateForm,
      resetForm
   };
};