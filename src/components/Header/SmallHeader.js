import {IonHeader, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'

const SmallHeader = ({ title }) => {
    return (
      <IonHeader  >
          <IonToolbar color='primary' style={{background: "#cc4d29"}} >
              <IonTitle size='large'>
{title}
              </IonTitle>
          </IonToolbar>
      </IonHeader>
    )
}

export default SmallHeader
