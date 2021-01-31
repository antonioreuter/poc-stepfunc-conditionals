module.exports.handler = async (event, context) => {
    console.log('Storing unprocessed item for event', event);

    return event;
}