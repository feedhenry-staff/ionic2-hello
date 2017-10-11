import * as $fh from 'fh-js-sdk';
import _ from 'underscore';


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

    handleNotification(registration) {;
        console.log('Notification is comming!!');
    }

    registration() {
        console.log('Registration OK');
    }

    registrationError(err) {
        console.log('Registration error : ', err);
    }
}
