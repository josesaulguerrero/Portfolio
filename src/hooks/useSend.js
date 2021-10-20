import { useState } from "react";
import { init, send } from 'emailjs-com';

export const useSend = () => {
   const [status, setStatus] = useState('initial');
   const Params = {
      userID: 'user_YwtetwnsXeNTtKH3K4p2N',
      templateID: 'template_43q0nkj',
      serviceID: 'service_1v3cfzt',
   };

   const sendData = (data) => {
      //the information is being sent, so we set the status to 'loading'
      setStatus('loading');

      //we init our library with our user ID
      init(Params.userID);
      /*
      send is a method, from emailjs, which receives four parameters:
         1 -> our vinculated service's ID
         2 -> then our template's ID
         3 -> the parameters that our template requires
         4 -> and finally, our user ID
      */
      send(
         Params.serviceID,
         Params.templateID,
         data,
         Params.userID
      )
         .then(res => setStatus('sent')) //if the information is sent correctly, we set the status to 'sent'
         .catch(err => setStatus('error')) // otherwise we set the status to 'error'
         .finally(() => setStatus('initial')); // and at the end we reset our status to 'initial'
   };

   return [status, sendData];
};