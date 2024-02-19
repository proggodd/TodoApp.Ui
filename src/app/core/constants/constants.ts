export const constants = {
    CURRENT_TOKEN: 'CURRENT_TOKEN',
  };
  
  const apiurl = 'https://localhost:7103/api';
  
  export const apiEndpoint = {
    AuthEndpoint: {
      login: `${apiurl}/authManagment/login`,
      register: `${apiurl}/authManagment/register`,
    },
    TodoEndpoint: {
      getAllTodo: `${apiurl}/todo`,
      addTodo: `${apiurl}/todo`,
      updateTodo: `${apiurl}/todo`,
    },
  };