import { IonButton, IonCol, IonContent, IonInput, IonItem, IonLabel, IonPage, IonRow } from '@ionic/react'
import React from 'react'
import NavHeader from '../components/Header/NavHeader'

import useFormValidation from "../hooks/useFormValidation";
import firebase from "../firebase";
import validatePasswordReset from '../Auth/ValidatePasswordReset';
import { toast } from "../utils/toast";

const INITIAL_STATE = {
  email: "",
 
};
const Forgot= (props) => {
    const {
        handleSubmit,
        handleChange,
        values,
        isSubmitting,
      } = useFormValidation(INITIAL_STATE, validatePasswordReset, handleResetPassword);
      const [busy, setBusy] = React.useState(false);

      async function handleResetPassword() {
        setBusy(true);
        const { email } = values;
        try {
          await firebase.resetPassword(email);
          toast("Check your email to reset your password");
          props.history.push("/");
        } catch (err) {
          console.error("Password Reset Error", err);
          toast(err.message);
        }
        setBusy(false);
      }
    return (
        <IonPage>
            <NavHeader title="Forgot Your Password" />
            <IonContent>
                

               <IonItem lines='full'>
                <IonLabel position='floating'>Email</IonLabel> 
                    <IonInput name='email' 
                    type='text'
                    values={values.email}
                    onIonChange={handleChange}
                     required ></IonInput>
               </IonItem>

               <IonRow>
                   <IonCol>
                       <IonButton type='submit' 
                       onClick={handleSubmit}
                       disabled={isSubmitting}
                       color='primary' expand='block' >Get Reset Link</IonButton>
                   </IonCol>
               </IonRow>
            </IonContent>
        </IonPage>
    )
}

export default Forgot
