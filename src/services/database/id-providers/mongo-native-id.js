import { ObjectID as objectId } from 'mongodb';
import log from '@branch-app/log';

export default {
	generate,
	parse,
	stringify,
};

function generate(): {} {
	return objectId();
}

function parse(str): ?{} {
	if (str === void 0 || str === null)
		return null;

	if (str instanceof objectId)
		return str;

	try {
		return objectId(str);
	} catch (error) {
		throw log.info('invalid_id', [error]);
	}
}

function stringify(obj): ?string {
	if (obj === void 0 || obj === null)
		return null;

	if (obj instanceof String)
		return obj;

	return obj.toString();
}
