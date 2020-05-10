const url = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72' 
async function fetchApi(url){
  const result = await fetch(url).then(res => res.json())
  const mainList = document.getElementById('mainList') 
  mainList.innerHTML += getCard(result)
 
}
fetchApi(url)

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