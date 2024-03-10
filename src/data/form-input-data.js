import { uniqueId } from "lodash";


const INPUT_DATA_OBJ = [
    {
        key: uniqueId("input-"),
        htmlFor: 'name-input',
        type: 'text',
        id: 'name-input',
        labelText: 'Full Name ',
        name: 'from_name',
        isRequired: true,
        validationErrorMsg: 'Please Provide a Name',
    },
    {
        key: uniqueId("input-"),
        htmlFor: 'email-input',
        type: 'email',
        id: 'email-input',
        labelText: 'Email ',
        name: 'user_email',
        isRequired: true,
        validationErrorMsg: 'Please Provide a valid Email',
    },
    {
        key: uniqueId("input-"),
        htmlFor: 'phone-input',
        type: 'tel',
        id: 'phone-input',
        labelText: 'Phone ',
        name: 'user_phone',
        isRequired: false,
        validationErrorMsg: '',
    },
    {
        key: uniqueId("input-"),
        htmlFor: 'message-body',
        type: '',
        id: 'message-body',
        labelText: 'message ',
        name: 'message',
        isRequired: true,
        validationErrorMsg: 'Provide an Email Body',
        as: 'textarea',
        styleAttribute: { height: '150px' },
        className: 'p-3',
    },
]

export default INPUT_DATA_OBJ;
