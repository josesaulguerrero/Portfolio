//libraries and hooks
import { useState } from "react";
//assets
//components
import { Button } from "./Button";

export const Form = () => {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
   });
   const { name, email, message } = formData;
   const onChange = (event) => {
      const { name, value } = event.target;
      setFormData({
         ...formData,
         [name]: value,
      });
   };
   const onSubmit = (event) => {
      event.preventDefault();
      console.log(formData);
      setFormData({
         name: '',
         email: '',
         message: '',
      });
   };
   return (
      <form className="Form" onSubmit={onSubmit}>
         <label htmlFor='name' className='input'>
            <span className='input__label'>Your name</span>
            <input
               id='name'
               type='text'
               name='name'
               className='input__field'
               autoComplete='off'
               value={name}
               onChange={onChange}
               required
            />
         </label>
         <label htmlFor='email' className='input'>
            <span className='input__label'>Your email address</span>
            <input
               id='email'
               type='email'
               name='email'
               className='input__field'
               autoComplete='off'
               value={email}
               onChange={onChange}
               required
            />
         </label>
         <label htmlFor='message' className='input'>
            <span className='input__label'>Your incredible ideas 💫</span>
            <textarea
               id='message'
               name='message'
               className='input__field'
               value={message}
               onChange={onChange}
               required
            ></textarea>
         </label>
         <Button size='large'>Send it!</Button>
      </form>
   );
};