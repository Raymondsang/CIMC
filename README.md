# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


### bookin instalation
# In the backend
python3 -m venv venv
pip install Flask flask-cors python-dotenv
pip install watchdog
pip install gunicorn
pip install Flask flask-cors python-dotenv watchdog

## how to run the code
python app.py

## functions 
remaining part the nodemailer
API key to run
API key from node

## codes to run after configuration(for node mailer)

npm install -g firebase-tools
firebase init functions

firebase deploy --only functions
npm install nodemailer


## securering the API key
Store your SendGrid API key or Gmail credentials in Firebase Functions Environment Config securely:

# firebase functions:config:set sendgrid.key="YOUR_SENDGRID_API_KEY"
# sgMail.setApiKey(functions.config().sendgrid.key);

