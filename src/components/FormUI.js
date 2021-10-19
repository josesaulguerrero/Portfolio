//libraries and hooks
//assets
//components
import { Button } from "./Button";

export const FormUI = ({ onChange, onSubmit, status, formData: { name, email, message } }) => {
   console.log(status);
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