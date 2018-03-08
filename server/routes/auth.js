import jwt from 'express-jwt';
import config from '../config';

function getAuthToken(req) {
    return req.body.auth_cd;
}

var auth = {
    required: jwt({
        secret: config.secret,
        userProperty: 'payload',
        getToken: getAuthToken
    }),
    optional: jwt({
        secret: config.secret,
        userProperty: 'payload',
        credentialsRequired: false,
        getToken: getAuthToken
    })
};

export default auth;