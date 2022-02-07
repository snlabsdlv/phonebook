const { Contact } = require('../models/contact.model');


async function getAllContacts(queryParams) {
    try {

        console.log('queryParams', queryParams);
        const limitParams = queryParams.hasOwnProperty('limit') ? queryParams.limit : 0;
        const sortParams = queryParams.hasOwnProperty('sort') && (queryParams.sort === "1" || queryParams.sort === "-1") ? queryParams.sort : 1;
        const contact = await Contact.find().sort({ name: parseInt(sortParams) }).limit(parseInt(limitParams)).then((result) => result);
        if (contact) {
            return contact;
        }
    } catch (error) {
        console.log(`getAllContacts error--> ${error}`);
        return error;
    }
}



async function searchContact(queryParams) {
    try {

        const objKeysPhone = Object.keys(queryParams).filter(elem => elem.includes('Phone'));
        objKeysPhone.map(key => queryParams[key].charAt(0) === '+' ?
            queryParams[key] :
            queryParams[key] = '+' + queryParams[key].trim().substring(0)
        );
        const contact = await Contact.find({ ...queryParams }).then((result) => result);
        if (contact) {
            return contact;
        }
    } catch (error) {
        console.log(`searchContact error--> ${error}`);
        return error;
    }
}




async function getContactById(contactId) {
    try {
        const contact = await Contact.findById({ _id: contactId }).then((result) => result);
        if (contact) {
            return contact;
        }
    } catch (error) {
        console.log(`getContactById error --> ${error}`);
        return error;
    }
}

async function newContact(postData) {
    try {
        const contact = await Contact.create({ ...postData }).then((result) => result);
        if (contact) {
            return contact;
        }
    } catch (error) {
        console.log(`newContact error --> ${error}`);
        // I know that i can return directly the message of the Error.
        // In this case, i want to log/see the complete error "chain".
        return error;
    }
}

async function updateById(contactId, updateData) {
    try {
        // We are returing the new Updated Contact with options {new:true}
        // We could just return the _id, or the field that is being updated.
        // For simplicity we are returning the whole Record/Object
        const contact = await Contact.findByIdAndUpdate(contactId, { ...updateData }, { new: true }).then((result) => result);
        if (contact) {
            return contact;
        }
    } catch (error) {
        console.log(`updateById error --> ${error}`);
        return error;
    }
}

async function deleteById(contactId) {
    try {
        const contact = await Contact.findByIdAndDelete(contactId).then((result) => result);
        if (contact) {
            return contact;
        }
    } catch (error) {
        console.log(`deleteById error --> ${error}`);
        return error;
    }
}

module.exports = { searchContact, getAllContacts, newContact, getContactById, updateById, deleteById };
