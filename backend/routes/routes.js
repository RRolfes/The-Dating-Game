const UserController = require('../controllers/user_controller');
import {
  facebookLogin,
  facebookMiddleware,
  oauthCallback,
} from '../controllers/auth_controller';

module.exports = (app) => {
  app.get('/', (req, res) =>
    res.send('Hello World!')
  );
  app.get('/auth/facebook', facebookLogin);
  app.get('/auth/facebook/callback', facebookMiddleware, oauthCallback);

  app.get('/user/:id', UserController.find);
  app.put('/user/:id', UserController.edit);
  app.delete('/user/:id', UserController.delete);
};
