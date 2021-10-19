//libraries and hooks
import { useState } from "react";
import { init, send } from 'emailjs-com';

//assets
//components
import { Button } from "./Button";

export const Form = () => {
   init("user_YwtetwnsXeNTtKH3K4p2N");
   const User_ID = 'user_YwtetwnsXeNTtKH3K4p2N';
   // const Access_Token = 'e358cfd08e6caad7bc0bcfdf86fa245b';
   const template_ID = 'template_43q0nkj';
   const service_ID = 'service_1v3cfzt';
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
   });
   const params = {
      ...formData
   };
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
      send(
         service_ID,
         template_ID,
         params,
         User_ID
      ).then(console.log);
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