import * as $fh from 'fh-js-sdk';
import _ from 'underscore';

debugger;
const signature = ['alias', 'categories'];

function validate(params, signature) {
    let hasParam = _.chain(params)
        .keys()
        .isEqual(signature)
        .value();

    if (!hasParam)
        throw "This class require this two parameters: " + signature;

    return true;
}

export class PushNotification {

    constructor(pushConfiguration) {

        validate(pushConfiguration, signature);

        $fh.push(this.handleNotification.bind(this),
            this.registration,
            this.registrationError,
            pushConfiguration
        );
    }

    handleNotification(registration) {
        debugger;
        console.log('Notification is comming!!');
    }

    registration() {
        debugger
        console.log('Registration OK');
    }

    registrationError(err) {
        debugger
        console.log('Registration error : ', err);
    }
}
