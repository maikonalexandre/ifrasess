import ReactDOM from 'react-dom/client';
import {App} from './App';
import {createServer, Model} from 'miragejs';
import React from 'react';

createServer({
  models:{
    lista: Model
  },
  
  seeds(server){
    server.db.loadData({
      lista:[
        {
          id:1,
          autor:'Mae Jamison',
          text: 'É o seu lugar no mundo; é a sua vida. Vá em frente e faça tudo o que puder com ela, e torne-a a vida que você quer viver'
        },
        {
          id:2,
          autor:'Eleanor Roossevelt',
          text: 'Lembre-se que ninguém pode fazer você se sentir inferior sem o seu consentimento'
        }
      ]
    })
  },
  
    routes(){
          this.namespace = 'api';
  
          this.get('/listas', () => {
          return this.schema.all('lista')
          }  
        )
        this.post('/listas', (schema, request) => {
          const data = JSON.parse(request.requestBody)
  
          return schema.create('lista', data)
        })
    }
  });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>

);


