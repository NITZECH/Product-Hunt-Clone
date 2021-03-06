import React from 'react'
import firebase from '../firebase'

function addUpVote(user, productId){
    if(!user) return Promise.reject();
}

const productRef = firebase.db.collection('producs').doc(productId);

return productRef.get().then((doc)=> {
      if(doc.exists){
          const data = doc.data();
          const previousVotes = data.votes;
          const vote = { voteBy: { id: user.uid, name: user.displayName } };
          const updatedVotes = [...previousVotes, vote];
          const voteCount = updatedVotes.length;
          productRef.update({ votes: updatedVotes, voteCount });
      
          return {
...data,
votes: updatedVotes,
voteCount: voteCount
          }
        }
})

export default {
    addUpVote
}