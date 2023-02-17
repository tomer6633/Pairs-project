function uid() {
    return Date.now().toString(36) + Math.random().toString(36);
  }




  function renderFlippedCards(cards:Card[],renderElementId){
  
    try {   
      if(!cards|| !Array.isArray(cards))
      throw new Error(`cards is not an array`)
  
      let page = "";
      for (let j = 0; j <= cards.length - 1; j++) {
        page +=`<div class="card" onclick="renderCardsByID(cards,'cards','${cards[j].uid}')">
          <img src="data:image/jpeg;base64,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" alt="">
            </div>`;}
      const element = document.querySelector(`.${renderElementId}`);
      if(!element) throw new Error(`couldent find element `)
      element.innerHTML=page;
  } catch (error) {
      console.error(error)
  }
  }
  
  function renderCardsByID(cards:Card[],renderElementId,uid:string):void{
    try {   
      
        if(!cards|| !Array.isArray(cards))
        throw new Error(`cards is not an array`)
        let page = "";
        for (let i=0;i<=cards.length-1;i++){
            if  (cards[i].uid===uid){
              page += `<div class="card">
              <img width="100%" height="400PX"  src='${cards[i].PictureURL}'/>
              </div> `
            }
        }
        // const htmlCard= cards
        // .map((cards)=>{
        //     return`
        //     <div class="card" onclick="turnCards()">
        //     <img src="${cards.PictureURL}" alt="">
        //  </div>
        //     `
        // })
        // .join(` `)
        
        const element = document.querySelector(`.${renderElementId}`);
        if(!element) throw new Error(`couldent find element `)
        element.innerHTML=page;
    } catch (error) {
        console.error(error)
    }
  }
  
  // function renderCards(cards:Card[],renderElementId):void{
  //   try {   
  //       if(!cards|| !Array.isArray(cards))
  //       throw new Error(`cards is not an array`)
  //       const htmlCard= cards
  //       .map((cards)=>{
  //           return`
  //           <div class="card" onclick="turnCards()">
  //           <img src="${cards.PictureURL}" alt="">
  //        </div>
  //           `
  //       })
  //       .join(` `)
  //       const element = document.querySelector(`.${renderElementId}`);
  //       if(!element) throw new Error(`couldent find element `)
  //       element.innerHTML=htmlCard;
  //   } catch (error) {
  //       console.error(error)
  //   }
  // }