const dev = {
    API_URL: 'http://localhost:5000/api'
  }
  
  const prod = {
    API_URL: 'https://api-cm.avernus.cloud/api'
  }
  
  const config = process.env.NODE_ENV === 'development' ? dev : prod
  
  export default config
  