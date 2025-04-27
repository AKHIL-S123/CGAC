export async function apiRequest({
    url,
    method = 'GET',
    id = null,
    params = {},
    body = null,
    headers = {},
  }) {
    try {
      console.log("Making request to:", url); // Log the URL
      
      let fullUrl = url;
  
      if (id) {
        if (!url.endsWith('/')) fullUrl += '/';
        fullUrl += id;
      }
  
      if (params && Object.keys(params).length > 0) {
        const queryString = new URLSearchParams(params).toString();
        fullUrl += `?${queryString}`;
      }
  
      console.log("Full URL:", fullUrl); // Log the full URL with params
  
      const options = {
        method,
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          ...headers,
        },
      };
  
      if (body) {
        options.body = JSON.stringify(body);
      }
  
      const response = await fetch(fullUrl, options);
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'API Request Failed');
      }
  
      const data = await response.json();
      console.log("Response data:", data);  // Log the response data
  
      return data;
    } catch (error) {
      console.error('API Error:', error.message);
      throw error;
    }
  }
  