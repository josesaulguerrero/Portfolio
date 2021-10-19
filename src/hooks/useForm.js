import { useState } from "react";

export const useForm = (formFields) => {
   //we declare the state for the fields that our form will contain.
   const [formData, setFormData] = useState(formFields);

   //this function receives a key and a value that help us update our form status.
   const changeFormData = (key, value) => {
      setFormData({
         ...formData,
         [key]: value,
      });
   };

   //and resetForm helps us reset all of our form fields.
   const resetForm = () => {
      setFormData(formFields);
   };

   return [
      formData,
      changeFormData,
      resetForm
   ];
};