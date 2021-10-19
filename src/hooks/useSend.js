import { useState } from "react";
import { init, send } from 'emailjs-com';

export const useSend = () => {
   const [status, setStatus] = useState('inital');
   const sendParams = {
      userID: 'user_YwtetwnsXeNTtKH3K4p2N',
      templateID: 'template_43q0nkj',
      serviceID: 'service_1v3cfzt',
   };

   const sendData = (data) => {
      //we init our library
      init(sendParams.userID);
      //the information is being sent, so we set the status to 'loading'
      setStatus('loading');
      /*
      send is a method, from emailjs, which receives four parameters:
         1 -> our vinculated service's ID
         2 -> then our template's ID
         3 -> the parameters that our template requires
         4 -> and finally, our user ID
      */
      send(
         sendParams.serviceID,
         sendParams.templateID,
         data,
         sendParams.userID
      )
         .then(res => setStatus('sent')) //if the information is sent correctly, we set the status to 'sent'
         .catch(err => setStatus('error')) // otherwise we set the status to 'error'
         .finally(() => setStatus('initial')); // and at the end we reset our status to 'initial'
   };

   return [status, sendData];
};