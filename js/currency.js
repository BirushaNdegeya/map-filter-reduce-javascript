const apiCurrency = async () => {
   const resp = await fetch('https://api.exchangeratesapi.io/latest?base=USD');
   return await resp.json();
}