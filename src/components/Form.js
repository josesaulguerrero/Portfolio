//libraries and hooks
import { useForm } from '../hooks/useForm';
import { useMailer } from '../hooks/useMailer';
//assets
import '../assets/styles/Form.css';
//components
import { Button } from "./Button";
import { Loader } from "./Loader";

export const Form = () => {
   const { data, updateForm, resetForm } = useForm({
      name: '',
      email: '',
      message: '',
   });
   //---------------------------------------
   const [status, sendData] = useMailer();
   const { initial, loading, sent, error } = status;

   const onChange = (event) => {
      updateForm(event.target.name, event.target.value);
   };

   const onSubmit = (event) => {
      event.preventDefault();
      sendData(data);
      resetForm();
   };

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
                  value={data.name}
                  autoComplete='on'
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
                  value={data.email}
                  autoComplete='on'
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
                  value={data.message}
                  onChange={onChange}
                  required
               ></textarea>
            </label>
            {sent === true && <p className='success' >the message was successfully sent!</p>}
            {error === true && <p className='error'>the message couldn't be sent, please try again later...</p>}
            <Button size='large' disabled={loading && true}>
               {(sent || error || initial) ? 'Send it!' : <Loader />}
            </Button>
         </form>
      </>
   );
};