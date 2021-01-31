const aws = require('aws-sdk');

const stepFunctions = new aws.StepFunctions();

module.exports.handler = async (event, context) => {
    const records = event.records;

    if (records && records.length > 0) {
        const stepFuncParams = records.map((el) => {
            return {
                stateMachineArn: process.env.STATE_MACHINE,
                input: JSON.stringify(el)
            }
        });

        const promises = stepFuncParams.map(params => stepFunctions.startExecution(params).promise());

        await Promise.all(promises);
        console.log('Started step functions!');
        return true;
    } else {
        console.log('There are no records to be processed');
        return false;
    }
}