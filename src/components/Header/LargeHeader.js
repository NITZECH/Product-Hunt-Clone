import {  IonHeader, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'

const LargeHeader = ({title}) => {
    return (
      <IonHeader collapse='condense' >
          <IonToolbar color='primary' >
              <IonTitle size='large'>
{title}
              </IonTitle>
          </IonToolbar>
      </IonHeader>
    )
}

export default LargeHeader