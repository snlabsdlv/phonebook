const express = require('express');
const contactsRouter = express.Router();
const contactsController = require('../controllers/contacts.controller');
contactsRouter.use(express.json());


contactsRouter.get('/', async (req, res) => {
    try {
        const queryParams = req.query;
        const contact = await contactsController.getAllContacts(queryParams);

        if (!contact) {
            return res.status(404).json([]);
        }
        return res.status(200).json(contact);
    } catch (error) {
        return res.status(500).json({ error: error });
    }
});



contactsRouter.get('/search', async (req, res) => {

    try {
        if (Object.keys(req.query).length === 0) {
            return res.status(400).json({ error: 'Missing Search Params' });
        }
        const searchParams = { ...req.query };
        const contact = await contactsController.searchContact(searchParams);
        console.log('contactsRouter SEARCH  ', contact);
        if (!contact) {
            return res.status(404).json([]);
        }
        return res.status(200).json(contact);
    } catch (error) {
        return res.status(500).json({ error: error });
    }
});




contactsRouter.get('/:id', async (req, res) => {
    try {
        const contact = await contactsController.getContactById(req.params.id);
        if (!contact) {
            console.log(`! getContactById contact  --> ${contact}`);
            return res.status(404).json([]);
        }
        return res.status(200).json(contact);
    } catch (error) {
        console.log(`get ERROR --> ${error}`);
        return res.status(500).json({ error: error });
    }
});

contactsRouter.post('/', async (req, res) => {
    try {
        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({ error: 'Missing Body' });
        }
        const contact = await contactsController.newContact(req.body);
        
        if (!contact || contact.hasOwnProperty('errors')) {
            return res.status(400).json({ error: 'Error Adding Contact' });
        }
        return res.status(201).json({ success: 'Created', id: contact._id });
    } catch (error) {
        console.log('contactsRouter --> ERROR', error);
        return res.status(500).json({ error: error });
    }
});

contactsRouter.put('/:id', async (req, res) => {
    try {
        if (!req.params.id) {
            return res.status(400).json({ error: 'Missing Id' });
        }
        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({ error: 'Missing Body' });
        }
        const contact = await contactsController.updateById(req.params.id, req.body);
        if (!contact) {
            // console.log(`! updateById contact  --> ${contact}`);
            return res.status(404).json({ error: 'Error Updating Contact', 'id': req.params.id });
        }
        return res.status(200).json(contact);
    } catch (error) {
        return res.status(500).json({ error: error });
    }
});

contactsRouter.delete('/:id', async (req, res) => {
    try {
        if (!req.params.id) {
            return res.status(400).json({ error: 'Missing Id' });
        }
        const contact = await contactsController.deleteById(req.params.id);
        if (!contact || Object.keys(contact).length === 0) {
            // console.log('delete() contact ', contact);
            return res.status(404).json({ error: 'Not Found', id: req.params.id });
        }
        return res.status(200).json({ success: 'Deleted', id: contact._id });
    } catch (error) {
        console.log(`delete error  --> ${error}`);
        return res.status(500).json({ error: error });
    }
});

module.exports = contactsRouter;
