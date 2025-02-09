# aws lambda 
https://dashbird.io/blog/how-to-deploy-nodejs-application-aws-lambda/

https://dev.to/aws-builders/creating-a-serverless-api-using-aws-lambda-and-nodejs-with-typescript-and-expressjs-4kfk

# aws lambda deployed url
https://4780cronkh.execute-api.eu-central-1.amazonaws.com/dev/v1/ultramsg/ultramsgwebhook/f8jyx1x6p6e0h6r2
https://4780cronkh.execute-api.eu-central-1.amazonaws.com/dev/v1/ultramsg/ultramsgwebhook/f8jyx1x6p6e0h6r2

new deploy url with account koffimawuli.adjoda@connectpharma-228.com
test api: https://pbs9a02js2.execute-api.eu-west-3.amazonaws.com/prod/v1/ultramsg



# run locally ==> use ngrok
npm start 
# and then run ngrok
cd D:\dev\Tools\ngrok-v3-stable-windows-amd64
 .\ngrok.exe http 5000

Test url: 
https://6673-2001-861-45c1-9ac0-7433-94f8-99f1-124b.ngrok-free.app/v1/ultramsg


 # To deploy to aws lambda 
   # https://shubham-pandey.medium.com/serverless-deployment-with-different-aws-profiles-fbe6f8b4f3c
 sls deploy
  or 
 serverless deploy
 serverless deploy --stage prod