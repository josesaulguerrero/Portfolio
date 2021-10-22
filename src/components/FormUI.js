//libraries and hooks
//assets
import '../assets/styles/Form.css';
//components
import { Button } from "./Button";
import { Loader } from "./Loader";

export const FormUI = ({
   onChange,
   onSubmit,
   status: { initial, loading, sent, error },
   formData: { name, email, message }
}) => {
   return (
      <>
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
            {sent === true && <p className='success' >the message was succesfully sent!</p>}
            {error === true && <p className='error'>the message couldn't be sent, please try again later...</p>}
            <Button size='large' disabled={loading && true}>
               {(initial || error || sent) ? 'send it!' : <Loader />}
            </Button>
         </form>
      </>
   );
};