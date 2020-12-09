const express = require('express');

const router = express.Router();
const logController = require('@/controllers/web/log');
const { sessionAuthentication } = require('@middlewares');
const { catchErrors } = require('@utils/util');

router.use(sessionAuthentication.sessionCheck);

router.get('/:num', catchErrors(logController.get));
router.delete('/session', catchErrors(logController.delSession));

module.exports = router;