const UserController = require('../controllers/user_controller');
const messageController = require('../controllers/message_controller');

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

  app.get('/messages', messageController.index);
  app.get('/messages/:id', messageController.show);
  app.delete('/message/:id', messageController.destroy);
  app.post('/message', messageController.create);
};
