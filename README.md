# Docker_Node_Socketio_Chat_Meetup
Creación de imagen y contenedor de Docker a partir de una aplicación de un chat en tiempo real, realizado con nodejs y socket.

Vease archivo Dockerfile: en el se incluyen las instrucciones bajo las cuales vamos a construir la imagen de Docker.

COMANDOS EMPLEADOS:
  
  Para las imágenes:
  
   Constuir/compilar una nueva imagen:
    
            docker build .
            
   Borrar una imagen:
   
            docker rmi <id/nombre_imagen>
            
 Para los contenedores:
 
   Correr un contenedor:
    
            docker run <id/nombre_imagen>
            
   Exponer el puerto del navegador al puerto del contenedor:
    
            docker run -d -p 3000:3000 <id/nombre_imagen>
            
   Para darle un nombre:
    
            docker run -d -p 3000:3000 --name <nombre_contenedor> <id/nombre_imagen>
            
   Contenedores activos:
    
            docker ps
            
   Para un contenedor:
    
            docker stop <id/nombre_contenedor>
            
   Arrancar un contenedor:
    
             docker start <id/nombre_contenedor>
             
   Borrar un contenedor:
    
             docker rm <id/nombre_contenedor>
    
 Para subir a registro Docker Hub una imagen:
  
   Etiquetar la imagen:
    
              docker tag <nombre_imagen> <nuevo_ nombre_imagen>
              
              <nuevo_ nombre_imagen> == nombre_usuario_dockerHub/nombre_imagen:tag_imagen
              
   Subir a Docker Hub:
    
              docker push <nuevo_ nombre_imagen>
              
