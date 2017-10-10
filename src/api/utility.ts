import _ from 'underscore';

export class Utility {
    validate(params, signature) {

        let isValid = _.chain(params)
            .keys()
            .isEqual(signature)
            .value();

        isValid = isValid && _.chain(params)
            .values()
            .isEmpty()

        if (!isValid || _.values(params))
            throw "This class require this two parameters: " + signature;

        return true;
    }
}
