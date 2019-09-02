const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const Client = require('./models/client');
const Team = require('./models/team');
const User = require('./models/user');

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

// MongoDB database
const dbRoute = 'mongodb://localhost/tucanton';

// connects our back end code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true });
let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));
// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));


// Routes

// Teams

router.get('/team/getAll', (req, res) => {
    Team.find((err, data) => {
        if (err)
            return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
});

router.post('/team/update', (req, res) => {
    const { id, update } = req.body;
    Team.findByIdAndUpdate(id, update, (err) => {
        if (err)
            return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

router.delete('/team/delete', (req, res) => {
    const { id } = req.body;
    Team.findByIdAndRemove(id, (err) => {
        if (err) 
            return res.send(err);
        User.find({team: id}, (err, users) => {
            for(let i = 0; i < users.length; i++ ){
                Client.deleteMany({ user: users[i]._id}, (err) => {
                    if(err)
                        return res.send(err);
                    User.deleteMany({ team: id}, (err) => {
                        if(err)
                            return res.send(err);
                        return res.json({ success: true });
                    })
                })
            }
        })
    });
});

router.post('/team/create', (req, res) => {
    let team = new Team();
  
    const { name } = req.body;
  
    if (!name) {
        return res.json({
            success: false,
            error: 'INVALID INPUTS',
        });
    }
    team.name = name;
    team.save((err) => {
        if (err) 
            res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

// Clients

router.get('/client/getAll', (req, res) => {
    Client.find({}, (err, data) => {
        User.populate(data, {path: 'user'}, (err, data) => {
            if(err)
                res.json({ success: false, error: err});
            return res.json({ success: true, data: data})
        });
    });
});

router.get('/client/get/:user', (req, res) => {
    const user = req.params.user
    Client.find({user: user}, (err, data) => {
        User.populate(data, {path: 'user'}, (err, data) => {
            if(err)
                res.json({ success: false, error: err});
            return res.json({ success: true, data: data})
        });
    });
});

router.post('/client/update', (req, res) => {
    const { id, update } = req.body;
    Client.findByIdAndUpdate(id, update, (err) => {
        if (err)
            return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

router.delete('/client/delete', (req, res) => {
    const { id } = req.body;
    Client.findByIdAndRemove(id, (err) => {
        if (err) 
            return res.send(err);
        return res.json({ success: true });
    });
});

router.post('/client/create', (req, res) => {
    let client = new Client();
  
    const { user, name, email } = req.body;
  
    if ((!user && user !== 0) || !name || !email) {
        return res.json({
            success: false,
            error: 'INVALID INPUTS',
        });
    }
    client.name = name;
    client.email = email;
    client.user = user;
    client.save((err) => {
        if (err) 
            res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

// Users

router.get('/user/getAll', (req, res) => {
    User.find({}, (err, data) => {
        Team.populate(data, {path: 'team'}, (err, data) => {
            return res.json({ success: true, data: data });
        });
    });
});

router.get('/user/get/:team', (req, res) => {
    const team = req.params.team
    User.find({team: team}, (err, data) => {
        if(err)
            res.json({ success: false, error: err});
        return res.json({ success: true, data: data})
    });
});

router.post('/user/update', (req, res) => {
    const { id, update } = req.body;
    User.findByIdAndUpdate(id, update, (err) => {
        if (err)
            return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

router.delete('/user/delete', (req, res) => {
    const { id } = req.body;
    User.findByIdAndRemove(id, (err) => {
        if (err) 
            return res.send(err);
        Client.deleteMany({ user: id}, (err) => {
            if(err)
                return res.send(err);
            return res.json({ success: true });
        })
    });
});

router.post('/user/create', (req, res) => {
    let user = new User();
  
    const { team, name } = req.body;
  
    if ((!team && team !== 0) || !name) {
        return res.json({
            success: false,
            error: 'INVALID INPUTS',
        });
    }
    user.name = name;
    user.team = team;
    user.save((err) => {
        if (err) 
            res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

// append /api for our http requests
app.use('/api', router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));