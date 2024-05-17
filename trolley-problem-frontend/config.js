const dev = {
    API_URL: 'http://localhost:5000/api'
  }
  
  const prod = {
    API_URL: 'https://10.69.69.231:5000/api'
  }
  
  const config = process.env.NODE_ENV === 'development' ? dev : prod
  
  export default config
  