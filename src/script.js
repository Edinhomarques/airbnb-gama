const url = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72' 
async function fetchApi(url){
  const result = await fetch(url).then(res => res.json())
  const mainList = document.getElementById('mainList') 
  mainList.innerHTML += getCard(result)
 
}
fetchApi(url)
  