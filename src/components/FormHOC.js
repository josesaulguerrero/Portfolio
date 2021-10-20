//libraries and hooks
import { useForm } from '../hooks/useForm';
import { useSend } from '../hooks/useSend';
//assets
//components

export const FormHOC = ({ Component }) => {
   //useForm handles the changes in the input fields
   const [formData, updateForm, resetForm] = useForm({
      name: '',
      email: '',
      message: '',
   });

   //whereas useSend sends the form information when the submit button is clicked. status allows us to find out whether the form data was succesfully sent or not.
   const [status, sendData] = useSend();

   const onChange = (event) => {
      // we get the input's name and value from event.target
      const { name, value } = event.target;
      //and we update the form status.
      updateForm(name, value);
   };
   const onSubmit = (event) => {
      //we prevent the page from re-loading
      event.preventDefault();
      //we pass sendData the form data that we want to send.
      sendData(formData);
      //and finally we reset all the inputs' values.
      resetForm();
   };
   return (
      <Component
         onChange={onChange}
         onSubmit={onSubmit}
         formData={formData}
         status={status}
      />
   );
};