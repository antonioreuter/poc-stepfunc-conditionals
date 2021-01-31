module.exports.handler = async (event, context) => {
    console.log('Executing jobOrchestration for event', event);
    return event;
}