# RhythmCast

I have made a basic Music App Using TypeScript and Reactjs


# Steps required to run the project (Docker Required)

docker build . -t rhythmcast

docker run -it -d -p 3000:3000 --name rdocker rhytmcast


# Steps required to run KeyCloak (Docker Required)

docker run -p 8080:8080 -e KEYCLOAK_USER=<username> -e KEYCLOAK_PASSWORD=<password> quay.io/keycloak/keycloak:15.0.2
  
Change <username> to your preferred Keycloak admin username and <password> to your preferred admin password. 
These two inputs will be required to log in to the server.




## ScreenShots


Login Page
![image](https://user-images.githubusercontent.com/64985088/220409146-b6cc365b-08ce-4d87-b3ee-6c057e8a2c47.png)




Home Page

![image](https://user-images.githubusercontent.com/64985088/220408943-26b2c3ae-7428-4daf-bbe8-bb4af85ca4a6.png)


Login Page Using KeyCloak

![image](https://user-images.githubusercontent.com/64985088/221398691-8d89846c-fcee-4272-813b-e56f207316af.png)


![image](https://user-images.githubusercontent.com/64985088/221398713-3c9ec0c8-a91f-435d-9172-4eebea4dbdcf.png)


SignOut Using Cloak

![image](https://user-images.githubusercontent.com/64985088/221398746-6e3726d6-6b09-4130-ba83-3ee27e6977a0.png)




### `npm start`




