# connect-pharma-whatsapp



git add .
git commit -m " commit msg "
git push heroku master


# waapi -> not used
https://waapi.app/account/instances/2819
https://waapi.readme.io/reference/post_instances-id-client-action-send-message
https://waapi.app/docs/1.0/api/instances/webhooks/general#section-4

# ultramsg --> finally used
https://ultramsg.com/fr/
https://user.ultramsg.com/app/instances/instance.php?id=70436
https://blog.ultramsg.com/receive-whatsapp-api-messages-use-webhook-nodejs/ --> tuto détaillé
https://blog.ultramsg.com/receive-whatsapp-api-messages-use-webhook-nodejs/
https://www.npmjs.com/package/ultramsg-whatsapp-api

https://blog.ultramsg.com/whatsapp-api-by-ultramsg-faq/
https://blog.ultramsg.com/whatsappapi-message-with-node-js-and-ultramsg/
https://blog.ultramsg.com/whatsappapi-message-with-node-js-and-ultramsg/
https://blog.ultramsg.com/whatsapp-api-by-ultramsg-faq/

# ultramsg and chatgtp
https://blog.ultramsg.com/how-make-whatsapp-chatbot-with-chatgpt/


# aws lambda configuration
https://dashbird.io/blog/how-to-deploy-nodejs-application-aws-lambda/

https://dev.to/aws-builders/creating-a-serverless-api-using-aws-lambda-and-nodejs-with-typescript-and-expressjs-4kfk


# run locally ==> use ngrok
npm start 
# and then run ngrok
cd D:\dev\Tools\ngrok-v3-stable-windows-amd64
 .\ngrok.exe http 5000


 # To deploy to aws lambda 
   # https://shubham-pandey.medium.com/serverless-deployment-with-different-aws-profiles-fbe6f8b4f3c
 sls deploy
  or 
 serverless deploy
 serverless deploy --stage prod


# heroku deploy with Git
https://devcenter.heroku.com/articles/git
https://devcenter.heroku.com/articles/deploying-nodejs#build-your-app-and-run-it-locally



# aws lambda deployed url
# dev
https://4780cronkh.execute-api.eu-central-1.amazonaws.com/dev/v1/ultramsg/ultramsgwebhook/f8jyx1x6p6e0h6r2

# prod
https://7gdotec7t3.execute-api.eu-central-1.amazonaws.com/prod/v1/ultramsg/ultramsgwebhook/f8jyx1x6p6e0h6r2

# deploy lambda hotmail account
https://n9kpt6bgf1.execute-api.eu-west-3.amazonaws.com/dev/v1/ultramsg/ultramsgwebhook/f8jyx1x6p6e0h6r2

# heroku
https://connect-pharma-whatsapp-29e601c2f4b0.herokuapp.com/ultramsgwebhook/f8jyx1x6p6e0h6r2


