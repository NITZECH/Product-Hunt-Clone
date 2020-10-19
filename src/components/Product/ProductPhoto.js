import { IonCard, IonImg, IonItem, IonList, IonThumbnail } from '@ionic/react'
import React from 'react'

function ProductPhoto({photos}) {
    const [index, setIndex] = useState(0);
    return (
        <IonCard>
            <IonList>
                <IonItem>
<div style={{margin: "auto"}}>
    <IonImg src={photos[index]} />
</div>
                </IonItem>
                <IonItem>
                    {photos.map((p,i) => (
                        <IonThumbnail key={`photo_${i}`}
                        onClick={() => setIndex(i)}
                        slot='start' >
                            <IonImg src={p} />
                        </IonThumbnail>
                    ))}
                </IonItem>
            </IonList>
        </IonCard>
    )
}

export default ProductPhoto
