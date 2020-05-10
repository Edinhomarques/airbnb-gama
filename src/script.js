const url = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72' 
async function fetchApi(url){
  const result = await fetch(url).then(res => res.json())
  const mainList = document.getElementById('mainList') 
  mainList.innerHTML += getCard(result)
 
}
fetchApi(url)
    
function filterByHost(){
  event.preventDefault()
  
  const select = document.getElementById('selectHost')
  const cards = document.querySelectorAll('.card')
  const cardContent = document.querySelectorAll('.card__content')
      
  for(let i = 0; i < cards.length;  i++){
    const property = cardContent[i].querySelector('#property')
    const typeProperty = property.innerText.replace(/Tipo de propriedade:/, '') 
        
    if(typeProperty !== select.value && select.value !=''){
      cards[i].classList.add('hidden')
    } else {
      cards[i].classList.remove('hidden')
    }
  }


}

function getCard(result){
  return `
    ${
      result.map((res, index) => `
        <article class="card">
          <figure class="card__post">
            <img class="post__img " src=${res.photo} >
          </figure>
          <div class="card__content">
            <span class="card__content--flex">Avaliação: 4.5</span>
            <p>${res.name}</p>
            <span class="card__content--size " id="property">Tipo de propriedade:${res.property_type}</span>     
            <span class="card__content--size">Preço: R$${res.price}</span>
                 
          </div>
        </article>
      ` ).join(' ')
    }
  `
}