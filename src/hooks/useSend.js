import { useState } from "react";
import { init, send } from 'emailjs-com';

export const useSend = () => {
   const [status, setStatus] = useState({
      initial: true,
      loading: false,
      sent: false,
      error: false
   });
   const Params = {
      userID: process.env.REACT_APP_MAILER_USER_ID,
      templateID: process.env.REACT_APP_MAILER_TEMPLATE_ID,
      serviceID: process.env.REACT_APP_MAILER_SERVICE_ID,
   };

   const sendData = (data) => {
      //the information is being sent, so we set status.loading to true and status.initial to false.
      setStatus({
         ...status,
         loading: true,
         initial: false
      });

      //we init our library with our user ID
      init(Params.userID);
      /*
      send is a method, from emailjs, which receives four parameters:
         1 -> our service's ID
         2 -> then our template's ID
         3 -> the parameters that our template requires
         4 -> and finally, our user ID
      */
      send(
         Params.serviceID,
         Params.templateID,
         data,
         Params.userID,
      )
         .then(() => setStatus({
            ...status,
            sent: true,
            initial: true,
            loading: false
         })) //if the information is sent correctly, we set status.sent and status.initial to true; loading becomes false.
         .catch(() => setStatus({
            ...status,
            error: true,
            initial: true,
            loading: false
         })); //otherwise, if anything fails then we set status.error and status.initial to true, also loading turns to be false.
   };

   return [status, sendData];
};