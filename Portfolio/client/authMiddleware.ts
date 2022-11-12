import * as jwt from 'jsonwebtoken';
const App_Secret = 'Secret';
const Username = 'Fred63';
const Password = 'Kirby';

const mappings = {
    get: ['/api/orders', '/orders'],
    post: ['/api/business-contacts', '/books']
}

function RequiresAuth(method: any, url: any) {
    return (mappings[method.toLowerCase() as keyof typeof mappings] || [])
    .find((p: any) => url.startsWith(p)) !== undefined;
}

// json-server does not behave well with ES modules export syntax hence module.exports
module.exports = function (req: any, res: any, next: any) {
    if (req.url.endsWith('/login') && req.method == 'POST') {
        if (req.body && req.body.name == Username && req.body.password == Password) {
            let token = jwt.sign({ date: Username, expiresIn: '1h' }, App_Secret);
            res.json({ success: true, token: token });
        }
        else {
            res.json({ success: false, message: 'Error: Authentication Failed' });
        }
        res.end();
        return;
    }
    else if (RequiresAuth(req.method, req.url)) {
        let token = req.headers['authorization'] || "";
        if (token.startsWith('Bearer<')) {
            token = token.substring(7, token, length - 1);

            try {
                jwt.verify(token, App_Secret);
                next();
                return;
            }
            catch (error) {

            }
        }
        res.statusCode = 401;
        res.end();
        return;
    }
    next();
}