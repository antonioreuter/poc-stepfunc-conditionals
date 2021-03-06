module.exports.handler = async (event, context) => {
    if (event.iotError) throw new Error(`Error id ${event.id} | jobDocId: ${event.jobDocId} -> ${event.iotError}`);

    console.log('Canceling IoT Job for event', event);

    return event;
}