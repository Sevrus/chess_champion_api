exports.success = (message, data) => {
    return { message, data };
};

exports.getUniqueId = (champions) => {
    const championsIds = champions.map(champion => champion.id);
    const maxId = championsIds.reduce((a, b) => Math.max(a, b));
    const uniqueId = maxId + 1;
    return uniqueId;
}