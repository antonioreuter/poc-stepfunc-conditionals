module.exports.handler = async (event, context) => {
    if (event.dbError) throw new Error(`Error id ${event.id} | jobDocId: ${event.jobDocId} -> ${event.dbError}`);
    
    console.log('Removing JobDocument from database for event', event);

    return event;
}