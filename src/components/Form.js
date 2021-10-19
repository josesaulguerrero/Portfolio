//libraries and hooks
//assets
//components
import { Button } from "./Button";

export const Form = () => {
   return (
      <form className="Form">
         <label htmlFor='name' className='input'>
            <span className='input__label'>Your name</span>
            <input
               id='name'
               name='name'
               className='input__field'
            />
         </label>
         <label htmlFor='email' className='input'>
            <span className='input__label'>Your name</span>
            <input
               id='email'
               name='email'
               className='input__field'
            />
         </label>
         <label htmlFor='message' className='input'>
            <span className='input__label'>Your name</span>
            <textarea
               id='message'
               name='message'
               className='input__field'
            ></textarea>
         </label>
         <Button size='large'>Send it!</Button>
      </form>
   );
};